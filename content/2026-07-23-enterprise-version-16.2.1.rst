Kiwi TCMS Enterprise 16.2.1
###########################

:headline: fixes OAuth login redirects
:date: 2026-07-23 15:35
:comments: false
:tags: releases


Dear testers, we're happy to announce Kiwi TCMS Enterprise version 16.2.1-mt!

**IMPORTANT:**

This is a minor version release which fixes an OAuth login redirect issue.


Changes since Kiwi TCMS Enterprise v16.2-mt
-------------------------------------------

- Based on Kiwi TCMS v16.2
- Revert social-auth-app-django back to 5.9.0. Fixes
  `Issue #4466 <https://github.com/kiwitcms/Kiwi/issues/4466>`_
- Update kiwitcms-tenants from 4.7.0 to 4.7.1


Private container images
------------------------

    ::

        hub.kiwitcms.eu/kiwitcms/enterprise       16.2.1-mt (aarch64)     fcc6005e3df7    23 Jul 2026     915MB
        hub.kiwitcms.eu/kiwitcms/enterprise       16.2.1-mt (x86_64)      878c666eabec    23 Jul 2026     893MB


**IMPORTANT:** version tagged, multi-arch and Enterprise
`container images <{filename}pages/containers.markdown>`_ are available only to
`subscribers </#subscriptions>`_!


How to upgrade
---------------

Follow the
`Upgrading instructions <https://kiwitcms.readthedocs.io/en/latest/installing_docker.html#upgrading-instructions>`_
from our documentation.


Happy testing!

---

If you like what we're doing and how Kiwi TCMS supports various communities
please help us grow!

- `Give ⭐ on GitHub <https://github.com/kiwitcms/Kiwi/stargazers>`_;
- `Join our newsletter <https://kiwitcms.us17.list-manage.com/subscribe?u=9b57a21155a3b7c655ae8f922&id=c970a37581>`_
  and follow all news;
- `Become a subscriber </#subscriptions>`_ and help us sustain development
