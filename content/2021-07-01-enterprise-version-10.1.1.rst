Kiwi TCMS Enterprise 10.1.1-mt
##############################

:headline: support for Keycloak authentication and publicly readable tenants
:date: 2021-07-01 16:00
:comments: true
:tags: releases


We're happy to announce Kiwi TCMS Enterprise version 10.1.1-mt!

**IMPORTANT:** this release includes support for authentication via
Keycloak and support for enabling read-only view of tenants data for
anonymous users.


Docker images::

    hub.kiwitcms.eu/kiwitcms/enterprise       10.1.1-mt   d61e243dc4f5   1.19GB


Changes since Kiwi TCMS Enterprise 10.1-mt
------------------------------------------


- Based on Kiwi TCMS v10.1
- Fix URL to Python Social Auth documentation
- Support read-only view on tenants for anonymous users. Contains a
  database migration to rename ``on_trial`` field to ``publicly_readable``
- Document initial configuration. Site administrators should add the
  ``tenants.change_tenant`` permission to users/groups who are allowed
  to make their tenants publicly visible. Fixes
  `Issue #87 <https://github.com/kiwitcms/enterprise/issues/87>`_,
  references
  `Issue #88 <https://github.com/kiwitcms/enterprise/issues/88>`_
- Document the build process. Fixes
  `Issue #89 <https://github.com/kiwitcms/enterprise/issues/89>`_
- Verify support for Keycloak logins. Fixes
  `Issue #86 <https://github.com/kiwitcms/enterprise/issues/86>`_
- Update kiwitcms-github-app from 1.2.4 to 1.3.0
- Update kiwitcms-tenants from 1.5.0 to 1.6.0


How to upgrade
---------------

`Backup <{filename}2018-07-30-docker-backup.markdown>`_ first!
If you are using Kiwi TCMS as a Docker container then::

    cd path/containing/docker-compose/
    docker-compose down
    docker-compose pull
    docker-compose up -d
    docker exec -it kiwi_web /Kiwi/manage.py migrate

Refer to
`our documentation <https://kiwitcms.readthedocs.io/en/latest/installing_docker.html#upgrading>`_
for more details!

Happy testing!

---

If you like what we're doing and how Kiwi TCMS supports various communities
please help us!

- `Give ⭐ on GitHub <https://github.com/kiwitcms/Kiwi/stargazers>`_;
- `Donate via Open Collective <https://opencollective.com/kiwitcms/donate>`_ as low as 1 EUR;
- `Join our newsletter <https://kiwitcms.us17.list-manage.com/subscribe/post?u=9b57a21155a3b7c655ae8f922&id=c970a37581>`_
  and follow all project news;
- `Become a contributor <https://kiwitcms.readthedocs.io/en/latest/contribution.html>`_
  and an awesome open source hacker;
- `Become a customer </#subscriptions>`_ and help us sustain development
