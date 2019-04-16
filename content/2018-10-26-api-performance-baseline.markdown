Title: Kiwi TCMS API performance baseline
headline: 7.5 req/sec or 130 msec/req
date: 2018-10-26 16:47
comments: true
author: Alexander Todorov


A friend from Red Hat sent me an email asking about Kiwi TCMS performance so I did
an experiment to establish a baseline.
For API requests I got **7.5 req/sec or 130 msec/req** which is
1.5x [slower than GitHub](https://blog.github.com/2012-09-05-how-we-keep-github-fast/)!

I used `perf-script`
([gist here](https://gist.github.com/atodorov/f5aed028b6f254d97bcaf93453abe8d2))
to measure that. The script takes the first 250 test cases from our test suite
and on every execution creates a new TestPlan (1 API request), then creates
new test cases (250 requests), adds cases to test plan (250 requests),
creates new product build (1 API request), creates new TestRun (1 API request),
adds test cases to test run (250 requests) and finally updates the statuses
(250 requests).

A total of 1003 API requests are sent to Kiwi TCMS every time you start this script!
An example is available at [TR #567](https://public.tenant.kiwitcms.org/run/567/)!

On localhost, running the development server (`./manage.py runserver`) with an
SQLite database I got:

    :::
    $ time python perf-script
    
    real    2m6.450s
    user    0m1.069s
    sys     0m0.331s
    
    $ time python perf-script
    
    real    2m7.472s
    user    0m1.057s
    sys     0m0.342s
    
    $ time python perf-script
    
    real    2m9.368s
    user    0m1.072s
    sys     0m0.351s
    
    $ time python perf-script
    
    real    2m9.197s
    user    0m1.050s
    sys     0m0.353s

This measures at 120 msec/req or 7.85 req/sec!


[public.tenant.kiwitcms.org](https://public.tenant.kiwitcms.org/login/github/) is running on an
[AWS t2.micro](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html#burstable-performance-instances-hardware)
instance (via docker-compose) with the default `centos/mariadb` image!
No extra settings or changes. I used the same computer over a WiFi
connection and a pretty standard home-speed Internet connection. Times are:

    :::
    $ time python perf-script
    
    real    2m18.983s
    user    0m1.175s
    sys     0m0.095s
    
    $ time python perf-script
    
    real    2m25.937s
    user    0m1.156s
    sys     0m0.108s

    $ time python perf-script
    
    real    2m24.120s
    user    0m1.102s
    sys     0m0.098s
    
    $ time python perf-script
    
    real    2m21.521s
    user    0m1.154s
    sys     0m0.091s


This measures at 140 sec/req or 7.05 req/sec!


Note: since I am using Python 3.6 I had to modify the file
`/opt/rh/rh-python36/root/lib64/python3.6/ssl.py` to read:

    :::python
    # Used by http.client if no context is explicitly passed.
    _create_default_https_context = _create_unverified_context # this disables HTTPS cert validation

The issue has been reported in
[RHBZ #1643454](https://bugzilla.redhat.com/show_bug.cgi?id=1643454)


Happy testing!
