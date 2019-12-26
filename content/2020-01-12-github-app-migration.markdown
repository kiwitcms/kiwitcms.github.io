Title: Kiwi TCMS is migrating from OAuth to GitHub App
headline: so we can enable tighter integration with GitHub
date: 2020-01-12 18:31
comments: true
tags: releases

Hello testers, Kiwi TCMS is migrating from its OAuth backend
to the so called "GitHub App" backend in order to enable further
integration with GitHub's PR flow as stated previously in our
[yearly goals]({filename}2019-01-10-2019-mission.markdown).
This blog post outlines the differences between the old and the new!

The old OAuth application only had access to your username, name and email
for authentication purposes. Its authorization screen looked like so:

<img src="/images/github/oauth_login.png"
    alt="OAuth login screen"
    style="float:none">


GitHub Apps on the other hand are designed for more granular access and tighter
integration with the GitHub platform. This type of application still allows you
to perform 1-click login into
[https://public.tenant.kiwitcms.org](https://public.tenant.kiwitcms.org). If this is your
first time logging into Kiwi TCMS after the migration you will see the following screen:

<img src="/images/github/app_login.png"
    alt="App login screen"
    style="float:none">

Notice how the heading, information section and action button are slightly different!
The important section is **Resources on your account**! We still only need your
name, username and email address! Existing Kiwi TCMS accounts (from before the migration)
will continue to work and they will still have access to all of their data previously
created. Authorization of this new GitHub app (e.g. login only) does not give it
permissions to access your repositories and act on your behalf.


To permit this GitHub App to access your repositories and/or act on your behalf
you must **Install** it first. That is tell Kiwi TCMS GitHub integration code
what kind of resources from your GitHub account it is allowed to access. You may
install into your personal GitHub account or an organizational account! You may
do this by following the **Install & Authorize** button on our home page or
directly from [https://github.com/apps/kiwi-tcms](https://github.com/apps/kiwi-tcms)!
The screen should look like this:

<img src="/images/github/app_installation.png"
    alt="App installation screen"
    style="float:none">

Initially we ask for read-only access to a few resources so Kiwi TCMS can start
receiving webhooks from GitHub and synchronize information about your repositories
into our database. This is documented both on the app installation screen itself
(required by GitHub) and on
[https://github.com/kiwitcms/github-app](https://github.com/kiwitcms/github-app)!

Further ideas about integration between GitHub and Kiwi TCMS, including the original
idea about status checks from [Issue #700](https://github.com/kiwitcms/Kiwi/issues/700),
can be found at
[https://github.com/kiwitcms/github-app/issues](https://github.com/kiwitcms/github-app/issues).


Help us grow
------------

After this migration we're back to zero! The thousands of authorizations we've had
on our legacy OAuth app can't be migrated to the new app. This also means our
listing on GitHub Marketplace will be taken down and we have to qualify through the
entire process from scratch.

Please help us get back on track! Here's what we ask you to do (in this order):

* Go to [https://public.tenant.kiwitcms.org](https://public.tenant.kiwitcms.org) and
  click the GitHub login icon, follow through with the process;
* Go to [https://github.com/apps/kiwi-tcms](https://github.com/apps/kiwi-tcms) and
  click the **Install** button, select account & repositories and complete the
  process;
* Share this blog post with friends, co-workers and other testers who might be
  interested to help!


Thank you! Happy testing and happy new year!
