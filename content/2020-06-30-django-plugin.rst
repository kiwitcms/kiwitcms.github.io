Django plugin for Kiwi TCMS
###########################

:headline: initial release
:date: 2020-06-30 12:47
:comments: true
:tags: releases


We're happy to announce the initial release of
`kiwitcms-django-plugin <https://github.com/kiwitcms/django-plugin>`_!
This package allows you execute your Django test suite and report the
results into Kiwi TCMS!
This plugin has been developed by contributor Bryan Mutai as part of our
`open source bounty program <{tag}bounty-program>`_.


To install::

    pip install kiwitcms-django-plugin


and then in your ``settings.py`` specify::

    TEST_RUNNER = 'tcms_django_plugin.TestRunner'


This plugin needs the ``~/.tcms.conf`` configuration file::

    [tcms]
    url = https://tcms.server/xml-rpc/
    username = your-username
    password = your-password


Product information and how to report can be controlled via environment variables
which are documented
`here <https://kiwitcms.readthedocs.io/en/latest/plugins/automation-frameworks.html#plugin-configuration>`_.
Example results from the plugin's own test suite are reported in
`TP-296 <https://tcms.kiwitcms.org/plan/296/>`_!

Happy testing!
