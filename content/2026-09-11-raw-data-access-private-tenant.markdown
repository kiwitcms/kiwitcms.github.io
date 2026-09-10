Title: Raw data access for Kiwi TCMS Private Tenant
Headline: removes vendor lock-in with encrypted SQL export and files backup
date: 2026-09-11 10:25
comments: false
og_image: images/banners/encrypted_export.png
twitter_image: images/banners/encrypted_export.png
tags: community


![header image](/images/banners/encrypted_export.png)

We are happy to announce that newly purchased
[Private Tenant]({filename}2025-08-20-private-tenant-explained.markdown)
subscriptions will include raw data access as we work towards removing
vendor lock-in for our SaaS customers!


### What's new

- Database export in SQL format suitable for the Postgres database engine
- All attachments uploaded to a private tenant namespace will be included
- Multiple storage region/vendor options available subject to technical compatibility
- All data is stored encrypted and may be downloaded using a popular open source tool


### Limitations

- Export frequency: 1/day
- Exports in storage: last 3 days (rolling)
- Retention period: 7 days (rolling)
- Existing subscriptions may upgrade if they wish to unlock this service

IMPORTANT: Due to technical and security considerations we cannot provide
real-time access to the underlying database cluster however we are working in that direction!
We are also researching the technicalities behind enabling *Bring Your Own Storage* for
file uploads!



You can find the *Private Tenant* subscription in the
[*Subscriptions*](/#subscriptions) section on our main page!


---

Thank you for using Kiwi TCMS. If you like what we're doing please help us grow:

- [Give ⭐ on GitHub](https://github.com/kiwitcms/Kiwi/stargazers);
- [Join our newsletter](https://kiwitcms.us17.list-manage.com/subscribe?u=9b57a21155a3b7c655ae8f922&id=c970a37581)
  and follow all news;
- [Become a subscriber](/#subscriptions) and help us sustain development;
- [Become a reseller]({filename}pages/partners.html) and help us serve your community
