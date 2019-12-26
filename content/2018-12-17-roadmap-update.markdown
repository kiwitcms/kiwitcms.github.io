Title: Roadmap status report for 2018
headline: 62% complete, good progress on refactoring
date: 2018-12-17 15:50
comments: true
og_image: images/roadmap.jpg
twitter_image: images/roadmap.jpg
author: Alexander Todorov
tags: community

Hello everyone, in this article I will outline the progress that the Kiwi TCMS
team has made towards achieving the goals in our 2018
[roadmap]({filename}2018-01-22-milestones.markdown)
([mid-year update here]({filename}2018-07-25-roadmap-update.markdown)).
TLDR; goals are completed at 62%. Refactoring legacy code is showing good results,
less so on the front-end side and there are items still in progress!


Make code easier to maintain
----------------------------

*Status: good progress*

Initially [CodeClimate](https://codeclimate.com/github/kiwitcms/Kiwi) reported
a "D" rating with 600+ code smells and 600+ duplications and a 1 year estimation
to resolve these. We're now down to "C" rating with 171 smells and 203 duplications.

The level of technical debt has dropped from 32.5% down to 17.7% and we have removed
around 14000 lines of Python code and 8000 lines of JavaScript code without
losing significant functionality.

Checkout
[the stats](https://codeclimate.com/github/kiwitcms/Kiwi/trends/technical_debt)
for more info!



Use pylint and pylint-django
----------------------------

*Status: almost finished*

Both pylint and pylint-django have been integrated into our CI workflow. There are even
some custom built plugins that we use. The number of issues reported is down to 100
from 4000+ initially. These are predominantly `fixme` comments which are also in parts
of the code that are scheduled for removal and refactoring.


Render HTML, return JSON
------------------------

*Status: moderate progress*

Several views were modified to return pure JSON but we've not
done any targeted work to resolve this issue. A number of other views have been
removed in favor of using the existing JSON-RPC layer.

This is an internal refactoring effort which isn't very visible from the outside.
This is also one of the factors contributing to the high number of removed
source code.


Submit forms, post JSON, GET clean URLs
---------------------------------------

*Status: no progress*

Not much has been done in this area except the occasional refactoring to
JSON-RPC.


API layer
---------

*Status: complete*


Documentation
-------------

*Status: moderate progress, dropped*

All RPC methods have been documented! The rest of the internals will be documented
as we go along.


No vendored JavaScript libraries
--------------------------------

*Status: good progress*

We still carry around jQuery, jQuery-UI and Handlebars.js. They will be
removed once the pages using them are converted to use the Patternfly widgets
library.


Less HTML templates with better organization
--------------------------------------------

*Status: moderate progress*


There are still over 50 HTML templates in `tcms/templates/` that need to be
refactored into Patternfly. We've been working on them one at a time and will
focus more on this effort in the next couple of months.


Modern interface with Patternfly
--------------------------------

*Status: moderate progress*

Some of the pages have been converted to use Patternfly. The most important pages
that still have a different look and feel are TestPlan view, TestCase view and
TestRun view. These are also the hardest to convert because they have lots of
tabs/components which pull information from various places. Our goal is to create
reusable widgets for the various components (e.g. a list of TestCases) and then
include these components into several different templates to minimize code
duplication.


JavaScript updates and front-end testing
----------------------------------------

*Status: moderate progress*

A number of JavaScript functions have been refactored and removed during the
past few releases but there are still thousands of lines of code left to deal with.
This effort is mostly happening in parallel with the Patternfly redesign.
We still don't have anything to test front-end JavaScript functionality!


Community efforts
------------------

*Status: good progress*

We are seeing a steady stream of new users registered on
[https://public.tenant.kiwitcms.org](https://public.tenant.kiwitcms.org/login/github-app/) and
there are several active contributors on GitHub. Most of our translators are
very active and keep their respective languages fresh and up to date!

Kiwi TCMS was represented at OSCAL Tirana, DjangoCon Heidelberg, PyCon Prague,
HackConf Sofia, PiterPy St. Petersburg and OpenFest Sofia. We've also been
approved for a project stand at FOSDEM 2019 so watch this blog for more news.


Happy testing!
