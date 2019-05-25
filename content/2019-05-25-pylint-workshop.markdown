Title: Pylint workshop with Django Bulgaria user group
headline: contributing more checkers for Kiwi TCMS
date: 2019-05-25 14:27
comments: true
author: Alexander Todorov
tags: community, events
og_image: images/django_meetup.jpg
twitter_image: images/django_meetup.jpg

On Tuesday I hosted my pylint workshop during the regular
[Django Bulgaria meetup](https://www.facebook.com/events/295673718035353/).
This edition was the first which was practice based.

Attendance numbers were low but participation was very good. We managed to
create 4 new checkers for Kiwi TCMS:

- [PR #949 - AutoField checker](https://github.com/kiwitcms/Kiwi/pull/949)
- [PR #950 - OneToOneField checker](https://github.com/kiwitcms/Kiwi/pull/950)
- [PR #951 - discover directories without \_\_init\_\_.py](https://github.com/kiwitcms/Kiwi/pull/951)
- [PR #952 - empty class checker](https://github.com/kiwitcms/Kiwi/pull/952)

I am still waiting for a 5th pull request from one of the participants who
decided to implement a more complex checker that will very likely land into
pylint-django instead!

Many thanks to all contributors. These new checkers have discovered quite a
few new issues with Kiwi TCMS so this is an area which our team is going to improve.

Those who missed the workshop will be able to catch up one of the next editions:

- 26-29 August, GUADEC, Thessaloniki - TBC (presentation)
- end of September, Python meetup, Zagreb - TBA
- 03-05 October, PyCon Balkan, Belgrade - TBC
- 11-13 October, HackConf, Sofia
- 15-17 October, TestCon Europe, Vilnius - TBC (backup presentation)
- 23-25 October, Testwarez, Ossa, Poland - TBC (presentation)
- 14-15 November, Software Engineering Conference Russia, Saint-Petersburg - TBC
- 20-22 November, ConTEST, New York - TBC (workshop and/or presentation)


Happy testing!
