Title: Feature showcase: Test matrix generation
Headline: available in Kiwi TCMS v11.0
author: Alexander Todorov
date: 2022-01-24 19:40
comments: true
og_image: images/features/props-and-envs/banner.png
twitter_image: images/features/props-and-envs/banner.png
tags: features


The upcoming Kiwi TCMS v11 contains new functionality around TestCase parameters and
TestRun environments which has an impact on how your final test execution matrix will
look like. This article provides detailed information about these features but have
in mind that they are still considered to be a technology-preview.


Parameters
----------

Consider a login functionality which accepts email address and password. Possible states
for these fields are:

- Email address:
    - `valid` - well formed email string, exists in database, access is allowed
    - `invalid` - malformed email string, should not exist in the DB but this fact is not relevant to the test
    - `disabled` - well formed email string, exists in database, access is not allowed

- Password:
    - `correct` - matches the value in database for the given email address
    - `another` - matches the value in database which is related to another email address
    - `wrong` - doesn't match the value in database
    - `empty` - value is empty string, a special case of `wrong`
    - `invalid` - value doesn't conform to predefined rules. May or may not be relevant to login functionality

Depending on how the software under test is put together you can design multiple test cases.
Fundamentally however these are the same test case and the above states are input parameters to it!

**Definition: TestCase parameters are different input values which do not fundamentally affect the result of
a test case! A TestCase with parameters will result into multiple test executions!**

In other words you will be executing a parameterized test scenario multiple times with different input values!
Inside Kiwi TCMS the actual parameter values during execution are recorded into the `TestExecution` model
which will not change if you modify test case parameter values afterwards!

**Definition: TestExecution parameters record a snapshot of TestCase parameters at the time when you intended
to execute a particular test scenario!**


Environments
------------

A testing environment represents the specifics of where exactly you executed your test suite.
Consider this example:

> The default desktop environment of Fedora is GNOME, but if you prefer an alternative,
> you can download installation media which contains slightly differently defaults, e.g.
> KDE, Xfce, MATE and others, see <https://spins.fedoraproject.org>.

Regardless of which Fedora variant you choose the expected functionallity
of the default desktop experience is the same. However this can only be guaranteed with exhaustive
testing across all variants. Check-out the test matrix at
<https://fedoraproject.org/wiki/Test_Results:Fedora_36_Rawhide_20220118.n.0_Desktop?rd=Test_Results:Current_Desktop_Test#Non_release-blocking_desktops:_x86_.2F_x86_64>


**Definition: a TestRun environment is a set of attributes which apply to the entire test suite
at the time of execution. Usually you expect test results in different environments to be the same!**

In Kiwi TCMS environments are represented as named containers of key/value pairs.
The same key may have multiple values!
They can be found under *ADMIN -> Everything else -> Environments*.

Because environments are meant to affect the entire test suite they are linked to the
`TestRun` model. When creating a new test run you can select multiple `Environment`
records.


Test matrix generation
----------------------

The existing behavior in Kiwi TCMS is that when a test run is created there will be only one
test execution for every test case which is added inside this test run.

In the Fedora example shown above some of the test cases also have their own parameters,
e.g. the *QA:Testcase_desktop_app_basic* scenario.

**Definition: TestRun environment key/values will be combined with TestCase parameter key/values
to form the final test matrix! This opens up the possibility for combinatorial test execution
generation.**

