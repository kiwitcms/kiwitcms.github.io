Title: Important changes for Kiwi TCMS subscribers
Headline: new quay.io accounts, automatic account creation for new subscribers
date: 2024-10-22 12:15
comments: false

Hello testers,
starting today we are introducing several important changes to our subscription backend.


New Quay.io accounts
--------------------

Subscribers have the ability to access extra
[container images]({filename}pages/containers.markdown) via private docker repositories.

**What is changing:** quay.io account username will no longer be based on email address,
instead it is based on the subscription ID which is more stable over time.
Discovering your credentials is explained on the page above.

New accounts have been created automatically for those eligible!
Old accounts will continue to be active until **December 31st 2024**,
afterwards they will be removed! Make sure to update your
workflows with the new credentials before December 31st!


Automatic account creation for new subscriptions
------------------------------------------------

Previously subscribers who purchased a subscription were required to create
an account on <https://public.tenant.kiwitcms.org> using the same email address
used during their purchase.

**What is changing:** user accounts for new subscriptions will be created automatically
if they do not exist and a random password would be assigned to them. Customers will
be able to reset passwords for these accounts via
<https://public.tenant.kiwitcms.org/accounts/passwordreset/>! The account username
is sent as a reminder in the password reset email!


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
