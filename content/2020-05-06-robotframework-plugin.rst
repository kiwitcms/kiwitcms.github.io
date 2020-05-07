Robot Framework plugin for Kiwi TCMS
####################################

:headline: v1.0.0 - initial release
:date: 2020-05-06 11:57
:comments: true
:tags: releases


We're happy to announce the initial release of
`kiwitcms-robotframework-plugin <https://github.com/kiwitcms/robotframework-plugin>`_!
This package allows you execute your Robot Framework test suite and report the
results into Kiwi TCMS!
This plugin is the brain child of our Luca Valentini and Aniello Barletta and has its
roots in the
`Robot Framework Milano user-group <https://www.meetup.com/Robot-Framework-Milano/events/269468758/>`_.


To install::

    pip install kiwitcms-robotframework-plugin


and then make use of it like so::

    robot --listener zealand.listener.KiwiTCMS


The plugin needs the ``~/.tcms.conf`` configuration file::

    [tcms]
    url = https://tcms.server/xml-rpc/
    username = your-username
    password = your-password


and you can also specify the ``${plan_id}``, ``${product}`` and ``${build_user_email}`` variables
in your .robot files. If any of these are missing it will attempt to discover
the necessary information from your environment. The exact behavior is documented
`here <https://kiwitcms.readthedocs.io/en/latest/plugins/automation-frameworks.html#plugin-configuration>`_.

This plugin uses the upstream
`robotframework/WebDemo <https://github.com/robotframework/WebDemo>`_ test suite
with ``SeleniumLibrary`` in a combination with a downstream test with the
``OperatingSystem`` library. The results are reported in
`TP-290 <https://tcms.kiwitcms.org/plan/290/>`_. For more information checkout our
`package repository <https://github.com/kiwitcms/robotframework-plugin>`_ on GitHub!

Happy testing!
