Title: Private package repositories
url: packages/
save_as: packages/index.html
add_section: True


Private package repositories for subscribers
============================================

The Kiwi TCMS application is officially distributed and deployed as a container image
with all of its source code available on [GitHub](https://github.com/kiwitcms/Kiwi).
The Kiwi TCMS *Community Edition* distribution **DOES NOT** require private package
artifacts!


Subscribers enjoy the benefit of read-only access to private package repositories
for the purposes of building their own downstream containers, custom development and/or
creating their own non-standard deployment configurations! Note that source code for
add-ons maintained by the Kiwi TCMS team is usually available under
<https://github.com/kiwitcms/>.

**Important:** you can find your credentials at the
[subscriptions page](https://public.tenant.kiwitcms.org/github/marketplace/plans/),
`MORE -> Subscriptions`. To make use of them try:


For JavaScript:

    https://TOKEN@pkg.kiwitcms.eu/npm/

For Python:

    https://TOKEN@pkg.kiwitcms.eu/pypi/

For Yum/RPM:

    https://TOKEN@pkg.kiwitcms.eu/yum/
