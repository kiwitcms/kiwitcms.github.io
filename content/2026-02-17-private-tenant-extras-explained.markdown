Title: Private Tenant Extras Subscription Explained
Headline: all the details you need to know
date: 2026-02-17 10:35
comments: false


This page explains what *Private Tenant Extras* is and how it brings
more value to your existing Kiwi TCMS subscription.
Please read about the details below.


What is Private Tenant Extras by Kiwi TCMS
------------------------------------------

This is an optional subscription tier which combines our existing
[Private Tenant SaaS hosting]({filename}2025-08-20-private-tenant-explained.markdown)
with access to the underlying data in its raw format!

IMPORTANT: any *Private Tenant* subscription with unit count > 1
entitles you to this *Extras* add-on! Please contant
[support]({filename}pages/support.markdown) for setup!


Who is this subscription for
----------------------------

*Private Tenant Extras* is suitable for teams using the SaaS version of
Kiwi TCMS which require access to their underlying data in machine readable
format!


What do you get
---------------

Everything from lower tier subscription plans plus access to a database
and file exports in case you would like to keep your own backup copy or
provide in-house integration with other tools.


What do all of the individual items mean
----------------------------------------

**Raw SQL database export:** you will receive a database export in SQL format,
suitable for the Postgres database engine. It includes all tables which constitute your
own namespace under the `*.tenant.kiwitcms.org` domain name. This also includes
information about user accounts authorized to access your tenant!

IMPORTANT: due to technical and security limitations we cannot give you direct access
to the underlying database cluster in real-time!


**File uploads included:** means exactly that - all attachments uploaded to your
private tenant will be included as part of this subscription!


**Encrypted access:** all data we export is stored encrypted and may be accessed
using the popular open source tool [restic](https://restic.net/).
We will provide you with read-only level access and an unique public/private keypair!

IMPORTANT:

- Export frequency: 1/day (max 3/day)
- Exports on disk: last 3 days
- Retention period: 7 days


**Storage region of your choice:** means that we can publish to a geographic region
and data center of your choice. Exact locations are subject to availability.

NOTE: At the time of writing our preferred storage backend is
[Amazon S3](https://docs.aws.amazon.com/general/latest/gr/s3.html).



Happy Testing!

---

If you like what we're doing and how Kiwi TCMS please help us!

- [Give ⭐ on GitHub](https://github.com/kiwitcms/Kiwi/stargazers);
- [Join our newsletter](https://kiwitcms.us17.list-manage.com/subscribe/post?u=9b57a21155a3b7c655ae8f922&id=c970a37581)
  and follow all project news;
- [Become a contributor](https://kiwitcms.readthedocs.io/en/latest/contribution.html) and an awesome open source hacker;
- [Become a customer](/#subscriptions) and help us sustain development
