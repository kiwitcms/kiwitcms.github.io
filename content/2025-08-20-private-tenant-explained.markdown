Title: Private Tenant Subscription Explained
Headline: all the details you need to know
date: 2025-08-20 13:00
comments: false


Hello testers, this page explains what the *Private Tenant* subscription is and
how it brings more value beyond the Kiwi TCMS application itself.
Please read about the details below.


What is Private Tenant by Kiwi TCMS
-----------------------------------

This is our most popular subscription tier which combines SaaS hosting and
additional support services. It is more about *ease of use* allowing your
QA team to focus on more testing rather than specific software features.


Who is this subscription for
----------------------------

*Private Tenant* is suitable for medium sized teams which consider
their Kiwi TCMS instance to be an important piece of infrastructure but
not necessarily mission critical.
These are organizations with less than 100 testers
which would like to focus their limited resources towards their own
products and are happy to consume 3rd party software as a service.
Most typically these are start-up companies and medium sized businesses.


What do you get
---------------

Everything from lower tier subscription plans!

Most notably you get access to all versions of community releases and a
dedicated SaaS namespace as your main Kiwi TCMS instance plus extra
product features and technical support.


What do all of the individual items mean
----------------------------------------

**1x SaaS hosting:** you will receive the opportunity to create your own namespace
under the `tenant.kiwitcms.org` domain name, for example `https://acme-inc.tenant.kiwitcms.org`.

IMPORTANT: A *Private Tenant* subscription entitles you to a single namespace and the email associated
with the purchase is referred to as *tenant owner*.
If you need more tenants you should purchase additional subscriptions under different email addresses!


**Unlimited users:** means exactly that - you may assign an arbitrary number of users to have access
to the information kept under your tenant. With *Private Tenant* subscription there are no per-seat
fees - it is a flat rate price!


**Control of authorized users:** means that you can control who has access to your data and adjust
their permissions level when necessary. You can have your QA team and your partners collaborate in a
single Kiwi TCMS tenant if you decide to do so.

With a *Private Tenant* subscription user accounts are actually kept under `public.tenant.kiwitcms.org`,
which is also referred to as *the main tenant* or *the public tenant* while access control is granted on
a per-tenant basis via the web interface by the tenant owner.


NOTICE: the name "public tenant" is a misnomer, which comes from one of the underlying programming
libraries used inside Kiwi TCMS. In reality no data is publicly visible, including user accounts.



**No User account admin:** a stand-alone installation of Kiwi TCMS allows the first registered account,
named super-user, to have access to all others. This isn't the case with a *Private Tenant* subscription.
You may invite/authorize users and groups for your own tenant and manage access permissions however
you cannot create, remove or disable user accounts. You cannot view the list of all other accounts
which exist in the database.


**Extra functionality:** a *Private Tenant* subscription is actually built on top of a
Kiwi TCMS Enterprise container image which means some extra features and add-ons are available
to you as part of this subscription. Whenever possible add-on features are also accessible to
*Private Tenant* subscribers. A notable exception are different login methods which cannot be
enabled nor configured on a per-tenant basis!


**Always the latest version:** a SaaS tenant is always the latest version and is automatically
upgraded by the Kiwi TCMS team. While we try our best not to introduce bugs and backwards incompatible
changes it is possible that test automation scripts and/or 3rd party integration code may break
sometimes.

IMPORTANT: With a *Private Tenant* subscription the responsibility of testing all of your integrations against
the latest version of Kiwi TCMS falls onto the customer.


**Backup & disaster recovery:** the Kiwi TCMS team takes care to backup our SaaS cluster regularly
in case a catastrophic failure occurs - this is designed for disaster recovery purposes.

While the Kiwi TCMS application itself keeps track of changes and removals of certain objects it may
not always be possible to restore a deleted entry. You may be able to create new records with
the same information however if a record cannot be restored via the Kiwi TCMS web interface we cannot help you.
Due to technical limitations we cannot restore individual records from a *Private Tenant*.


**Dedicated technical support:** as a *Private Tenant* customer you receive full technical support
from the Kiwi TCMS team spanning all components related to the Kiwi TCMS application. Working hours
and response times are listed on our main page!


Happy Testing!

---

If you like what we're doing and how Kiwi TCMS supports various communities
please help us!

- [Give ⭐ on GitHub](https://github.com/kiwitcms/Kiwi/stargazers);
- [Join our newsletter](https://kiwitcms.us17.list-manage.com/subscribe/post?u=9b57a21155a3b7c655ae8f922&id=c970a37581)
  and follow all project news;
- [Become a contributor](https://kiwitcms.readthedocs.io/en/latest/contribution.html) and an awesome open source hacker;
- [Become a customer](/#subscriptions) and help us sustain development
