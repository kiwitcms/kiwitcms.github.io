Title: AMI transitions to Kiwi TCMS Managed Hosting
Headline: and replaces legacy homegrown test management system
date: 2025-05-27 09:30
comments: true
og_image: images/customers/ami+kiwitcms.png
twitter_image: images/customers/ami+kiwitcms.png
tags: community


!["AMI + Kiwi TCMS logos"](/images/customers/ami+kiwitcms.png "AMI + Kiwi TCMS logos")

[AMI](https://www.ami.com), is an international company,
reimagining firmware for modern computing, providing secure, manageable solutions
across on-premises, cloud, and edge platforms. Its technology and support drive
innovation and lasting partnerships with top tech brands.


### Tell us more about AMI's product lines

AMI delivers firmware and management solutions for servers, data centers,
and embedded systems. Key products include:

- **Aptio V®**: A next-gen UEFI/BIOS solution enabling dynamic processor and peripheral
  management for Cloud, Edge, and IoT environments.
- **MegaRAC®**: Advanced BMC solutions like SP-X and OneTree for remote, OS-independent
  server management, including power control, KVM redirection, and virtual
  media.
- **TektagonTM**: A Platform Root of Trust ensuring secure and validated firmware boot
  processes.
- **AMI® Data Center Manager (DCM)**: Software for managing multi-vendor data centers,
  offering insights on health, power, thermal performance, and sustainability metrics to
  optimize operations and efficiency.

AMI develops products at all levels of the technology hierarchy, starting with low level firmware
to cloud based applications. For boot firmware, it's mostly assembly and C.
For manageability firmware, it's a combination of C, C++, Linux Shell scripting.
Our products have web interfaces so the HTML/CSS/JavaScript stack is also very common.
Python is extensively used as the backend language of choice for cloud applications.


### How about AMI's relation to open source

AMI has forged a robust partnership with the [Open Compute Project](https://www.opencompute.org/),
driving innovation and collaboration in open source firmware solutions. As one of the key proponents of
open source technologies in this space, AMI integrates
[EDK2](https://github.com/tianocore/edk2) and embedded Linux into firmware solutions.
We are a major sponsor of the Open Compute Project and a key contributor.


### What makes testing at AMI challenging

At AMI, the Test team plays a pivotal role in ensuring the reliability and excellence of our
product lines. Given the dynamic nature of our projects, the team frequently transitions
between tasks to accommodate multiple ongoing initiatives. This adaptability is crucial in
maintaining rigorous standards across diverse firmware and management solutions.

Additionally, the Test team is committed to delivering valuable insights by analyzing
quality trends and producing detailed reports. These analyses equip leadership with actionable
data, fostering informed decision-making and continuous improvement across all
development efforts.

*Constantly changing priorities combined with the need to provide accurate
reporting make testing at AMI challenging!*

Since we are a black box/acceptance test group, our System Under Test are actual hardware platforms.
And since we do boot firmware and manageability firmware solutions, we have to test on
early revision hardware, which is unstable. This makes test automation challenging.
And even for automation, we have to rely on hardware tooling like IP controlled AC power strips,
firmware programming devices and single board computers like Raspberry Pi for controlling various
aspects of the system under test. We also support multiple hardware architectures, 
which increases the breadth of what we need to test.


### How do teams at AMI approach testing? Can you walk us through the process

Our black-box user acceptance testing (UAT) team ensures end-user expectations align
with product functionality, performance, and usability. Collaborating with developers and
studying standards and specifications, we create detailed test scenarios covering positive,
negative, performance, and usability aspects.

Using a hybrid agile-like model, we test features as they're ready and conduct a final
integration cycle to assess system readiness. Given that we work with firmware and
embedded solutions, achieving 100% test automation is a significant challenge. As a
result, our approach includes a considerable amount of manual testing to ensure thorough
coverage and reliability. This process ensures seamless component interactions, uncovers
overlooked issues, and delivers actionable insights so we can ship
high-quality systems that exceed user expectations.

AMI is committed to upholding rigorous standards in testing, including a strict test exit
criterion that mandates zero high severity bugs before product release. This ensures that all
solutions delivered to clients meet the highest levels of reliability and performance. Our
testing methodologies are designed to identify and resolve any critical issues at an early
stage, preventing them from affecting the functionality of end products.


### What other technologies does testing at AMI involve

At AMI, testing leverages tools like Python for automation scripting and Robot Framework
for test case creation and execution.
Previously, AMI utilized a custom-built test management system to organize test cases and
generate actionable reports.

AMI uses GitLab CI for triggering test jobs.
We have CI workflows that execute daily and weekly runs of our automated tests.
We would like to get to a point where our systems can
analyse what features a code change impacts and then it selects the test cases needed to
execute to test that changeset.


### Why did you decide to use Kiwi TCMS

The legacy homegrown tool faced significant limitations as it struggled to keep up with the
scaling demands of AMI's growing testing infrastructure.
It was slow and could no longer support our evolving need for real-time reporting,
lacked flexibility, and was unable to accommodate new features, primarily due to the absence
of dedicated personnel to maintain and upgrade it. These constraints led the QA team to seek modern
solutions capable of addressing their evolving requirements effectively.

We conducted extensive research into alternative solutions, but
many tools we evaluated were either overly complex or prohibitively expensive. Kiwi TCMS
emerged as the perfect choice, seamlessly aligning with our requirements for affordability
and functionality.


### Where does Kiwi TCMS fit into AMI's overall testing infrastructure

Kiwi TCMS has become a mission-critical tool for us, drastically
reducing latency while maintaining a lightweight and responsive design. Its versatility
ensures widespread use across AMI's testing infrastructure, benefiting not just testers but
also project managers and developers. The integration with JIRA further enhances our
workflow efficiency.

Additionally, the Kiwi TCMS API and the [tcms-api](https://github.com/kiwitcms/tcms-api/)
client-side library are a great foundation which
enables us to create custom integrations, allowing
the AMI team to develop tailored workflows that fit their unique requirements.

For example, we have built a custom web application which provides
data visualizations and reporting capabilities that are tailored to meet the needs of our
stakeholders and customers. These custom solutions empower the QA team to provide actionable insights
into testing quality, enhancing transparency and fostering trust across all levels of
collaboration within our organization.

---

In the words of *Utpal Patel, Senior Director, Global Test Engineering*:

> After a highly successful two-year run with Kiwi TCMS, we have transitioned
> to a *Managed Hosting* subscription to better accommodate the rapid growth at AMI. This move
> underscores our commitment to leveraging Kiwi TCMS as a cornerstone of our testing
> infrastructure. We're excited about collaborating closely with the Kiwi TCMS development
> team to refine it further, introducing features and capabilities that not only
> strengthen our own workflows but also contribute valuable enhancements for the broader
> testing community.


---

If you like what we're doing please help us grow and sustain development!

- [Give ⭐ on GitHub](https://github.com/kiwitcms/Kiwi/stargazers);
- [Give 👍 on GitLab](https://gitlab.com/gitlab-org/gitlab/-/issues/334558);
- [Join our newsletter](https://kiwitcms.us17.list-manage.com/subscribe/post?u=9b57a21155a3b7c655ae8f922&id=c970a37581)
  and follow all news;
- [Become a contributor](https://kiwitcms.readthedocs.io/en/latest/contribution.html) and an awesome open source hacker;
- [Become a subscriber](/#subscriptions) and help us sustain development
