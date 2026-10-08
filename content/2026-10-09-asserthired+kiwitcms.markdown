Title: 12 Kiwi TCMS interview questions by AssertHired
Headline: behind the scenes with Aston Cook
date: 2026-10-09 11:20
comments: true
og_image: images/customers/asserthired+kiwitcms.png
twitter_image: images/customers/asserthired+kiwitcms.png
tags: community


!["AssertHired + Kiwi TCMS logos"](/images/customers/asserthired+kiwitcms.png "AssertHired + Kiwi TCMS logos")


[AssertHired](http://asserthired.com) is a mock interview and upskilling platform built only for
QA engineers and SDETs. You answer real QA interview questions, typed or out loud,
and an AI interviewer asks follow-ups the way a hiring panel would. Every answer is scored on
technical accuracy, communication, use of examples, and depth.
Then you see what a stronger answer would have covered.

It was built by Aston Cook - a Senior QA Automation Engineer with more than ten years in
test automation who’s run more than 50 QA interviews as the person making the hiring decision.

> AssertHired grew out of my own interview prep for loops at Amazon, Microsoft and Google.
> Every time, the material was either too generic or too shallow. Nothing gave me realistic 
> practice with the questions QA interviewers actually ask, graded by someone who has sat on 
> both sides of the table. So I built it.


### What is AssertHired's relation to open source?

The product itself is commercial, but it stands on open source so I publish what I can. For example:

- [asserthired-evals](https://github.com/aston-cook/asserthired-evals): a reference evaluation suite
for AI interview grading. A synthetic golden dataset, seven CI-gated metrics, LLM-as-judge graders,
a red-team suite, drift detection and judge calibration.
- [changelog-mcp](https://github.com/aston-cook/changelog-mcp): an MCP server that logs user-visible
product changes and grades them later. It's for solo operators who can't run A/B tests.


### What makes developing AssertHired challenging?

Testing the AI. The grader has to give the same answer the same score, and that score has to line up
with what a real panel would say. Classic assertions don't work on non-deterministic output,
so I built an eval harness. Any change to a prompt ships with eval coverage in the same pull request.


### How do you approach testing at AssertHired?

The same way I'd approach it anywhere: in layers, aimed at the risks that cost users something.

- Vitest for unit, integration and component tests
- Playwright end-to-end tests for the flows that matter most, like signing up,
  taking an interview and checking out. They run in CI
- An eval harness for the AI, with golden cases and CI-gated metrics
- Incidents turn into checks. A database permissions bug once reached production,
  so now CI fails the build if code writes to a column the user's role isn't allowed to write
- A guard in the test suite that makes it impossible for a test to send a real email.

Test cases live in code, next to the features they cover.


### Tell us about your *Kiwi TCMS Interview Questions* page?


!["Screenshot of Kiwi TCMS Interview Questions page"](/images/customers/AssertHired_KiwiTCMS_Quesitons.png "Screenshot of Kiwi TCMS Interview Questions page")

It's one of over 70 interview question pages, which cover what interviewers ask at
junior, mid and senior level - the common questions, and a way to practise them out loud.
At present it covers 12 questions and is located at
<https://www.asserthired.com/interview-questions/kiwi-tcms>.


### Why did you decide to write about Kiwi TCMS?

The topic of test management comes up in QA interviews all the time,
and Kiwi TCMS is a strong open-source option. Candidates can run it on their own and learn
how plans, cases, runs and executions fit together, and how automated results get in.
This is exactly what the interview questions probe.

For Kiwi TCMS, my favourite question is:

> You try to add a test case to a test run and it won't go in. Why?
>
> hint: only confirmed cases can be added to a test run


### What do you think about QA and AI? What do you use AI for, and what doesn't work for you?

I use it every day. It's good at first drafts: test cases, test data, boilerplate.
It's good at reading a long log or stack trace and pointing at the line that matters,
and at explaining unfamiliar code. I also use it heavily to write code.
It's a big part of how one developer can run a web app and its iOS and Android apps.

However it doesn't know what matters to your business, and it rarely says it's unsure.
It will happily write a test that passes for the wrong reason. So everything it produces gets
reviewed like a pull request from someone new to the codebase, and anywhere being confidently
wrong is expensive, a person decides.

The bigger shift for QA is testing AI features themselves. You can't assert on an exact string
when the output changes every run. You need golden datasets, graders, and metrics that gate the build.
I learned that building AssertHired's own grader, and I think it's the most valuable new skill
a tester can pick up right now.



---

If you like what we're doing please help us grow and sustain development!

- [Give ⭐ on GitHub](https://github.com/kiwitcms/Kiwi/stargazers);
- [Join our newsletter](https://kiwitcms.us17.list-manage.com/subscribe?u=9b57a21155a3b7c655ae8f922&id=c970a37581)
  and follow all news;
- [Become a contributor](https://kiwitcms.readthedocs.io/en/latest/contribution.html) and an awesome open source hacker;
- [Become a subscriber](/#subscriptions) and help us sustain development
- [Become a reseller]({filename}pages/partners.html) and help us serve your community
