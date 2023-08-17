Title: The University of Utah uses Kiwi TCMS
Headline: inside their Platform for Open Wireless Data-driven Experimental Research environment
date: 2023-08-16 19:13
comments: true
og_image: images/customers/university_of_utah+kiwitcms.png
twitter_image: images/customers/university_of_utah+kiwitcms.png
tags: community


!["University of Utah + Kiwi TCMS logos"](/images/customers/university_of_utah+kiwitcms.png "University of Utah + Kiwi TCMS logos")

The [University of Utah](https://www.utah.edu/) is a public research university
in Salt Lake City, USA. It is the flagship institution of the
Utah System of Higher Education and was established in 1850.

The University of Utah's
[School of Computing](https://www.cs.utah.edu/), founded as the Computer Science Department
in 1965, has a long and distinguished record of high impact research.
The university has provided large, automated testbeds since around the year 2000,
funded by the National Science Foundation.

The [Flux Research Group](https://www.flux.utah.edu/) conducts research in operating systems,
networking, security, and virtualization. The group consists of three faculty and over
two dozen research staff, graduate students, and undergrads.

[POWDER](https://www.powderwireless.net/)
(the Platform for Open Wireless Data-driven Experimental Research) is flexible infrastructure
enabling a wide range of software-defined experiments on the future of wireless networks.
POWDER supports software-programmable experimentation on 5G and beyond, massive MIMO, ORAN,
spectrum sharing and CBRS, RF monitoring,
and anything else that can be supported on software-defined radios.

In the words of David M. Johnson, research staff:

> The addition of Kiwi TCMS to our POWDER mobile wireless testbed helps to support
> the complex multi-system, end-to-end functional test and integration scenarios
> we see in the 5G/O-RAN/beyond mobile wireless space.
>
> We use Kiwi TCMS as part of an on-demand environment that POWDER provides to users
> that can help them automate testing using a workflow approach,
> from CI-triggered orchestration from scratch in our cloud-like environment,
> through resource configuration and running test suites,
> to finally collecting results into private instances of Kiwi TCMS.
>
> We use both the Stackstorm and Dagster workflow engines to execute our test and integration workflows.
> The [stackstorm-kiwitcms](https://gitlab.flux.utah.edu/powder-workflows/stackstorm-kiwitcms)
> library is a simple Stackstorm "integration pack"
> (Python source code in this case) that invokes and re-exports much of the core Kiwi TCMS XML-RPC API
> (with some minor sugar) into Stackstorm, so that each API function is exposed as a Stackstorm action
> (the fundamental unit of its workflows). This means that the workflows can orchestrate resources
> into test scenarios; configure the resources; create or instantiate Kiwi TCMS test runs/executions/metadata;
> execute tests; and push test results/status into Kiwi TCMS records, upload attachments, etc, for persistence.
>
> We use [a fork](https://gitlab.flux.utah.edu/powderrenewpublic/kiwi) of Kiwi TCMS right now
> so that we could upload attachments to test runs via the API.
> That was a trivial change which
> [made its way upstream](https://github.com/kiwitcms/Kiwi/commit/9344e2873a48da477ac565362689e4851c34214e)
> as part of Kiwi TCMS version 12.1.


---

If you like what we're doing and how Kiwi TCMS supports various communities
please help us!

- [Give ⭐ on GitHub](https://github.com/kiwitcms/Kiwi/stargazers);
- [Give 👍 on GitLab](https://gitlab.com/gitlab-org/gitlab/-/issues/334558);
- [Donate via Open Collective](https://opencollective.com/kiwitcms/donate) as low as 1 EUR;
- [Join our newsletter](https://kiwitcms.us17.list-manage.com/subscribe/post?u=9b57a21155a3b7c655ae8f922&id=c970a37581)
  and follow all project news;
- [Become a contributor](https://kiwitcms.readthedocs.io/en/latest/contribution.html) and an awesome open source hacker;
- [Become a customer](/#subscriptions) and help us grow
