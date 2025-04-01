Title: Managed Hosting Subscription Explained
Headline: all the details you need to know
date: 2024-10-16 13:00
comments: false

Hello testers,
our team has worked with our largest customers in order to better define what the
*Managed Hosting* subscription is and how it can bring more value beyond the
Kiwi TCMS application itself. You can read about the details below.



What is Managed Hosting by Kiwi TCMS
------------------------------------

This is our top-tier of support services, where the Kiwi TCMS team leverages
our existing experience of hosting and running the Kiwi TCMS application
in production. It is more about *the batteries included* which make
overall operations easier, rather than specific software features.


Who is this subscription for
----------------------------

*Managed Hosting* is suitable for large organizations which consider
their Kiwi TCMS instance to be a mission critical piece of infrastructure.
These are typically organizations with hundreds or thousands of testers
which have more requirements towards security and performance.


What do you get
---------------

Everything from lower tier subscription plans!

Most notably you get access to all versions of
community & enterprise releases and a SaaS namespace which could be useful for in-house
development and experimentation with Kiwi TCMS. The SaaS version
(or a self-deployed enterprise version) can also be used as a sandbox instance to exercise
backwards compatibility testing against the latest version of Kiwi TCMS before
we upgrade your designated production instance!


What do all of the individual items mean
----------------------------------------

**1x Kiwi TCMS hosted in AWS:** we've been running Kiwi TCMS in production since 2017 without
major incidents so far! This is lots of application and operation specific experience which
allows us to run a Kiwi TCMS instance securely and efficiently for you.
*Managed Hosting* frees up
your DevOps team from figuring it all out and lets them work on higher priority items.

Under this subscription you may chose one of
[Amazon Web Services regions](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)
if you have team members concentrated in a specific geographic area. There is no guarantee for the
actual underlying technology, e.g. EC2, ECS, Lightsail or other - this is up to us!

IMPORTANT: Kiwi TCMS would adjust application size in order to meet your performance requirements
within reason. The total cost of all consumed cloud resources should still be covered by your
monthly payment. In extreme scenarios we would ask you to purchase a higher quantity
of the same subscription.


**Fully isolated instance:** means exactly that - your database, web application and any additional
services (e.g. a Redis cache) will be completely isolated from resources provisioned for other customers
due to security concerns.

As part of the *Managed Hosting* subscription you get an unlimited storage quota for
uploaded files and attachments. We may work with you to establish a data retention period if necessary.


**Static files via global CDN:** for *Managed Hosting* deployments all JavaScript, CSS
and related assets are served via a global content distribution network across hundreds of
edge locations in order to reduce latency and speed up page loading times in the browser.


**Email delivery via Amazon SES:** depending on the amount of testing you perform Kiwi TCMS may be
sending lots of emails. Throughout the years we've observed that SMTP connections sometimes fail
resulting in unreliable service or email messages get marked as SPAM hurting the reputation of the sender.
This is also an area which requires prior configuration and does not work out of the box.

*Managed Hosting* deployments use Amazon SES for email delivery which has the added benefit of
automatically managing blacklists when a delivery fails or is marked as SPAM. As part of
this subscription you will have to authorize one of your email addresses to be used with SES!
Alternatively we may use an email address on one of our own domains.


**DNS & SSL management:** correct DNS and SSL configuration is vital for the
so called multi-tenant feature in Kiwi TCMS. This is the feature where you can create
unlimited namespaces of the type `team-1.tcms.example.com` and `product-2.tcms.example.com`
via the Kiwi TCMS web interface and have them available immediately.

A misconfigred DNS and/or misconfigured and/or expired SSL certificates is something that
happens regularly and leads to sub-optimal performance. With *Managed Hosting* we're going
to be managing all of this in the background.


**Full application admin via web:** as a customer you get the super-user account defined
in the Kiwi TCMS application and we promise that Kiwi TCMS staff will not login to minimize
the possibility of incidents. In any case we treat all of the data stored in a
*Managed Hosting* instance as confidential.


**Can override app/host settings:** most of Kiwi TCMS' settings are not exposed via the web
interface and some customers find it cumbersome to override them. This is unfortunately
how the underlying application framework is designed to work. With a *Managed Hosting*
subscription our team will be taking care of this for you. This also extends to settings
of the underlying host system when possible.


**Kiwi TCMS upgrade upon request:** currently an application upgrade involves human
interaction and is not something that can be automated as an unattended process.
Upgrading may also have implications towards backwards compatibility with 3rd
party systems and in-house software. That's why we would upgrade your instances
only after an explicit request and strive to keep downtime to a minimum.


**Regular security updates:** relates to the underlying host OS (where applicable)
and web server configuration for Kiwi TCMS. With a *Managed Hosting* subscription
our team will be keeping track of this for you. The underlying Postgres database
is not exposed via the Internet however we try to keep this up-to-date too!
Your InfoSec team is welcome to submit suggestions for improvements and we would
happily implement them where possible.


**Access to encrypted backups:** our team performs regular backups for every Kiwi TCMS
instance within our care. All backups are encrypted using the popular open source tool
[restic](https://restic.net/). This includes database and file uploads.

As part of the *Managed Hosting* subscription we will work with your IT department and
provide you with shared access to these files in case you would like to keep your own
disaster recovery copy and/or to provision staging Kiwi TCMS instances with production like
data. Our team is open to further collaboration in this area!


**Extended support:** as part of *Managed Hosting* subscription you get more support coverage,
*07-22 UTC/Mon-Sun*, this is 3 hours extra and coverage over the weekends
plus a *video conference* option when necessary in order to resolve
requests faster.


**Custom long-term billing terms:** we can adjust your payment schedule so that
it works best for you. For example weekly, monthly, every 3 or 6 months, every 1, 2 or 3 years!
We apply a custom discount for long-term billing agreements. In addition to that
customers who've been using a *Managed Hosting* subscription for more than 3 years are
eligible for a loyalty discount.


Mid-term plans
--------------

**Hosting on Red Hat Enterprise Linux:** in some cases we are running containers directly
onto a bare-metal or virtualized machine. We are exploring the possibility of using
Red Hat Enterprise Linux throughout the entire hosting stack and tying this with
Red Hat's existing management infrastructure without adding extra charges towards
our customers.


**Red Hat Enterprise Linux package upgrades:** will apply to both host OS (where applicable)
and the kiwitcms/enterprise container application which is already built on top of
[Red Hat UBI 9](https://catalog.redhat.com/software/containers/ubi9-minimal/61832888c0d15aff4912fe0d)
container image.


**Load balanced deployment:** running the Kiwi TCMS application in a load balanced
environment for customers with high performance requirements.


**Access to monitoring tools:** we're exploring how to securely provide access
for each customer to our existing monitoring tools and/or implement new ones where needed.
This will allow your DevOps team to scrutinize how well we are doing and
provide us with valuable feedback. Let us know what you would be interested to have access to!



Long-term plans
---------------

**Security certifications via NDA:** our vision is to be able to securely share existing and
future security related certifications with our *Managed Hosting* customers under a
non-disclosure agreement. Ideally we would enroll provisioned instances into a penetration testing
program which will be provided by a 3rd party vendor. Let us know if you have specific suggestions here.


**24/7 support:** the first step here will be to refactor our existing support program
and migrate to a ticket management system. Ideally such system will be open source too.
At a later date our goal is to have 24x7 coverage in order to minimize response times!



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
