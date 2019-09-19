Title: Open source sprints at PyCon Balkan in Belgrade
headline: join us, learn and contribute to Kiwi TCMS
date: 2019-09-03 12:46
comments: true
tags: community, events


Next month our team will be at
[PyCon Balkan, Oct 3-5](https://pyconbalkan.com/) in Belgrade. Together with
presentation and a workshop we are going to host open source sprints!
These will be an informal gathering where participants will be able to
learn more about how open source works and go through their first
contributions. This is ideal for students and less experienced people
but we welcome everyone. There will be tasks ranging from easy to very hard!


**Who:** 4 mentors from Kiwi TCMS and you!

**What:** full day of peer programming and contributing to Kiwi TCMS

**Where:** room will be announced on the days of the conference,
           follow [@KiwiTCMS](https://twitter.com/KiwiTCMS) for more info

**Why:** up your tech skills, build your GitHub profile and have fun together


Translate Kiwi TCMS
-------------------

Difficulty: easy

We have enabled Serbian language in our translation system. To get started
checkout our
[translation contribution](https://kiwitcms.readthedocs.io/en/latest/contribution.html#translation)
page.
Once strings are translated `kiwitcms-bot` will automatically open a pull
request with the new text.


Find unused CSS classes
-----------------------

Difficulty: easy

This should be relatively easy. For each class/selector defined in our CSS files
search (grep) if any of the HTML templates use it. If it is not in use then remove
it.


Find unused JavaScript code
---------------------------

Difficulty: easy

Similar to the above. We're not 100% certain but there could be legacy JavaScript
functions which are no longer in use. Find them and remove them! At the very least
you have confirmed that all functions are in use!


CodeClimate Minor severity issues
---------------------------------

Difficulty: easy to moderate

Check-out the
[list of Minor severity issues](https://codeclimate.com/github/kiwitcms/Kiwi/issues?severity%5B%5D=minor&status%5B%5D=&status%5B%5D=open&status%5B%5D=confirmed&engine_name%5B%5D=structure&engine_name%5B%5D=duplication&engine_name%5B%5D=bandit&engine_name%5B%5D=csslint&engine_name%5B%5D=fixme&engine_name%5B%5D=radon&engine_name%5B%5D=sonar-python).
There are many of them:

- CSS lint issues (we suggest you start with this one)
- functions longer than 25 lines of code
- functions with bigger cognitive and cyclomatic complexity
- modules longer than 250 LOC

Try fixing a few to see how it goes and continue if you feel confident.
Not everything may be an issue so if you have any questions ask someone from our team.


CodeClimate Major severity issues
---------------------------------

Difficulty: moderate to hard

Check-out the
[list of Major severity issues](https://codeclimate.com/github/kiwitcms/Kiwi/issues?severity%5B%5D=major&status%5B%5D=&status%5B%5D=open&status%5B%5D=confirmed&engine_name%5B%5D=structure&engine_name%5B%5D=duplication&engine_name%5B%5D=bandit&engine_name%5B%5D=csslint&engine_name%5B%5D=fixme&engine_name%5B%5D=radon&engine_name%5B%5D=sonar-python).
There are around 150 of them:

- identical and similar code blocks
- big modules
- big functions

Most of these require some sort of refactoring, either splitting snippets
of code into smaller pieces (functions or sub-modules) or using one function
in several places instead of 2 very similar but different functions, etc.
Ask our team members about which approach they prefer for fixing these issues
to minimize the effort spent here.


CodeClimate Critical severity issues
------------------------------------

Difficulty: hard

Check-out the
[list of Critical severity issues](https://codeclimate.com/github/kiwitcms/Kiwi/issues?severity%5B%5D=critical&status%5B%5D=&status%5B%5D=open&status%5B%5D=confirmed&engine_name%5B%5D=structure&engine_name%5B%5D=duplication&engine_name%5B%5D=bandit&engine_name%5B%5D=csslint&engine_name%5B%5D=fixme&engine_name%5B%5D=radon&engine_name%5B%5D=sonar-python).
All of these are functions with high cognitive complexity and
the recommended way to deal with them is refactoring into
[class based views](https://docs.djangoproject.com/en/2.2/topics/class-based-views/).


Improve pylint health
---------------------

Difficulty: easy

Execute pylint against the latest sources and start fixing the issues.
Looking at [pylint logs](https://travis-ci.org/kiwitcms/Kiwi/jobs/579167487) the
following items are relatively easy to work on:

- Everything in module tcms.urls
- Everything in module tcms.telemetry.api
- Everything in module tcms.testruns.tests.test_views
- Everything in module tcms.xmlrpc.forms
- Everything in module tcms.testcases.tests.test_models
- Everything in module tcms.core.forms.fields
- Everything in module tcms.settings.common
- Everything in module tcms.settings.test
- All `module-in-directory-without-init` errors reported for module tcms.tests.\_\_init\_\_


Note: `fixme`, `missing-permission-required` and `avoid-auto-field` errors are usually harder
to resolve and will require more work/refactoring. If you feel confident go ahead and
fix them, if not skip to the next error message.

We also use a custom pylint checker which reports function based views.
If you are looking for something harder to work on, then give it a try
(see 3rd pylint line in `Makefile`) and refactor some of the existing
view functions into class based views.


Fix 3rd party security issues discovered by Bandit
--------------------------------------------------

Difficulty: moderate to hard

Bandit is a static analysis tool similar to pylint. It focuses on discovering
issues which may lead to security vulnerabilities. We have resolved all such
issues in our own source code but we also execute Bandit against the entire
Python dependency stack. There it finds thousands of issues, so much so that
the reporter crashes.

[In CI](https://travis-ci.org/kiwitcms/Kiwi/jobs/579167486) there are around
130 issues reported. The best course of action here is to execute Bandit locally
against the offending library and then figure out what to do:

- report an issue upstream
- send a pull request upstream
- if these are test files maybe exclude them from the package (e.g. don't ship them for production)


Note: inside Travis CI we have all runtime and testing dependencies which is more
than what we have inside the official Docker image for Kiwi TCMS.


Work on reported issues
-----------------------

The following issues look suitable for a sprint and don't require lots of
background knowledge. You can also find them using the
[`PyConBalkan`](https://github.com/kiwitcms/Kiwi/labels/PyConBalkan) label on
GitHub:

- [#212](https://github.com/kiwitcms/Kiwi/issues/212) - moderate - Convert jQ to $ -
  this is an easy search & rename but will require more extensive manual testing
- [#431](https://github.com/kiwitcms/Kiwi/issues/431) - moderate to hard - Remove JavaScript fireEvent() -
  17 matches in `static/js/`. Must be replaced with direct function calls
- [#652](https://github.com/kiwitcms/Kiwi/issues/652) - easy - Removal of labels from form fields -
  all labels must be included in the HTML template and marked for translation
- [#681](https://github.com/kiwitcms/Kiwi/issues/681), [#682](https://github.com/kiwitcms/Kiwi/issues/682) - moderate -
  Move API modules & their tests from `xmlrpc/api/<app>.py` to `<app>/api.py`. These have good test
  coverage so you have to make sure you don't break anything
- [#971](https://github.com/kiwitcms/Kiwi/issues/971) - moderate - manage.py command for changing Site URL -
  will help with automatic provisioning, e.g. Ansible. For howto see
  [Django docs](https://docs.djangoproject.com/en/2.2/howto/custom-management-commands/)
- [#1021](https://github.com/kiwitcms/Kiwi/issues/1021) - moderate - Update TestCase page UI to allow adding TestPlans to cases -
  use `TestPlan.add_case()` API method and refresh the widget. See how Tags and Components cards work
  in the same page
- [#1070](https://github.com/kiwitcms/Kiwi/issues/1070) - moderate - manage.py command for checking email settings -
  will help with troubleshooting misconfigured email. Must raise exceptions if something fails.
  For howto see
  [Django docs](https://docs.djangoproject.com/en/2.2/howto/custom-management-commands/)
- [#733](https://github.com/kiwitcms/Kiwi/issues/733),
  [#736](https://github.com/kiwitcms/Kiwi/issues/736),
  [#738](https://github.com/kiwitcms/Kiwi/issues/738),
  [#883](https://github.com/kiwitcms/Kiwi/issues/883),
  [#1089](https://github.com/kiwitcms/Kiwi/issues/1089) - hard to very hard - New checkers for pylint -
  Kiwi TCMS uses customized pylint checkers to discover various conditions. We need a few more
  of them and/or update of the existing ones

We hope to see you in Belgrade. Until then: Happy testing!
