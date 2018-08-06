Title: How to override templates for Kiwi TCMS
date: 2018-08-06 11:40
comments: true
og_image: images/customization.png
twitter_image: images/customization.png
author: Alexander Todorov
tags: customization


This is the first publication in our customization series. It will show you
how to override any template used by Kiwi TCMS. As an example we will override
the email template that is used when registering new account. By default the
email text looks like this:

        Welcome {{ user }},
        thank you for signing up for an {{ site_domain }} account!
        
        To activate your account, click this link:
        {{ confirm_url }}



<https://demo.kiwitcms.org> runs a custom Docker image based on
`kiwitcms/kiwi`. For this image the confirmation email looks like this

        Welcome {{ user }},
        thank you for signing up for our Kiwi TCMS demo!
        
        To activate your account, click this link:
        {{ confirm_url }}
        
        GDPR no longer allows us to automatically subscribe you to
        our newsletter. If you wish to keep in touch and receive emails
        with news and updates around Kiwi TCMS please subscribe at:
        https://kiwitcms.us17.list-manage.com/subscribe/post?u=9b57a21155a3b7c655ae8f922&id=c970a37581
        
        --
        Happy testing!
        The Kiwi TCMS team
        http://kiwitcms.org


The file that we want to override is `tcms/templates/email/confirm_registration.txt`.

Create a local directory (git repository) which will hold customization configuration
and create a file named `templates.d/email/confirm_registration.txt` with your text!

Next you want to make this file available inside your docker image so your `Dockerfile`
should look like this:

        FROM kiwitcms/kiwi
        
        COPY ./templates.d/ /venv/lib64/python3.6/site-packages/tcms/overridden_templates/
        COPY local_settings.py /venv/lib64/python3.6/site-packages/tcms/settings/

where `local_settings.py` contains

        import os
        from django.conf import settings
        
        settings.TEMPLATES[0]['DIRS'].insert(0, os.path.join(settings.TCMS_ROOT_PATH, 'overridden_templates'))


The following code states *instruct Django to look into `overridden_templates` first and
use any templates it finds there; also make my files available in that specific location
inside the docker image*.

This approach can be used for all templates that you wish to override. Take into
account that file names must match (Django searches templates by directory path).
Now build your customized Docker image and use that for deployment!


Happy testing!
