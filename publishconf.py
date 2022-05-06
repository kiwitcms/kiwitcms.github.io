#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

# This file is only used if you use `make publish` or
# explicitly specify it as your config file.

import os
import sys
sys.path.append(os.curdir)
from pelicanconf import *

# disable b/c we want to serve both via kiwitcms.org and kiwitcms.eu
#SITEURL = 'https://kiwitcms.org'
# will only be used for twitter & og images
_SITEURL = 'https://kiwitcms.org'
RELATIVE_URLS = False

FEED_ALL_ATOM = 'feeds/all.atom.xml'
CATEGORY_FEED_ATOM = 'feeds/%s.atom.xml'

DELETE_OUTPUT_DIRECTORY = True

# Following items are often useful when publishing

DISQUS_SITENAME = 'kiwitcms'
GOOGLE_ANALYTICS = "G-SJWW55DFKC"
ADDTHIS_PUBID = "ra-5a8aeaec2954eb1b"
