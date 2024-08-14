Title: Feature showcase: Personal API tokens
Headline: available in Kiwi TCMS v12.7 Private Tenant & Enterprise subscriptions
date: 2023-12-06 13:05
comments: true
tags: features

For a long time now Kiwi TCMS has supported integration with external issue tracking systems,
such as JIRA. This integration is usually configured via bot accounts and their respective
credentials and our flagship functionality is 1-click bug report! This is how it looks like:

* For any TestExecution click on the menu in the corner
!["Corner menu for TestExecution"](/images/features/personal-api-tokens/step_001.png "Corner menu for TestExecution")


* Select an existing Issue Tracker configuration and click *Report bug*
!["1-click bug report button"](/images/features/personal-api-tokens/step_002.png "1-click bug report button")


* Your browser will open a new window with the resulting report inside the external Issue Tracker
!["Newly JIRA issue from a bot account"](/images/features/personal-api-tokens/step_003.png "Newly JIRA issue from a bot account")


Notice that *Reporter* (field 1) is *kiwitcms-bot* although the currently logged in user (field 2) is
different. The *Reporter* text reference (field 3) is the full name of the tester working on the Kiwi TCMS side
and may not match neither of fields 1 and 2! **This presents a challenge if you are tracking any metrics
based on the actual *Reporter* field in JIRA.**

The new **Personal API tokens** functionality allows Kiwi TCMS users to override existing
issue tracker configurations with their own API credentials. Here's how it works:



* In JIRA click on your account and select *Manage account*
!["Manage account menu in JIRA"](/images/features/personal-api-tokens/step_004.png "Manage account menu in JIRA")


* Then select the *Security* tab
!["Account page in JIRA"](/images/features/personal-api-tokens/step_005.png "Account page in JIRA")


* Then click on [Create and manage API tokens](https://id.atlassian.com/manage-profile/security/api-tokens)
!["Security tab of Account page in JIRA"](/images/features/personal-api-tokens/step_006.png "Security tab of Account page in JIRA")


* And create a new API token; Copy the token value for use inside Kiwi TCMS!
!["API Tokens page in JIRA"](/images/features/personal-api-tokens/step_007.png "API Tokens page in JIRA")


* From the Kiwi TCMS navigation menu select PLUGINS -> Personal API tokens
!["Navigate to Personal API tokens in Kiwi TCMS"](/images/features/personal-api-tokens/step_008.png "Navigate to Personal API tokens in Kiwi TCMS")


* Select an existing Issue Tracker via its URL and fill-in your credentials. The drop-down choices
  represent all Issue Tracker records accessible to the current user across all tenants they are
  authorized for! For JIRA
  `api_username` is your JIRA email and `api_password` is your JIRA API token.
  Other issue trackers may only require the `api_password` field. The meaning of
  these fields can be found in
  [documentation](https://kiwitcms.readthedocs.io/en/latest/modules/tcms.issuetracker.html#submodules)
  for each different type of issue tracker that Kiwi TCMS can integrate with
!["Create a new API token in Kiwi TCMS"](/images/features/personal-api-tokens/step_009.png "Create a new API token in Kiwi TCMS")


* Repeat the *1-click bug report* steps shown in the beginning.
  Your browser will open a new window with the resulting report inside JIRA
!["New JIRA issue from your personal account"](/images/features/personal-api-tokens/step_010.png "New JIRA issue from your personal account")


Notice that *Reporter* (field 1), the currently logged in user (field 2) and
the *Reporter* text reference (field 3) now represent the same person!


Happy Testing!


---

If you like what we're doing and how Kiwi TCMS supports various communities
please help us!

- [Give ⭐ on GitHub](https://github.com/kiwitcms/Kiwi/stargazers);
- [Give 👍 on GitLab](https://gitlab.com/gitlab-org/gitlab/-/issues/334558);
- [Donate via Open Collective](https://opencollective.com/kiwitcms/donate) as low as 1 EUR;
- [Join our newsletter](https://kiwitcms.us17.list-manage.com/subscribe/post?u=9b57a21155a3b7c655ae8f922&id=c970a37581)
  and follow all project news;
- [Become a contributor](https://kiwitcms.readthedocs.io/en/latest/contribution.html) and an awesome open source hacker;
- [Become a customer](/#subscriptions) and we'll share our profits with the community
