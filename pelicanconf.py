#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'Kiwi TCMS Team'
SITENAME = 'Kiwi TCMS'
SITEURL = ''

PATH = 'content'

INDEX_SAVE_AS = 'blog/index.html'

ARTICLE_URL = 'blog/{author}/{date:%Y}/{date:%m}/{date:%d}/{slug}/'
ARTICLE_SAVE_AS = ARTICLE_URL + 'index.html'

TAG_URL = 'blog/tags/{slug}/'
TAG_SAVE_AS = TAG_URL + 'index.html'
TAGS_SAVE_AS = 'blog/tags/index.html'

ARCHIVES_SAVE_AS = 'blog/archives/index.html'

AUTHORS_SAVE_AS = 'blog/authors/index.html'
AUTHOR_URL = 'blog/{slug}/'
AUTHOR_SAVE_AS  = AUTHOR_URL + 'index.html'
AUTHOR_SUBSTITUTIONS = [
    ('Alexander Todorov', 'atodorov'),
]

CATEGORIES_SAVE_AS = ''
CATEGORY_SAVE_AS = ''

STATIC_PATHS = ['google/google8b349b847d57319a.html', 'CNAME', 'images/', 'scripts/']
EXTRA_PATH_METADATA = {
    'google/google8b349b847d57319a.html': {'path': 'google8b349b847d57319a.html'},
}
ARTICLE_EXCLUDES = PAGE_EXCLUDES = ['google']


THEME = 'theme/'

TIMEZONE = 'Europe/Sofia'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('twitter', 'https://twitter.com/KiwiTCMS'),
          ('github', 'https://github.com/kiwitcms'),)

DEFAULT_PAGINATION = 20

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
