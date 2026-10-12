Title: Feature spotlight: TestPlan multi-clone & deep-clone
Headline: available in Kiwi TCMS v16.6
date: 2026-10-12 14:07
comments: true
og_image: images/features/testplan-cloning/banner.png
twitter_image: images/features/testplan-cloning/banner.png
tags: features


Cloning Test Plans just got an upgrade in **Kiwi TCMS v16.6**! Whether you want
to duplicate a single plan, a whole handful of them, or an entire nested tree, the new
cloning workflow keeps your clicks to a minimum.

Here are the 3 changes we shipped:


1. Clone names now carry the original ID
----------------------------------------

When you clone a Test Plan the suggested name now includes the **original ID**,
so the lineage of every copy is obvious at a glance:

!["Clone of TP-117 keeps the original ID in the name"](/images/features/testplan-cloning/single-clone-name-prefix.png "Clone of TP-117 keeps the original ID in the name")

The *Clone of TP-117:* prefix is highlighted above. Rename it if you like - but the default
now tells you exactly where the copy came from! This feature is intended for the human behind
the computer! Feel free to change the new name to whatever fits best in your case.


2. Multi-clone from Search Test Plans page
------------------------------------------

Need to duplicate a batch? The *Search Test Plans* page now displays a **checkbox column**
on the lefthand side and the **cloning button** has joined the buttons row in table header:

!["Checkbox column and clone button on Search Test Plans"](/images/features/testplan-cloning/multi-clone-search-page+menu.png "Checkbox column and clone button on Search Test Plans")

Selection is **explicit** - you tick exactly the records you want - and the clone page
displays all of them at the same time. Name, Product, Version, etc are individually
adjustable per row:

!["Cloning several Test Plans at once"](/images/features/testplan-cloning/multi-clone-clone-page.png "Cloning several Test Plans at once")

This functionality was built on top of contributions from
**Oskar Hurst, U.S. Army Corps of Engineers**. Thank you Oskar!


3. Deep clone an entire Test Plan tree
--------------------------------------

Parent/child relationships can now be preserved when cloning!
The cogs menu now offers the **Deep clone** item which
will clone the entire relationship structure **starting at the current Test Plan**:

!["Deep clone in the Test Plan cogs menu"](/images/features/testplan-cloning/deep-clone-start-page+menu.png "Deep clone in the Test Plan cogs menu")

The clone page then lays out the whole tree. Each clone keeps its ID-derived name and you
get **visual level indicators** so the hierarchy stays readable while you review it:

!["Deep cloning a nested Test Plan tree"](/images/features/testplan-cloning/deep-clone-clone-page.png "Deep cloning a nested Test Plan tree")

When deep cloning, the on/off button used to adjust the parent of individual Test Plans is
**disabled**. The structure is cloned as-is on purpose, so there is nothing to re-parent
while the tree is being copied!


Happy Testing!


---

If you like what we're doing and how Kiwi TCMS supports various communities
please help us!

- [Give ⭐ on GitHub](https://github.com/kiwitcms/Kiwi/stargazers);
- [Join our newsletter](https://kiwitcms.us17.list-manage.com/subscribe?u=9b57a21155a3b7c655ae8f922&id=c970a37581)
  and follow all project news;
- [Become a subscriber](/#subscriptions) and help us sustain development
- [Become a reseller]({filename}pages/partners.html) and help us serve your community
