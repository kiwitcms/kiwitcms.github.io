Title: Customize the information used for 1-click bug reports
date: 2020-07-11 14:20
comments: true
og_image: images/customization.png
twitter_image: images/customization.png
author: Alexander Todorov
tags: customization

Kiwi TCMS integration with 3rd party bug trackers supports the
*1-click bug report* feature.
However you may want to change how the initial information is structured or
even what exactly is written in the initial comment. This article
shows how to do this.

The default text used for 1-click bug reports gets compiled based on
information present in the TestExecution - Product, Version, TestCase.text,
etc. This is encapsulated in the
`tcms.issuetracker.base.IssueTrackerType._report_comment()` method.
You may extend the existing bug tracker integration code
with your own customizations. In this example I've extended the
`KiwiTCMS` bug tracker implementation but you can provide your own from
scratch

    :::python
    # filename: mymodule.py
    class ExtendedBugTracker(KiwiTCMS):
        def _report_comment(self, execution):
            comment = super()._report_comment(execution)

            comment += "----- ADDITIONAL INFORMATION -----\n\n"
            #
            # fetch more info from other sources
            #
            comment += "----- END ADDITIONAL INFORMATION -----\n"
            return comment

Then override the `EXTERNAL_BUG_TRACKERS` setting to include your customizations:

    :::python
    EXTERNAL_BUG_TRACKERS.append('mymodule.ExtendedBugTracker')

and change the bug tracker type, via https://tcms.example.com/admin/testcases/bugsystem/,
to *mymodule.ExtendedBugTracker*.

**IMPORTANT**

- Information how to change settings can be found
  [here](https://kiwitcms.readthedocs.io/en/latest/installing_docker.html#customization)
- `mymodule.py` may live anywhere on the filesystem but Python must be
  able to import it
- It is best to bundle all of your customizations into a Python package and
  `pip3 install` it into your customized docker image
- API documentation for bug tracker integration can be found
  [here](https://kiwitcms.readthedocs.io/en/latest/modules/tcms.issuetracker.html)
- Rebuilding the docker image is outside the scope of this article. Have a look
  at this
  [Dockerfile](https://github.com/MrSenko/kiwitcms-enterprise/blob/master/Dockerfile)
  for inspiration


Happy testing!
