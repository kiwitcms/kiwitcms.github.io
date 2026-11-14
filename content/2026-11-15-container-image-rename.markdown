Title: Container image renamed to kiwitcms/kiwitcms
Headline: you should update your configuration
date: 2026-11-15 10:00
comments: false
og_image: images/features/container-image-rename/banner.png
twitter_image: images/features/container-image-rename/banner.png
tags: releases

![Container image rename banner](/images/features/container-image-rename/banner.png "Container image rename banner")

Starting with Kiwi TCMS 17.1 the official container image is published as
`pub.kiwitcms.eu/kiwitcms/kiwitcms` instead of `pub.kiwitcms.eu/kiwitcms/kiwi`!

This follows the rename of our GitHub repository from `kiwitcms/Kiwi` to
`kiwitcms/kiwitcms` and keeps all names aligned with the actual project name.
The software inside the image and the release cadence remain exactly the same.


What changed
------------

The image path has changed:

- Old:`pub.kiwitcms.eu/kiwitcms/kiwi`
- New: `pub.kiwitcms.eu/kiwitcms/kiwitcms`


How to update
-------------

Pull the image using its new name:

```
docker pull pub.kiwitcms.eu/kiwitcms/kiwitcms
```

For a `docker-compose.yml`, update the `image:` entry:

```yaml
services:
    web:
        image: pub.kiwitcms.eu/kiwitcms/kiwitcms:latest
```

For a Helm chart it's similar:

```yaml
image:
  repository: pub.kiwitcms.eu/kiwitcms/kiwitcms
  pullPolicy: IfNotPresent
  tag: latest
```


About the old name
------------------

The old `pub.kiwitcms.eu/kiwitcms/kiwi:latest` image still resolves to the 17.1 release,
but it will no longer receive new versions. This location will cease to resolve after
**01 Jan 2027**.

You should update your deployment configuration to
`pub.kiwitcms.eu/kiwitcms/kiwitcms` at your earliest convenience.

Happy Testing!

---

If you like what we're doing and how Kiwi TCMS supports various communities
please help us!

- [Give ⭐ on GitHub](https://github.com/kiwitcms/kiwitcms/stargazers);
- [Join our newsletter](https://kiwitcms.us17.list-manage.com/subscribe?u=9b57a21155a3b7c655ae8f922&id=c970a37581)
  and follow all project news;
- [Become a contributor](https://kiwitcms.readthedocs.io/en/latest/contribution.html) and an awesome open source hacker;
- [Become a subscriber](/#subscriptions) and help us sustain development
- [Become a reseller]({filename}pages/partners.html) and help us serve your community
