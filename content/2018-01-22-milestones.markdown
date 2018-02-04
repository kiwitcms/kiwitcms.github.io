Title: Kiwi TCMS roadmap for 2018
Headline: cleaner code, improved UI/UX and more tests
date: 2018-01-22 12:10
comments: true
og_image: images/roadmap.jpg
twitter_image: images/roadmap.jpg

Hello everyone. As you know Kiwi TCMS has been around for a while and it has
gone through some big changes in the last year! It started as an abandoned
Django 1.6 project with broken test suite and is now currently running on the
latest Django 2.0.1 with Python 3.5! It is clearly a legacy code base!

We, the Kiwi TCMS team, have learned a lot more about the project and this
blog post describes our roadmap for 2018 in terms of technical work and community
engagement. The general technical direction is cleaner/simpler code,
improved UI/UX and more tests!


Make code easier to maintain
----------------------------

The current code is a bunch of very large modules and functions and classes
bundled together. It is also old and sometimes looks like spaghetti code.
[CodeClimate](https://codeclimate.com/github/kiwitcms/Kiwi) gives us a "D" rating
for maintainability with a 1 year estimated effort to fix that. There are 600+
code smells and 600+ duplications detected by CodeClimate. Our goal is to get this
number down to zero!


Use pylint and pylint-django
----------------------------

pylint is the standard static analyzer for Python and currently it reports over
4000 errors and warnings when executed against Kiwi TCMS. This is a huge number and
it needs to become zero! We've also identified interesting patterns that will
make it into pylint and pylint-django plugins!


Render HTML, return JSON
------------------------

The current state of affairs is a mix and match of everything. There are views that
render HTML, others which return pure JSON, other which return HTML encoded as JSON string
and probably everything in between. Views that render pages need to do just that
and views that are used with AJAX calls from the UI need to return pure JSON!
A lot of these are hiding in plain sight and will come to light when we start
overhauling the user interface.


Submit forms, post JSON, GET clean URLs
---------------------------------------

There are lots of forms in Kiwi TCMS. Sometimes they are submitted by the user and
other times they are serialized and POSTed by some JavaScript code. This isn't
very easy to understand plus this entire home-grown utility code doesn't bring
anything useful to the project. All of these need to be identified and cleaned up.
JavaScript code needs to send or consume JSON, nothing else!

There are also lots of places where Kiwi issues GET requests with a number of
query parameters. Our goal is to minimize these and where possible have the
parameters as part of the Django urls scheme, not as query strings.


API layer
---------

The current API module is a bit disorganized. API namespaces don't match the
names of the underlying DB models and the API client classes don't match any
of the other two! The way we pass parameters and what these parameters are
named should match between the client, the RPC method and the underlying model!

In earlier releases we've removed duplicate or similar RPC methods and we
think there are more of these that need our love.


Documentation
-------------

We've started producing documentation from doc-strings and most of the RPC
methods have such. However it is unformatted and barely readable, sometimes
even inaccurate. Previous releases made progress on this but there's a lot
more to cover.

All RPC methods should be documented first and then the rest of Kiwi's
internals to make development easier!


No vendored JavaScript libraries
--------------------------------

There are 11 vendored-in JavaScript files that we carry around in Kiwi TCMS.
Most notable are jQuery plus a few addons and Handlebars.js. To the extent possible
our goal is to use jQuery provided by Django or installed via NPM dependencies!


Less HTML templates with better organization
--------------------------------------------

There are over 100 HTML templates in Kiwi TCMS. There are also email and even
JavaScript templates. For example there are `get_cases.html` and `get_review_cases.html`
which are essentially the same. This is kind of also true for templates used in
new and edit views! Such templates should be unified!

Those JavaScript templates need to be totally gone!

All templates are stuffed together in a single directory and their names
are not very predictable. They need to be split per application and follow
some kind of naming convention.


Modern interface with Patternfly
--------------------------------

The UI already uses the Patternfly library for some of its widgets. Most notably
the main navigation header. Our goal is for the entire UI to be ported to Patternfly
by updating widgets HTML and CSS where needed.
This will also help clean things up a lot. At the same time we'll be rethinking how
information is organized on screen and how the person interacts with it! Usability
suggestions are very welcome!

This move will also help us get rid of the Handlebars dependency which is now
used for pop-up dialogs.


JavaScript updates and front-end testing
----------------------------------------

There's lots of JavaScript code on the front-end and honestly we don't quite know
what it does or how it is organized. There are also no tests on the front-end
whatsoever!

It is our goal for this to change with the intention to not overdo the JavaScript
part and keep things very minimal. At the moment we're thinking about vanilla jQuery
that will act as a proxy between the browser and the back-end!


Community efforts
------------------

A year ago hardly anybody knew what Kiwi TCMS was, the project didn't even have
this name, there was 1 active contributor and hardly any users! Now the community
has started to slowly revitalize, we're seeing some contributions from our
junior team members (more on this in another blog post) and also seeing
folks installing and using Kiwi TCMS and reporting interesting bugs and feature
requests around it!

For the upcoming year our goal is to seek active engagement with other open source
projects that could make use of Kiwi TCMS and work with them. Kudos to
openSUSE for being the first
[to propose such integration](https://github.com/openSUSE/mentoring/issues/95)!
We're also planning couple of appearances at a few conferences but there's
nothing confirmed yet.

Every other contribution in terms of bug reports, new users and feature requests
is of course welcome but we're very conscious of the fact that there's tons
of work to be done and the team is still very small!


Team wise we'd like to get the existing team members up to speed and tackle
the above tasks with priority. This will also help us introduce bug fixes
and new features more quickly!


Happy testing!
