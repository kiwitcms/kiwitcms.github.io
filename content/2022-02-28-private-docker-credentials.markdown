Title: Container Registry Credentials for Subscribers
Headline: are now fully automated; here's how to use them
date: 2022-02-27 12:40
comments: true

Kiwi TCMS subscribers had to go through a manual process of registering
a username with our container registry, *hub.kiwitcms.eu* and email support
before they could access private docker images. This process is now fully
automated!

!["private credentials card"](/images/private_docker_credentials.png "private credentials card")

Credentials are automatically created upon subscription payment and configured for
read-only access to respective repositories based on the type of subscription.
You can find your credentials at the
[subscriptions page](https://public.tenant.kiwitcms.org/github/marketplace/plans/),
`PLUGINS -> Subscriptions`. To authenticate try

    $ docker login -u="USERNAME" -p "PASSWORD-TOKEN" hub.kiwitcms.eu
    # or
    $ echo "PASSWORD-TOKEN" | docker login -u="USERNAME" --password-stdin hub.kiwitcms.eu


If you would like to have access to private container repositories for Kiwi TCMS
checkout the [containers page]({filename}pages/containers.markdown) and
[subscribe](/#subscriptions)!


Happy Testing!
