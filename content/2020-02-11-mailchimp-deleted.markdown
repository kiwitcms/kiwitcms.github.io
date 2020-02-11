Title: I deleted our newsletter from Mailchimp ! Please re-subscribe
Headline: and no, we didn't have backup
author: Alexander Todorov
date: 2020-02-11 12:25
comments: true

Hello testers,
I have to admit that I made a rookie mistake and deleted the entire email database
for the Kiwi TCMS
[newsletter](https://kiwitcms.us17.list-manage.com/subscribe/post?u=9b57a21155a3b7c655ae8f922&id=c970a37581)!
And of course we didn't have a backup of this database :-(. Please
[re-subscribe here](https://kiwitcms.us17.list-manage.com/subscribe/post?u=9b57a21155a3b7c655ae8f922&id=c970a37581)
and read below if you are interested to know what happened.


Last week, while exploring how to cancel active subscriptions for our
deprecated GitHub Marketplace listing I found there is no way to cancel
those programatically. So I've compiled a list of email addresses and decided
to send subscribers an email asking them to cancel their subscriptions.

For this purpose I decided to import the contacts into Mailchimp because
it gives you a better interface to design the actual message, include images
in the message body, preview and test the message before it is sent! The import
of addresses went fine, new addresses were tagged appropriately to separate them
from the rest of the newsletter audience **but** they were not subscribed to
receive emails automatically.

I selected "non-subscribed" option when importing as a second barrier to
accidentally emailing people who do not want to receive regular news from us!
However it turned out Mailchimp can't send messages to non-subscribed addresses!
Maybe that's part of their attempts to be GDPR compliant.

So I decided to delete the freshly imported addresses, import them again
and this time tag + subscribe them during the import! When selecting the addresses
for deletion I am 99% confident I did filter them by tag first and then selected
**DELETE**! And the entire contacts list was gone!

I've also contacted Mailchimp immediately to ask whether or not the addresses
can be restored. Unfortunately they are trying to be super GDPR compliant and
claim they don't have this information into their system anymore.
And in this particular case we've been relying on the vendor to keep backups
on their end so didn't even think about trying to backup this database!

For users who have accounts at
[https://public.tenant.kiwitcms.org](https://public.tenant.kiwitcms.org)
we do have
their email addresses but we're not going to automatically re-subscribe them.
We've stopped auto-subscribing
[2 years ago]({filename}2018-06-24-version-4.2.markdown) and also there's
no way of telling which addresses were on the list in the first hand.


Please
[re-subscribe here](https://kiwitcms.us17.list-manage.com/subscribe/post?u=9b57a21155a3b7c655ae8f922&id=c970a37581)
and I promise we're going to start backing up the newsletter database as well.

Thank you!
