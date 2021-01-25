Title: Kiwi TCMS has applied for GSoC 2021
Headline: here are some project ideas
date: 2021-01-30 12:17
comments: true
og_image: images/gsoc/2021/banner.png
twitter_image: images/gsoc/2021/banner.png
tags: community


!["GSoC banner"](/images/gsoc/2021/banner.png "GSoC banner")

Dear open source hackers, we are happy to share that Kiwi TCMS has
applied to
[Google Summer of Code 2021](https://summerofcode.withgoogle.com/)
as a mentoring organization!

While we're very early in the program
[timeline](https://summerofcode.withgoogle.com/how-it-works/#timeline)
and we still don't know whether Kiwi TCMS will be accepted or not we'd
like to use this opportunity and outline several areas which are good
candidates for GSoC fellows to work on. Some of the tasks are also
eligible for our [open source bounty program]({tag}bounty-program).
The majority of them require some knowledge of Python and Django.


Let's Encrypt SSL integration
-----------------------------

By default Kiwi TCMS' container image comes with a self-signed SSL certificate!
This is irritating because all modern browsers issue warnings for that and
the majority of deployments do not have the infrastructure to distribute
the self-signing Certificate Authority certificate files, e.g. make the browser
trust the provided certificate.

This issue is compounded by the fact that production SSL certificates,
issues by a well-known authority must be introduced from the outside. While
this is
[documented](https://kiwitcms.readthedocs.io/en/latest/installing_docker.html#ssl-configuration)
there are fair amount of testers who do not have sufficient proficiency
with Docker to do so.

The result is that we see many Kiwi TCMS deployments in the wild which
completely disable HTTPS and users struggling to configure their SSL
certificates.

An integration with [Let's Encrypt](https://letsencrypt.org/) would be
a good choice. We've tried a proof of concept but had troubles running
their official client on our container image.

The challenge will be
to use a Let's Encrypt client that is supported on the CentOS Linux
distribution (that's what we use) or a frequently maintained
distribution independent package. Another challenge will be that the
ACME protocol used needs to be able to talk back to the system
asking for a new certificate. In most cases Kiwi TCMS will be deployed
behind a firewall and initial certificate request/renewal requests may be
able to go one way only.


Securing 3rd party dependencies
-------------------------------

Kiwi TCMS itself uses services and tools like Snyk, npm audit, Coverity and Bandit
against our own and against 3rd party source code. On the other hand
some of our components (e.g. PatternFly) do not perform any kind of
security testing. The starting point to unravel this is
[Issue #871](https://github.com/kiwitcms/Kiwi/issues/871).

As a minimum all issues reported by bandit & coverity against 3rd party
dependencies must be sorted out:

- Figure out if we execute our tools in the appropriate way as to not
  report unnecessary issues
- Dissect all of the issues, especially
  [ones from Bandit](https://github.com/kiwitcms/Kiwi/runs/1608837125?check_suite_focus=true),
  report them to their upstream community, discuss and decide how to fix or
  ignore the issue and send a pull request to upstream
- Figure out how to keep track/dashboard whether or not all of our runtime
  dependencies are using the same tools as we are (they are either open source
  or free to use for open source projects) since they seem to be good tools
- Work with any upstream (2nd, 3rd, 4th, etc level dependencies) communities
  to adopt said tools and fix issues as they are discovered

All of this will ultimately benefit a broader community than Kiwi TCMS alone.


Integration with GitHub Actions and GitLab pipelines
----------------------------------------------------

As part of our continuing integration with GitHub we need to have an action
which would report the results to Kiwi TCMS similar to how our
[automation framework plugins](https://kiwitcms.readthedocs.io/en/latest/plugins/automation-frameworks.html)
do!

You should start with GitHub because this is what Kiwi TCMS uses and we can
immediately eat our own dog food. Originally proposed in
[Issue #817](https://github.com/kiwitcms/Kiwi/issues/817) then moved to
[github-app #10](https://github.com/kiwitcms/github-app/issues/10) with a
slightly different focus.

Next (or in parallel) would be similar
functionality for GitLab pipelines, proposed in
[Issue #1421](https://github.com/kiwitcms/Kiwi/issues/1421)


Java hacking
------------

Kiwi TCMS does have a native
[junit-plugin](https://github.com/kiwitcms/junit-plugin) but we are no
experts in Java. In the testing world however Java is a very popular
language and we need help building on top of the existing library and
developing several other tools:

- [Issue #692](https://github.com/kiwitcms/Kiwi/issues/692) - TestNG plugin
- [Issue #1072](https://github.com/kiwitcms/Kiwi/issues/1072) - Jenkins plugin,
  probably similar in scope to the proposed GitHub/GitLab integration above
- [Issue #1512](https://github.com/kiwitcms/Kiwi/issues/1512) - extension for the
  existing junit-plugin. Similar extension will likely be necessary for the
  TestNG plugin as well
- Integration with Katalon Studio proposed at
  <https://forum.katalon.com/t/kiwi-tcms-integration/39817>. There isn't much info to
  begin with so if you have working experience with Katalon Studio it would be
  a plus
- Fixing assorted
  [issues in our junit plugin](https://github.com/kiwitcms/junit-plugin/issues)
- Help upgrade to junit-jupiter v5.7.0, looks like API has changed and our
  plugin doesn't automatically discover the tests.
  See <https://github.com/kiwitcms/junit-plugin/pulls>


C# and Objective-C hacking
--------------------------

- [Issue #2020](https://github.com/kiwitcms/Kiwi/issues/2020) - reporting plugin for
  NUnit, similar to other existing
  [automation framework plugins](https://kiwitcms.readthedocs.io/en/latest/plugins/automation-frameworks.html).
  We're not sure how popular NUnit vs other test runners in the C# world is but
  it could be a good basis for developing future plugins. The challenge here
  is mostly for us since we're a Linux based team
- [Issue #1316](https://github.com/kiwitcms/Kiwi/issues/1316) - reporting plugin
  for *Kiwi-bdd* a simple BDD for iOS. Again the challenge here would be
  on us since we don't have experience building and testing applications on iOS


Migration to Patternfly v4, possibly with React JS
--------------------------------------------------

The visual component library that Kiwi TCMS uses is called
[PatternFly](https://www.patternfly.org). First it is a standard describing
visual design, widget behavior and development hints for enterprise
applications. Then it provides an actual implementation of their standards.

Kiwi TCMS is built with PatternFly v3 using raw HTML + CSS. This approach
allowed us to get started quickly and gradually migrate from our legacy UI.
It also works very well with Django which is structured around rendering HTML
templates.

A major task is switching over to PatternFly v4 where there could be some
differences in component syntax.

Since Kiwi TCMS v8.8 and v8.9 we have completely redesigned the
TestPlan and TestRun pages. As they are the ones with the most possible
interactivity and functionality we have hit the need to keep internal state
on the front-end. This is rather cumbersome to manage by hand and calls
for a more modern solution using React. There is PatternFly implementation
as React components too.

The starting point is
[Issue #1323](https://github.com/kiwitcms/Kiwi/issues/1323).

The volume of work is a challenge because all pages need to be migrated
and we're not sure if this can be done and released in steps or all pages
should be migrated and released together. In other words we don't know if
shipping UI based on both PatternFly v3 and v4 will work.

The next challenge is refactoring the TestRun and TestPlan pages with
React, keeping all existing functionality intact. A challenge here will
also be the transactional nature of Django where it receives a browser request
and sends a response, usually rendered HTML content! Lots of functionality
happens both on the backend as well as in the HTML templates themselves -
for example translations and permission checks.


JavaScript hacking
------------------

- [Issue #1281](https://github.com/kiwitcms/Kiwi/issues/1281) - start using ESLint
  against our code base and clean-up all related issues
- [Issue #1910](https://github.com/kiwitcms/Kiwi/issues/1910) - replace SimpleMDE
  with EasyMDE. Ideally we would like to depend on other active open source
  libraries and the rich text editor what we use looks like it needs replacement.
  We've got a few extra features hooked into the editor like syntax highlighting
  with dynamic loading of language definitions, support for inline attachments and
  a security override. All of these need to be kept in place.
- [Issue #1919](https://github.com/kiwitcms/Kiwi/issues/1919) - reconsider using
  MomentJS. Well it looks like its original authors encourage everyone to
  actually stop using it and we should consider doing so as well. As it stands
  MomentJS is not widely used inside Kiwi TCMS except for timezone conversions
  in the browser. Should be relatively easy to replace, preferably with a vanilla
  JavaScript implementation. Either way we first need to know what actually
  has to be done.


Remaining telemetry
-------------------

[Testing Telemetry]({filename}2019-03-03-telemetry.markdown) is one of our cool
features and since we've started to redesign the legacy report feature testers
are very happy with it. There are still some bits and pieces that are missing:
[Issue #616](https://github.com/kiwitcms/Kiwi/issues/616),
[Issue #1923](https://github.com/kiwitcms/Kiwi/issues/1923),
[Issue #1924](https://github.com/kiwitcms/Kiwi/issues/1924),
[Issue #1925](https://github.com/kiwitcms/Kiwi/issues/1925),
[Issue #1926](https://github.com/kiwitcms/Kiwi/issues/1926),
[Issue #1927](https://github.com/kiwitcms/Kiwi/issues/1927),
[Issue #1928](https://github.com/kiwitcms/Kiwi/issues/1928),
[Issue #1929](https://github.com/kiwitcms/Kiwi/issues/1929),
[Issue #1940](https://github.com/kiwitcms/Kiwi/issues/1940).

These generally depend on having the ability to record execution times in our
database and afterwards the features are similar but relatively independent
of one another.


Web hooks
-------------------

Web hooks feature aims to improve the integrations capabilities of Kiwi TCMS.
This will allow users to configure custom URL to which the system will send
HTTP POST requests on certain events.   

[Issue #1080](https://github.com/kiwitcms/Kiwi/issues/1080),
[Issue #913](https://github.com/kiwitcms/Kiwi/issues/914).

Anything else
-------------

All of the proposals above are items which we have in our backlog and
need help with. However participation in the Google Summer of Code program
is not limited only to them. You are free to propose any other ideas/projects
on which you would like to work during the summer. We would be happy to
accept your contributions if we make it into the program.


Happy Testing!

---

If you like what we're doing and how Kiwi TCMS supports various communities
please help us!

- [Give ⭐ on GitHub](https://github.com/kiwitcms/Kiwi/stargazers);
- [Nominate Kiwi TCMS as GitHub Stars]({filename}2020-09-04-nominate-github-star.markdown);
- [Donate via Open Collective](https://opencollective.com/kiwitcms/donate) as low as 1 EUR;
- [Join our newsletter](https://kiwitcms.us17.list-manage.com/subscribe/post?u=9b57a21155a3b7c655ae8f922&id=c970a37581)
  and follow all project news;
- [Become a contributor](https://kiwitcms.readthedocs.io/en/latest/contribution.html) and an awesome open source hacker;
- [Become a customer](/#pricing) and we'll share our profits with the community
