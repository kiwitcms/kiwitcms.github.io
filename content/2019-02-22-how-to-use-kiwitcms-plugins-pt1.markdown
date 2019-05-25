Title: How to use Kiwi TCMS plugins, Pt. 1
headline: to import results from automated tests
date: 2019-02-22 15:10
comments: true
author: Alexander Todorov
og_image: images/plugins.png
twitter_image: images/plugins.png
tags: community, plugins

In
[release notes for v6.5]({filename}2019-02-01-version-6.5.rst)
we announced several plugins which will fetch test names and execution results
from your automated test suite.

Plugins can be controlled via environment variables which will affect how
test results are recorded in the Kiwi TCMS database! This blog post is an introduction
how that works and what you can do with it! For this purpose I will be using the
[plugin-demo](https://github.com/kiwitcms/plugin-demo) repository, which simulates
real development work.

*Full documentation and list of available plugins is available in chapter
[Automation Frameworks Plugins](https://kiwitcms.readthedocs.io/en/latest/plugins.html)!*

Always create new TestRun by default
------------------------------------

The default behavior is always to create a new TestRun if controlling variables
are not overridden! Product name, version and build will receive default values
if tests are running in Travis CI or Jenkins. For example
[Travis Build #2](https://travis-ci.org/kiwitcms/plugin-demo/builds/496217246) for
[commit d455fb4](https://github.com/kiwitcms/plugin-demo/commit/d455fb42fb7c2aedadfd5f66de7d131109c03350)
creates [TR-12](https://tcms.kiwitcms.org/runs/12/) and
[TP-10](https://tcms.kiwitcms.org/plan/10/)!

```
Product=kiwitcms/plugin-demo
Version=d455fb42fb7c2aedadfd5f66de7d131109c03350
Build=2
```

Next we convert the README file from Markdown to reStructuredText which triggers
[Travis Build #3](https://travis-ci.org/kiwitcms/plugin-demo/builds/496220575) for
[commit 418b80b](https://github.com/kiwitcms/plugin-demo/commit/418b80b3bbb65a799f695dc59d488c76f560fa2b).
This build **again** creates a new TestRun and new TestPlan for it. Respectively
[TR-14](https://tcms.kiwitcms.org/runs/14/) and
[TP-12](https://tcms.kiwitcms.org/plan/12/)!

```
Product=kiwitcms/plugin-demo
Version=418b80b3bbb65a799f695dc59d488c76f560fa2b
Build=3
```

**Important:** we can see that version is different which will affect how artifacts
are organized in Kiwi TCMS, possibly affect how you will report status to stakeholders!


Override ENV variables for more control
---------------------------------------

Let's say the QA team has decided that all test results must be reported under the
same TestPlan. This means version must be the same between various builds in Travis CI!
To control this we export `TCMS_PRODUCT_VERSION=master` in CI **before** executing
the TAP plugin! Checkout the commit on GitHub to see how it is done!

This triggers
[Travis Build #4](https://travis-ci.org/kiwitcms/plugin-demo/builds/496223505) for
[commit e484e59](https://github.com/kiwitcms/plugin-demo/commit/e484e59023caf665e8f93341395af6f397691b93).
Because this is the first time where Version == master the plugin creates
[TP-14](https://tcms.kiwitcms.org/plan/14/) and reports the results under
[TR-16](https://tcms.kiwitcms.org/runs/16/).

```
Product=kiwitcms/plugin-demo
Version=master
Build=4
```

Right after that I realized we can make this configuration a bit more generic
because our team is planning to support multiple versions of the product and
development will be done in separate branches!
[Travis Build #5](https://travis-ci.org/kiwitcms/plugin-demo/builds/496228021) for
[commit f1f2878](https://github.com/kiwitcms/plugin-demo/commit/f1f2878d80a7327b54c8e33d1c6d6f14153d6d12)
still ends up with Version == master because we are still working on the `master`
branch! That is to say, the product is in active mode of development.

Results are reported in
[TR-18](https://tcms.kiwitcms.org/runs/18/) which is again part of
[TP-14](https://tcms.kiwitcms.org/plan/14/).

```
Product=kiwitcms/plugin-demo
Version=master
Build=5
```

[Travis Build #6](https://travis-ci.org/kiwitcms/plugin-demo/builds/496229819) for
[commit df6153b](https://github.com/kiwitcms/plugin-demo/commit/df6153b2495bfc6825f25e544ae1806108aa490f)
adds the new functionality *README badges* and reports test results in
[TR-20](https://tcms.kiwitcms.org/runs/20/) which is again part of
[TP-14](https://tcms.kiwitcms.org/plan/14/).


More ENV overrides
------------------

While giving status reports back to stakeholders and developers the information that
we have in the TestRun is Build number! This follows the numbering scheme in Travis CI
(or Jenkins job number) and isn't very useful.

Let's define `TCMS_BUILD` to be the first 7 characters of the commit hash! When QA
tells devel that something isn't working and redirects them to the TestRun they can
immediately use the Build information and git checkout the offending variant of the product
for investigation.

This results in
[Travis Build #7](https://travis-ci.org/kiwitcms/plugin-demo/builds/496233565) for
[commit bf75d0a](https://github.com/kiwitcms/plugin-demo/commit/bf75d0abe9695e3ee3b49b8944bab9db43bb25e6),
[TR-22](https://tcms.kiwitcms.org/runs/22/),
[TP-14](https://tcms.kiwitcms.org/plan/14/).

```
Product=kiwitcms/plugin-demo
Version=master
Build=bf75d0a
```


Report results in pre-existing TestRun
--------------------------------------

There are many reasons you may want to do this:

* include both manual and automation tests for the same build;
* mix results from multiple test suites for the same build,
  e.g. unit, functional, performance
* mix results from multiple but similar platforms in the same build,
  e.g. cross-platform application for iOS and Android

To do so I've created [TR-24](https://tcms.kiwitcms.org/runs/24/) beforehand and
configured `TCMS_RUN_ID=24` in my CI environment. TR-24 also contains
[TC-57: Verify we can report results from several plugins into the same TR](https://tcms.kiwitcms.org/case/57/).
this was created and added via the web interface.

**Note:** mixing additional test cases can be done either before or after
automation results are reported with the plugin!

**Important:** when reporting results to an existing TestRun Kiwi TCMS plugins
don't care in which TestPlan this TR is! In theory it is possible to report
the results for `Product=kiwitcms/plugin-demo` into any TP/TR pair! However we
don't want to do this crazy thing and instead I've created TR-24 inside the already
existing TP-14!

**Note:** because I don't know what is the git commit beforehand I've configured
TR-24 with `Build=unspecified`. If I wanted I could update this with the correct value
once I know the commit hash for the related changes I am testing.

**Important:** the plugin-demo repository uses both kiwitcms-tap-plugin and
kiwitcms-junit.xml-plugin at the same time! They differ in the way test names
are compiled! Both are reported in TR-24. See TC-57 text for information how to
distinguish between the two.

See
[Travis Build #8](https://travis-ci.org/kiwitcms/plugin-demo/builds/496237911) for
[commit 85ad939](https://travis-ci.org/kiwitcms/plugin-demo/builds/496237911),
[TR-24](https://tcms.kiwitcms.org/runs/24/),
[TP-14](https://tcms.kiwitcms.org/plan/14/).

```
Product=kiwitcms/plugin-demo
Version=master
Build=unspecified
```

Also check-out comments in TR executions to see when and who had executed the test case.

So far there have been some tests which were failing (although Travis reports PASS) so
I decided to fix them.
[Travis Build #9](https://travis-ci.org/kiwitcms/plugin-demo/builds/496240713) for
[commit a25b384](https://github.com/kiwitcms/plugin-demo/commit/a25b3841e656d47a7539c608e375cecbf3bed2ac)
is still configured with `TCMS_RUN_ID=24`. This means results will be reported in
TR-24, effectively overwriting previous results.

Check-out *Change Log* under each individual execution and you will see several
time stamps when status was updated! In other words, as long as `TCMS_RUN_ID` is
pointing to an existing TestRun this TR will keep the results of the last test suite execution!


Continue development, restore ENV configuration
-----------------------------------------------

[Travis Build #10](https://travis-ci.org/kiwitcms/plugin-demo/builds/496243124) for
[commit c4f1ae5](https://github.com/kiwitcms/plugin-demo/commit/c4f1ae5ecadb249d39923cedbbf53a85e50420b3)
removes `TCMS_RUN_ID`! Results are reported in
[TR-25](https://tcms.kiwitcms.org/runs/25/),
[TP-14](https://tcms.kiwitcms.org/plan/14/).

```
Product=kiwitcms/plugin-demo
Version=master
Build=c4f1ae5
```

Branch out for an LTS version
-----------------------------

Our team has decided to make the first LTS release of the product. We branch out into
`lts-v0` branch in git and cut the first NVR. This results in
[Travis Build #11](https://travis-ci.org/kiwitcms/plugin-demo/builds/496245067) for
[commit 9f1ef71](https://github.com/kiwitcms/plugin-demo/commit/9f1ef717e3fb248d65535ed66b5c4e61e6f85a6e)
[TR-27](https://tcms.kiwitcms.org/runs/27/),
[TP-16](https://tcms.kiwitcms.org/plan/16/).

```
Product=kiwitcms/plugin-demo
Version=lts-v0
Build=9f1ef71
```

Because this is the first time we are running tests for this product version
we end up with the newly created TP-16!

**Note:** see how version was populated with the correct value for the git branch!
This is because my CI config uses `TCMS_PRODUCT_VERSION=$TRAVIS_BRANCH` and no further
changes were required! I made this change back in Travis Build #5 anticipating what
will come in the future!


The product is now live and customers have reported critical bugs for it:
*URLs for the badges in README are wrong*! I fix those and add more tests of course, see:
[Travis Build #12](https://travis-ci.org/kiwitcms/plugin-demo/builds/496247347) for
[commit 2d72754](https://github.com/kiwitcms/plugin-demo/commit/2d72754d3f911ef4e25287f203471f4466b95d12),
[TR-29](https://tcms.kiwitcms.org/runs/29/) for
[TP-16](https://tcms.kiwitcms.org/plan/16/).

```
Product=kiwitcms/plugin-demo
Version=lts-v0
Build=2d72754
```

TR-29 contains the new [TC-58](https://tcms.kiwitcms.org/case/58/)!


cherry-pick between branches
----------------------------

In the `lts-v0` branch customers have identified a serious issue. It doesn't exist on `master`
but the test is still valid so I cherry-pick it! In git you can backport or forwardport very
easily. Regardless of the direction Kiwi TCMS plugins will record the test results for you.

See
[Travis Build #13](https://travis-ci.org/kiwitcms/plugin-demo/builds/496252529) for
[commit 31ae5b3](https://github.com/kiwitcms/plugin-demo/commit/31ae5b3358137fde7d2b5c3656b384acc7331d95),
[TR-31](https://tcms.kiwitcms.org/runs/31/) for
[TP-14](https://tcms.kiwitcms.org/plan/14/).

We can see that TC-58, which was originally implemented on the `lts-v0` branch
is now present!


Summary
-------

This is a very basic example of how you can organize collection and reporting for
your automation test suite results with Kiwi TCMS. The links here only refer to
artifacts created by `kiwitcms-tap-plugin` while in the DB we keep others as well.

There are feature requests for more ENV variables which will allow you to control
TestPlan creation and child/parent relationship between test plans. See
<https://github.com/kiwitcms/tap-plugin/issues> and vote with a `:+1:` reaction
to help us plan for these features.

Kiwi TCMS automation framework plugins are nothing more than result parsers
which talk back to a database. It is up to you to decide how to organize the
collection of test results and how to report on them later, when the need arises.

Future installments in this post series will take a look at workflows with
feature branches and pull requests and discuss possible organization scenarios.
You are welcome to share your ideas in the comments below.

Happy testing!
