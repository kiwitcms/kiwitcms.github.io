Title: Versioned releases of Kiwi TCMS
headline: available to enterprise customers
date: 2020-06-23 00:12
comments: true
tags: community, releases


We are happy to announce that versioned releases of Kiwi TCMS container
images are now available to customers with an active
[enterprise subscription](/#subscriptions).

For a long time our release policy has been to push only `latest` version
of our upstream `pub.kiwitcms.eu/kiwitcms/kiwi` containers. This upstream channel doesn't
carry version tags and receives versioned releases only when there are
backwards incompatible database migrations!
This proved challenging to administrators who don't upgrade
immediately to the latest version as soon as it comes out.

For example this happens in environments where admins use the upstream images
as proof of concept and later switch to a production grade installation.
Quite often they migrate to the *Kiwi TCMS Enterprise* containers during the
same time.

Starting today versioned releases of Kiwi TCMS (single tenant) will be available
via the `mrsenko/kiwitcms` private repository on Docker Hub.
This repository includes tagged versions of the same docker images coming from
the `pub.kiwitcms.eu/kiwitcms/kiwi` channel!
Access is granted automatically to all existing enterprise subscribers!
