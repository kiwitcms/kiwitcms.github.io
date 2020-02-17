Title: Roadmap status report for 2019
headline: 50-60% complete, slower pace, less visible progress
date: 2019-12-26 16:56
comments: true
og_image: images/roadmap.jpg
twitter_image: images/roadmap.jpg
author: Alexander Todorov
tags: community, roadmap

Hello everyone, in this article I will outline the progress that the Kiwi TCMS
team has made towards achieving the goals on our
[2019 roadmap]({filename}2019-01-10-2019-mission.markdown).
TL,DR: last year we've made lots of big and visible changes in Kiwi TCMS.
This year less so. Progress has been slower than before and not so much
visible. Community and team is growing. More contributors are welcome.


Complete the internal refactoring
---------------------------------

*Status: small progress, needs help*

[CodeClimate](https://codeclimate.com/github/kiwitcms/Kiwi) progress is:

* -60 code smells
* -55 duplications
* -50 other issues
* 4.4% technical debt improvement
* -240 hrs remaining until issues are fixed

The trend is showing less issues remaining
but it has been a slow progress. As we fix the easier items the remaining ones
become harder to deal with.

We've done minor work related to fixing issues reported by pylint. Around
150 of them still remain!

We have not done any targeted work to resolve other issues reported by Scrutinizer,
remove vendored-in JavaScript libraries, JavaScript refactoring or
classification of issues in 3rd party dependencies.


Redesign the UI templates with the help of Patternfly
-----------------------------------------------------

*Status: 60% done, needs help*

There are 22 HTML templates remaining to be redesigned (from 59). That's mostly
due to internal cleanup and some refactoring! Test plan and Test run pages are the
two major templates that still need to be redesigned with Patternfly.


Modernize reporting aka Telemetry
---------------------------------

*Status: 60% done, in progress, behind schedule*

The specs for the new [Telemetry]({filename}2019-03-03-telemetry.markdown) system
have been defined after taking into account feedback on GitHub issues. Anton Sankov is
the leading developer for this feature. So far we have 4 telemetry reports merged:
testing break-down, status matrix, execution trends and flaky tests.

There are lots of minor issues or missing functionality in these first iterations
(compared to specification). Work continues on the other telemetry use-cases
and related items.


Plugins for 3rd party test automation frameworks
------------------------------------------------

*Status: good, needs help*

*UPDATE:* no change in last 6 months.

If you'd like to see plugins for more test automation frameworks
and/or file formats please checkout the
[documentation](https://kiwitcms.readthedocs.io/en/latest/automation-frameworks.html)
for links and more info.


Redefine bug-tracker integration
--------------------------------

*Status: 66% complete, in progress, behind schedule*

We've been making slow progress on this milestone lately. For more info
see
[https://github.com/kiwitcms/Kiwi/milestone/1](https://github.com/kiwitcms/Kiwi/milestone/1)


GitHub flow integration
-----------------------

*Status: done, awaiting deployment*

Our team spent some time making Kiwi TCMS the first open source TCMS available
on the [GitHub Marketplace](https://github.com/marketplace/kiwi-tcms). At the end
of this year we were able to create a small application that allows further
integration and extending the testing workflow to the GitHub platform.

This is waiting on a few more clarifications from GitHub before we deploy but
for now it can be considered as done. Future functionality will be tracked
and developed directly at
[https://github.com/kiwitcms/github-app/issues](https://github.com/kiwitcms/github-app/issues).


Agile integration with Trello
-----------------------------

*Status: no progress, will drop*

This will be dropped from roadmap for the next year until we can get more interest
from the community.


Improve engineering productivity
--------------------------------

*Status: no progress*

Looking for external help here. This will stay as a low priority item on our
roadmap for 2020 until we can free more resources on the team.


Community
---------

*Status: great, on track, needs work*

This is our strongest area during this year. We have a strong presence in
multiple communities, our event schedule is very busy and we are gaining more
recognition every day! Core team hit several big bumps this year and is still
recovering with a few more people onboarding.

Kiwi TCMS suffers from the problem that many of our users can't be contributors
or simply don't want to!

In short: it is important for us to follow our mission and develop our core team
so we can deliver on promises made in our roadmap! That requires a lot of time and
effort which reduces short-term productivity.


Happy testing!
