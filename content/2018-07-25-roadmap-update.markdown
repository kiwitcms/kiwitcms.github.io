Title: Mid-year roadmap status report
date: 2018-07-25 16:30
comments: true
og_image: images/roadmap.jpg
twitter_image: images/roadmap.jpg
author: Alexander Todorov
tags: community

Hello everyone, in this article I will outline the progress that the Kiwi TCMS
team has made towards achieving the goals on our
[roadmap]({filename}2018-01-22-milestones.markdown).


Make code easier to maintain
----------------------------

*Status: moderate progress*

Initially [CodeClimate](https://codeclimate.com/github/kiwitcms/Kiwi) reported
a "D" rating with a 1 year estimated effort. Now it is still on "D" rating with
a 7 months estimated effort to bring the project back in shape.
Code smells have dropped from 600+ to 418, duplications have been reduced from 600+ to 359!
At the same time technical debt ratio has been decreased from 32,5% to 21,6% and
little over 10000 lines of code have been removed from the source code.
Checkout
[the stats](https://codeclimate.com/github/kiwitcms/Kiwi/trends/technical_debt)
for more info!



Use pylint and pylint-django
----------------------------

*Status: good progress*

Both pylint and pylint-django have been integrated into our CI workflow. There are even
a few custom built plugins that we use. The number of issues reported is down to around 900
from 4000+ initially. The cleanup has been lead by [Anton Sankov](https://github.com/asankov)
with help from [Ivaylo Ivanov](https://github.com/ivo0126) and myself.


Render HTML, return JSON
------------------------

*Status: no progress*

Several views were probably modified to return pure JSON in the meantime but we've not
done any targeted work to resolve this issue.


Submit forms, post JSON, GET clean URLs
---------------------------------------

*Status: no progress*

Same as above, not much has been done in this area.



API layer
---------

*Status: complete*

After Kiwi TCMS v4.0 the server side API has been reorganized and updated
to follow the model/method names used internally.

After the recent version 5.0 the client side API library has been stripped
to its most basic form so that you can work directly with the responses from
the server.

There is no more duplication and ambiguity in names because there isn't
a lot of code left!


Documentation
-------------

*Status: moderate progress, dropped*

All RPC methods have been documented! The rest of the internals will be documented
as we go along.


No vendored JavaScript libraries
--------------------------------

*Status: moderate progress*

Several JavaScript libraries have been removed but we still carry around jQuery
and Handlebars.js. No work has been done to convert Kiwi TCMS to use the jQuery
version provided with Django.


Less HTML templates with better organization
--------------------------------------------

*Status: minimal progress*


There are still over 100 HTML templates in Kiwi TCMS. Some of the HTML templates
have been merged together, some email templates have been refactored and marked
as translatable but the majority of them have not been updated for a long time.


Modern interface with Patternfly
--------------------------------

*Status: no progress*


JavaScript updates and front-end testing
----------------------------------------

*Status: small progress*

A number of JavaScript functions have been refactored and removed during the
past few releases but there are still thousands of lines of code left to deal with.


Community efforts
------------------

*Status: moderate progress*

We are seeing a steady stream of new users registered on
[https://public.tenant.kiwitcms.org](https://public.tenant.kiwitcms.org/login/github/) and
there are several active contributors (issues, translations).

Kiwi TCMS was represented at OSCAL Tirana, DjangoCon Heidelberg and PyCon Prague!
We're planning to attend HackConf and OpenFest in Sofia by the end of the year.


Happy testing!
