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
command! See
[Running Kiwi TCMS as a Docker container](https://kiwitcms.readthedocs.io/en/latest/installing_docker.html)
to get started!

**Warning:** after November 1st 2020 older versions may not be available from
Docker Hub! The reason is a
[6 month image retention limit](https://www.docker.com/pricing/retentionfaq)
enforced by Docker Inc.!


Private containers for subscribers
==================================

Subscribers enjoy the benefit of having read-only access to tagged versions of the
upstream Kiwi TCMS container images as well as access to tagged versions of
Kiwi TCMS Enterprise container images! These images are available as:

- `quay.io/kiwitcms/version`
- `quay.io/kiwitcms/enterprise`

**Important:** you can find your Docker credentials at the
[subscriptions page](https://public.tenant.kiwitcms.org/github/marketplace/plans/),
`PLUGINS -> Subscriptions`. To authenticate try

    $ docker login -u="USERNAME" -p "PASSWORD-TOKEN" quay.io
    # or
    $ echo "PASSWORD-TOKEN" | docker login -u="USERNAME" --password-stdin quay.io
