Title: Enterprise Subscription Explained
Headline: all the details you need to know
date: 2025-08-28 12:00
comments: false

Hello testers,
this page explains what the *Enterprise* subscription is and how it brings more
value beyond the Kiwi TCMS application itself.
Please read about the details below.


What is Kiwi TCMS Enterprise
----------------------------

This is a distribution of the Kiwi TCMS application with multiple add-ons
suitable for enterprise customers. Popular examples include various login
backends, e.g. LDAP and multi-tenancy architecture. See the
[features page]({filename}../pages/features.html) for more details.


Who is this subscription for
----------------------------

*Kiwi TCMS Enterprise* is suitable for medium to large organizations which would
like to have full control over their Kiwi TCMS instance and most likely integrate
it with existing 3rd party systems.
These are typically organizations with hundreds or thousands of testers with strong
internal DevOps team and sizable existing infrastructure.


What do you get
---------------

Everything from lower tier subscription plans!

Most notably you get access to all versions of community & enterprise containers
as well as a SaaS namespace plus extended support.

The SaaS namespace can be used as a sandbox for in-house development and
backwards compatibility testing against the latest version of Kiwi TCMS before
upgrading your internal production instance!


What do all of the individual items mean
----------------------------------------

**On-premises inside your VPN:** your DevOps team is responsible for provisioning Kiwi TCMS
and keeping it up and running. Typically this would happen inside your company's VPN and would
be accessible only to employees.
It is an on-premises installation which you have full control over.

NOTICE: This subscription price is per instance! For multiple installations of Kiwi TCMS
please adjust the quantity of items on your subscription!


**Tagged releases and multi-arch builds:** as part of the *Kiwi TCMS Enterprise* subscription
you get access to [private container repositories]({filename}pages/containers.markdown) with
version tagged builds for `aarch64` and `x86_64` CPU architectures. This gives you more hosting options and makes
it easier to upgrade to new versions when you decide to do so.


**Unlimited tenants:** a *Kiwi TCMS Enterprise* container is multi-tenant, meaning that
you can organize testing work into multiple namespaces. For example `product-1.tcms.example.com`,
`team-2.tcms.example.com`, `abcd.tcms.example.com` and so on. There is no limit on the number
of tenants you can have, nor the number of users who can have access to each tenant. That is
entirely up to your teams to decide.


**Full Admin panel access:** means that as part of a *Kiwi TCMS Enterprise* installation you would
designate one or more user accounts as your Kiwi TCMS administrators. They will have full access
to the built-in admin pages of the application and be able to perform actions such as creating or disabling
other accounts, assigning permissions, creating tenants, etc.

Kiwi TCMS refers to such accounts as super-user and the first created account receives super-user
status by default.

NOTICE: super-user / admin accounts are meant for day-to-day operations via the web interface while
a DevOps team will have terminal access to the Kiwi TCMS application for routine maintenance or
one-off tasks. In many cases these roles are performed by the same engineer but don't need to be.



**Based on Red Hat Enterprise Linux:** with a *Kiwi TCMS Enterprise* subscription you receive
an explicit guarantee that the underlying container image is built on top of Red Hat Enterprise Linux.
There is no such guarantee for other container images produced by the Kiwi TCMS team!


**Multiple add-ons:** a *Kiwi TCMS Enterprise* container image ships more functionality than the
community edition of Kiwi TCMS. Our focus is to provide better operational experience for seasoned
IT teams and make it easier to integrate Kiwi TCMS with existing infrastructure and 3rd party systems.
Some examples include:

- OAuth (e.g. GitHub, GitLab) login, LDAP or kerberos
- Metrics and error logging
- Let's Encrypt SSL certificates
- Flexible NGINX configuration
- Amazon SES integration
- Various storage backends
- Additional integration with less popular bug-tracking systems

This list changes over time however we are fully committed to everything being open source!


**Extended support:** as part of *Kiwi TCMS Enterprise* subscription you get more support coverage,
*08-20 UTC/Mon-Fri* with a guaranteed response within *24 hrs*. This is 6 hours extra coverage
compared to lower tier subscription plans.



Happy Testing!

---

If you like what we're doing and how Kiwi TCMS supports various communities
please help us!

- [Give ⭐ on GitHub](https://github.com/kiwitcms/Kiwi/stargazers);
- [Join our newsletter](https://kiwitcms.us17.list-manage.com/subscribe/post?u=9b57a21155a3b7c655ae8f922&id=c970a37581)
  and follow all project news;
- [Become a contributor](https://kiwitcms.readthedocs.io/en/latest/contribution.html) and an awesome open source hacker;
- [Become a customer](/#subscriptions) and help us sustain development
