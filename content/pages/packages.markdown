Title: Private add-on package repositories
url: packages/
save_as: packages/index.html
add_section: True


Private add-on package repositories for subscribers
===================================================

The Kiwi TCMS application is officially distributed and deployed as a container image
with all of its source code available on [GitHub](https://github.com/kiwitcms/Kiwi).
The Kiwi TCMS *Community Edition* container can be built from source and **DOES NOT**
require additional package artifacts!

Subscribers enjoy the benefit of read-only access to private package repositories
for extra add-ons maintained by the Kiwi TCMS team for the purposes of building
their own downstream containers, custom development and/or creating their own
non-standard deployment configurations!

**Important:** you can find your credentials at the
[subscriptions page](https://public.tenant.kiwitcms.org/github/marketplace/plans/),
`MORE -> Subscriptions`. To make use of them try:


For Python:

    PKG_TOKEN="token-from-page" pip install -r ./requirements.txt

alternatively:

    export PKG_TOKEN="token-from-page"
    pip install --index-url https://${PKG_TOKEN}@pkg.kiwitcms.eu/pypi/ --extra-index-url https://pypi.org/simple/ <package-name>


Related packages
================

- kiwitcms - distributed outside of container image
- [kiwitcms-django-tenants](https://github.com/kiwitcms/django-tenants)
- [kiwitcms-github-app](https://github.com/kiwitcms/github-app)
- [kiwitcms-tenants](github.com/kiwitcms/tenants/)
- [kiwitcms-trackers-integration](github.com/kiwitcms/tenants/)
- [social-auth-kerberos](https://github.com/kiwitcms/python-social-auth-kerberos)
