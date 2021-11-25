Title: Container information
url: containers/
save_as: containers/index.html
add_section: True


Upstream containers
===================

The official upstream Kiwi TCMS container image is publicly available via
[Docker Hub](https://hub.docker.com/r/kiwitcms/kiwi) and
[Red Hat Quay.io](https://quay.io/repository/kiwitcms/kiwi). It is
free of charge and anyone can download and use it via the `docker pull`
command!

**Warning:** after November 1st 2020 older versions will not be available from
Docker Hub, only from Quay.io! The reason is that Docker is enforcing a
[6 month image retention limit](https://www.docker.com/pricing/retentionfaq)!


Private containers for subscribers
==================================

Subscribers enjoy the benefit of having read-only access to tagged versions of the
upstream Kiwi TCMS container images as well as access to tagged versions of
Kiwi TCMS Enterprise container images! These images are available as:

- `quay.io/kiwitcms/version`
- `quay.io/kiwitcms/enterprise`

**Important:** you need to register an account at [Quay.io](https://quay.io/signin/)
(it's free) and let us know your username or email. It is best this to be the
sys-admin account which will be used to deploy these containers when hosting on-premise!