Once parameters and environment(s) are specified you will start seeing multiple test executions
for the same test case inside newly created test runs. By default a full-combination test matrix
will be created. The other option is to [pairwise](https://www.pairwise.org/) all key/value records.

**Important: test execution generation works only when creating or cloning a test run that contains
test cases. This feature still does not work for test cases added after a test run is created!**


Environment(s) vs Tag(s)
------------------------

Inside Kiwi TCMS you can use both environments and tags to annotate test runs.
There are 3 important facts that hold true:

- Tags possess only informational value, they don't influence how you perform testing;
- Environments possess informational value and govern the final test matrix;
- Environments which have a single value for each different key are the same as tags!

!["Example from #1344"](/images/features/props-and-envs/env_from_1344.png "Example from #1344")

If we look at this example from [Issue #1344](https://github.com/kiwitcms/Kiwi/issues/1344) we
can make out the following keys:

- *Driver* - 2 values
- *API* - 2 values
- *Python* - 2 values
- *Java* - 1 value
- *Eclipse* - 1 value
- *Host OS* - 1 value
- *Target OS* - 1 value
- *Redistributable* - 1 value
- *Testing Type* - 1 value

Here *Driver*, *API* and *Python* clearly should affect your test matrix. Otherwise there isn't
much point in having the different values recorded in the first place. That results in a 8x
multiplication factor for every functionality that may be affected/related to these attributes,
presumably the entire functionality of the product under test.

*Java*, *Eclipse*, *Host OS* and *Target OS* carry only informational value but they look like
more values could be possible. If that's the case these attributes will also affect the overall
test matrix.

*Redistributable* and *Testing Type* look like information-only attributes. They don't appear
to have any relevance to the test matrix at all. The same information-only effect can be achieved
both with environments and with tags.

**Practical rules:**

1. Attributes which affect a single test case should be defined as TestCase parameters
1. Attributes which affect all test cases in a suite should be defined as TestRun environment(s)
1. One big TestRun is likely the best from organizational and optimizational point of view

You may decide to have multiple smaller test runs, usually with 1 value per environment key,
if you think that fits your workflow better. However you may be missing on some optimizations if you
choose to do so.


Real life example
-----------------

To illustrate how all of these new features work let's look at
[Partitioning custom software RAID](https://fedoraproject.org/wiki/QA:Testcase_partitioning_custom_software_RAID)
test case from Fedora QA. It instructs the tester to install Linux and inside the
partitioning screen create a *Software RAID* partition, format it with a filesystem and
assign a mount point! It is expected that once installation is complete the machine will
reboot, tester will be able to login as root and the created filesystem will be available!

Factors that could affect this functionality:

-  *Raid Level*: Fedora supports 7 of them - 0, 1, 4, 5, 6, 10 and linear. These are all different drivers
   located under `/lib/modules/$(uname -r)/kernel/drivers/md`

        ./linear.ko.xz
        ./raid0.ko.xz
        ./raid10.ko.xz
        ./raid1.ko.xz
        ./raid456.ko.xz

- *Mount Point*: `/` for example is mounted very early in the boot process, `/home` is mounted much later.
  `/` also relates to rescue mode, while `/home` doesn't. `/home`, if corrupted, may affect the terminal
  login process though
- *Encryption*: Yes/No. This is stackable on top of the RAID device and "should-just-work". However it is often
  included into other partitioning test cases in order to discover weird issues and because it is a critical
  functionality

We may add the actual filesystem type, used to format the RAID block device,
e.g. *xfs*, *ext3*, *ext4*, but that's not needed here! Here's how this test case looks in Kiwi TCMS:

!["RAID test case"](/images/features/props-and-envs/raid-tc-with-params.png "RAID test case")


Remember that Fedora comes with multiple variants for multiple CPU architectures! Of those we'll consider
*Server* and *Workstation*, which are both available for the *aarch64* and *x86_64* CPU
architectures. Here's how this can be represented inside Kiwi TCMS:

!["Fedora variants represented as environment"](/images/features/props-and-envs/env-fedora-variants.png "Fedora variants represented as environment")

<br/>
<br/>
Next we need to organize test execution for an upcoming release by creating test run(s) and
selecting environment and matrix generation type:
!["New test run with environment"](/images/features/props-and-envs/new-tr-with-env.png "New test run with environment")

The possible outcomes are:

- **112 test executions**: full test matrix between all Fedora variants and all RAID parameters
- **56 test executions**: 4 TR x 14 TE; one TR/variant without environment; RAID parameters are pairwised
- **16 test executions**: all Fedora variants are pairwised together with all RAID parameters

Finally this is how the resulting test run looks like. Notice the 3 boxes icon for each
test execution, listing the actual parameters which should be used during testing:

!["TR with environment, TE with parameters"](/images/features/props-and-envs/tr-env-and-te-props.png "TR with environment, TE with parameters")

Environment parameters are read-only here b/c they have been copied to all test execution records.
It usually doesn't make sense to modify your environment mid-way during test execution.
If that's needed or you've made a mistake it's probably easier to create a new test run.


Happy Testing!


---

If you like what we're doing and how Kiwi TCMS supports various communities
please help us!

- [Give ⭐ on GitHub](https://github.com/kiwitcms/Kiwi/stargazers);
- [Give 👍 on GitLab](https://gitlab.com/gitlab-org/gitlab/-/issues/334558);
- [Donate via Open Collective](https://opencollective.com/kiwitcms/donate) as low as 1 EUR;
- [Join our newsletter](https://kiwitcms.us17.list-manage.com/subscribe/post?u=9b57a21155a3b7c655ae8f922&id=c970a37581)
  and follow all project news;
- [Become a contributor](https://kiwitcms.readthedocs.io/en/latest/contribution.html) and an awesome open source hacker;
- [Become a customer](/#subscriptions) and we'll share our profits with the community
