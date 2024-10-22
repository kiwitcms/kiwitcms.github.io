Title: Anonymous analytics via Plausible.io
Headline: will be enabled in Kiwi TCMS v13.1
date: 2024-02-23 12:15
comments: true

Since the very beginning when we launched Kiwi TCMS our team has been struggling to
understand how many people use it, how active these users are, which pages & functionality
they spend the most time with, how many installations of Kiwi TCMS are out there in the wild
and which exactly versions are the most used ones!

We reached over [2 million downloads]({filename}2023-11-08-thank-you-2m.markdown)
without any analytics inside the application because we do not want to intrude
on our users' privacy and this has not been easy! Inspired by
[a recent presentation](https://fosdem.org/2024/schedule/event/fosdem-2024-3648-privacy-respecting-usage-metrics-for-free-software-projects/)
we learned about Plausible Analytics - GDPR, CCPA and cookie law compliant, open source site analytics tool -
and decided to use it! You can check-out how it works [here](https://plausible.io/privacy-focused-web-analytics).


What is changing
================

Starting with Kiwi TCMS v13.1 anonymous analytics will be enabled for statistical purposes.
Our goal is to track overall usage patterns inside the Kiwi TCMS application(s),
not to track individual visitors. All the data is in aggregate only.
No personal data is sent to Plausible.

Anonymous analytics are enabled on this website,
inside our [official container images]({filename}pages/containers.markdown) and for
all tenants provisioned under `https://*.tenant.kiwitcms.org`. Running containers
will report back to Plausible Analytics every 5 days to send the version number of Kiwi TCMS,
nothing else! Here's a preview of what it looks like:

!["preview of versions report"](/images/analytics/preview_active_versions.png "preview of versions report")

You can examine our source code
[here](https://github.com/kiwitcms/Kiwi/pull/3546) and [here](https://github.com/kiwitcms/Kiwi/pull/3547).

Staying true to our open source nature we've made the
[kiwitcms.org stats dashboard](https://plausible.io/kiwitcms.org) publicly available immediately!
In several months we are going to carefully examine the stats collected by the *kiwitcms-container* dashboard
and consider making them publicly available as well! Most likely we will!


Who uses Plausible
==================

A number of [open source] organizations have publicly endorsed the use of Plausible Analytics:

- Plausible Analytics - check-out [their stats](https://plausible.io/plausible.io)
- elementary OS - [blog post](https://blog.elementary.io/leaving-google-analytics-is-finally-plausible/),
    [blog stats](https://plausible.io/blog.elementary.io),
    [main stats](https://plausible.io/elementary.io)
- Open Source Initiative - [blog post](https://opensource.org/blog/2022-01-welcome-new-members),
    [landing-page stats](https://plausible.io/join.opensource.org),
    [main stats](https://plausible.io/opensource.org)
- The Rails Foundation - [privacy policy](https://rubyonrails.org/foundation/privacy),
    [website stats](https://plausible.io/rubyonrails.org)
- System 76 - open source hardware vendor -
    [privacy policy](https://system76.com/privacy-2021), stats not public
- The Scottish Government - [privacy policy](https://www.gov.scot/privacy/), stats not public

You can also inspect this huge list of
[Websites using Plausible Analytics](https://trends.builtwith.com/websitelist/Plausible-Analytics)
compiled by a 3rd party vendor!


How can I opt-out
=================

- Leave everything as-is and help us better understand usage of Kiwi TCMS
- Update the setting `PLAUSIBLE_DOMAIN` and collect your own stats with Plausible
- Update the setting `ANONYMOUS_ANALYTICS` to False and disable all stats

**IMPORTANT:** Private Tenant customers and
[demo instance](https://public.tenant.kiwitcms.org) users cannot opt-out! Given that they
are consuming digital resources hosted by our own team they have already shared
more information with us than what gets sent to Plausible!
Note that we do not track individual users, analyze or sell your information to 3rd parties
even across our own digital properties!


Happy Testing!

---

If you like what we're doing and how Kiwi TCMS supports various communities
please help us!

- [Give ⭐ on GitHub](https://github.com/kiwitcms/Kiwi/stargazers);
- [Give 👍 on GitLab](https://gitlab.com/gitlab-org/gitlab/-/issues/334558);
- [Join our newsletter](https://kiwitcms.us17.list-manage.com/subscribe/post?u=9b57a21155a3b7c655ae8f922&id=c970a37581)
  and follow all project news;
- [Become a contributor](https://kiwitcms.readthedocs.io/en/latest/contribution.html) and an awesome open source hacker;
- [Become a customer](/#subscriptions) and help us sustain development
