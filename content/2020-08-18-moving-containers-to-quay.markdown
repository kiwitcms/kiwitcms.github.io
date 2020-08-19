Title: Kiwi TCMS container images now available via Red Hat Quay.io
Headline: and changes to images from Docker Hub
date: 2020-08-18 12:23
comments: false
og_image: images/backup.png
twitter_image: images/backup.png
tags: releases

Hello testers, we have very important news around how container images
for Kiwi TCMS will be distributed! Recently Docker has announced
several changes in their storage plans which makes it less viable for
our team to continue using their services in full!


Information about official upstream container images
----------------------------------------------------

The official upstream Kiwi TCMS container image will continue to be
publicly available via [Docker Hub](https://hub.docker.com/r/kiwitcms/kiwi)
as before. In addition all existing and new images will be available via
[Quay.io](https://quay.io/repository/kiwitcms/kiwi).
These images are available as

- [kiwitcms/kiwi](https://hub.docker.com/r/kiwitcms/kiwi) (Docker Hub)
- [quay.io/kiwitcms/kiwi](https://quay.io/repository/kiwitcms/kiwi) (Quay.io)

Content is exactly the same between the two registries and you may use
the one which you like best!

**Warning:** after November 1st 2020 older versions will not be available from
Docker Hub, only from Quay.io! The reason is that Docker is enforcing a
[6 month image retention limit](https://www.docker.com/pricing/retentionfaq)
for free plans!


Information about private containers for subscribers
----------------------------------------------------

Subscribers enjoy the benefit of having read-only access to tagged versions of the
upstream Kiwi TCMS container images as well as access to tagged versions of
Kiwi TCMS Enterprise container images! Previously these containers were distributed
via Docker Hub and are now available via Quay.io:

- `mrsenko/kiwitcms` -> `quay.io/kiwitcms/version` (version tagged upstream images)
- `mrsenko/kiwitcms-enterprise` -> `quay.io/kiwitcms/enterprise` (enterprise images)

**Important:** existing subscribers have been notified and granted access
to the new repositories on Quay.io. We advise you to update your
`docker-compose.yml` files and start using the new images at your earliest convenience!

**Warning:** existing subscribers will continue having access to private
repositories on Docker Hub until December 31st 2020! Private repositories on
Docker Hub will become unavailable after January 31st, 2021 when Docker's new
storage plans will be forced into effect!


Why did we chose Quay.io
------------------------

There are multiple container registry services available! We think Quay.io
delivers the best price/quality ratio for our own use-case. In particular
we like the billing model around number of private repositories instead the
one around the number of users in your organization. That's very similar
to how we provide access to Kiwi TCMS via our own subscriptions!

Also it just looks cool if you employ your imagination, especially
for non-native English speakers: quay -> qu-ai -> QA!

<br>
Thanks for reading and happy testing!
