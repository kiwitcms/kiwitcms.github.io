Title: We're not participating in 'QA of the year' award
Headline: ironically because of a bug
date: 2020-02-14 14:45
comments: true
og_image: images/award.png
twitter_image: images/award.png

Hello testers,
this is the story of how our team is not taking part of
the "QA of the year" contest organized by the
[QA: Challenge Accepted](https://qachallengeaccepted.com/) conference despite
[being nominated by Alex](https://www.facebook.com/groups/qabulgaria/permalink/2542909712425297/).
In collaboration with Peter Sabev (organizer) we've managed to figure out what happened:

* On Nov 17th Alex nominated the Kiwi TCMS team for the award
* Last week Alex discovered our team is not listed on the voting page
* The Peter told us he's not seen any nomination related to
  Kiwi TCMS at all which made everything feel even stranger
* We've managed to dig out browser history from November
  and it clearly shows the nomination form was submitted correctly
* It was even possible to load the confirmation URL and edit the
  submission
* Upon second submission the nomination was clearly visible on the
  other side, Peter confirmed this


Then after a few days we've got word back - Peter had figured out what
happened. Apparently the same Google form has been opened on 2 different
computers and one of them overwrote the existing submissions.

This kind of issue can be avoided by employing the following measures:

- Make the submission results public so that everyone can verify their nomination
  is indeed present on the list. It does take away anonymity and can also expose
  personal information like email/phone/employer. ID, name and submission time-stamp
  however will be enough
- History of edits could also be exposed publicly for extra safety
- Turn on some sort of overwrite protection similar to what you have for git
  branches. At the very least have a warning before allowing data overwrite
- Turn on email confirmation - the existing form didn't have this enabled
- On our side: double check submission has been received - will put more
  pressure on the organizing team


Sadly the issue was discovered after
the submission deadline has ended so Kiwi TCMS can't participate in this year's contest.
We wish the rest of the finalists best of luck and we're going to see you
at QA: Challenge Accepted next month.


Happy testing!
