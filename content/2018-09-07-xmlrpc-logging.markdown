Title: How to add API logging for Kiwi TCMS
date: 2018-09-07 22:00
comments: true
og_image: images/customization.png
twitter_image: images/customization.png
author: Alexander Todorov
tags: customization


In this blog post I will show more ways to customize Kiwi TCMS by adding
logging capabilities to the API backend. Indeed this is a feature that
our team deemed not required for upstream and was removed in
[PR #436](https://github.com/kiwitcms/Kiwi/pull/436).

Start by creating the following directory structure:

        api_logging/
            __init__.py
            handlers.py
            models.py

This is a small Django application that will log every call to the API backend.
Each file looks like this:

    :::python
        # models.py contains DB schema for your new table
        from django.db import models
        from django.conf import settings
        
        class ApiCallLog(models.Model):
            executed_at = models.DateTimeField(auto_now_add=True)
            user = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, blank=True,
                                     on_delete=models.CASCADE)
            method = models.CharField(max_length=255)
            args = models.TextField(blank=True)
        
            def __str__(self):
                return "%s: %s" % (self.user, self.method)

Then

    :::python
        # handlers.py overrides the RPC handlers coming from django-modernrpc
        from modernrpc import handlers
        
        from django.conf import settings
        from django.contrib.auth import get_user_model
        
        from .models import ApiCallLog
        
        def log_call(request, method_name, args):
            """ Log an RPC call to the database or stdout in DEBUG mode. """
            request_user = request.user
            if not request_user.is_authenticated:
                # create an anonymous user object for logging purposes
                request_user, _ = get_user_model().objects.get_or_create(
                    username='Anonymous',
                    is_active=False)
        
            if method_name is None:
                method_name = '--- method_name missing ---'
        
            if settings.DEBUG:
                print('API call:: user: {0}, method: {1}, args: {2}'.format(
                    request_user,
                    method_name,
                    args))
            else:
                ApiCallLog.objects.create(
                    user=request_user,
                    method=method_name,
                    args=str(args))
        
        class XMLRPCHandler(handlers.XMLRPCHandler):
            def process_request(self):
                encoding = self.request.encoding or 'utf-8'
                data = self.request.body.decode(encoding)
                params, method_name = self.loads(data)
        
                log_call(self.request, method_name, params)
                return super().process_request()
        
        class JSONRPCHandler(handlers.JSONRPCHandler):
            def process_single_request(self, payload):
                method_name = payload.get('method', None)
                params = payload.get('params')
        
                log_call(self.request, method_name, params)
                return super().process_single_request(payload)


**NOTE:**
You will have to execute `./manage.py makemigrations api_logging` to create the
initial migration for Django. This could be easier if you place the above directory
into existing Django application or craft the migration file by hand!

The last thing you want to do is create a `local_settings.py` file which will override
Kiwi TCMS defaults:

    :::python
        # local_settings.py
        from django.conf import settings
        
        settings.INSTALLED_APPS += [
            'api_logging',
        ]
        
        MODERNRPC_HANDLERS = ['api_logging.handlers.XMLRPCHandler',
                              'api_logging.handlers.JSONRPCHandler']


Then place everything in `Dockerfile` like so:

    :::
        FROM kiwitcms/kiwi
        
        COPY ./api_logging/ /venv/lib64/python3.6/site-packages/api_logging/
        COPY local_settings.py /venv/lib64/python3.6/site-packages/tcms/settings/


Kiwi TCMS will import your `local_settings.py` and enable the logging application.
Now build your customized Docker image and use it for deployment!

Happy testing!
