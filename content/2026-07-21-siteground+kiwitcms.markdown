Title: SiteGround uses Kiwi TCMS as central repository of testing knowledge
Headline: for engineers, various testing tools, and AI-assisted workflows
date: 2026-07-21 19:30
comments: true
og_image: images/customers/siteground+kiwitcms.png
twitter_image: images/customers/siteground+kiwitcms.png
tags: community


!["SiteGround + Kiwi TCMS logos"](/images/customers/siteground+kiwitcms.png "SiteGround + Kiwi TCMS logos")


SiteGround is a technology company founded in 2004 that helps individuals,
entrepreneurs, and businesses build and grow their online presence.
Our goal is to provide customers with the tools they need to create, manage, and grow their online businesses from a single platform.

Over the years, SiteGround has built a strong engineering culture focused on
performance, reliability, innovation, and customer experience.
This continuous focus on technology and quality has helped us support millions of websites and businesses worldwide.


### Tell us more about SiteGround's product lines?

SiteGround has evolved far beyond traditional web hosting.
Our platform includes web hosting, managed WordPress hosting, cloud infrastructure,
Site Tools, website-building solutions, ecommerce platforms, professional email services,
email marketing products, and AI-powered solutions.
These products serve a wide range of users, from individual creators and small businesses to agencies and larger organizations.

From a technical perspective, our products are built using a diverse technology stack
that includes PHP, Python, Go, TypeScript, React, containerized environments, and cloud technologies.


### How about SiteGround's relation to open source?

Open source has always been an important part of SiteGround's engineering culture.
Many of the technologies that power our products are built on open source foundations,
and we actively support the open source community through sponsorships, community involvement,
and contributions to projects that help power the modern web.

We strongly believe that open source software promotes innovation, transparency, collaboration
and accessibility. We are also strong supporters of the WordPress ecosystem.

One of the advantages of using open source software is the ability to collaborate directly with maintainers,
contribute improvements, and tailor solutions to real-world needs.

> An improvement from SiteGround's Martin Bodurov has already been merged into Kiwi TCMS.
>
> See [PR #3905](https://github.com/kiwitcms/Kiwi/pull/3905) for more details.

### What makes testing at SiteGround challenging?

One of the biggest challenges is the breadth and diversity of our product portfolio.
Our teams test everything from hosting infrastructure and website management tools to
ecommerce solutions, email marketing platforms, and AI-powered products.

These products are built using different technologies and often rely on complex integrations
and shared infrastructure. A change in one area can potentially affect multiple systems,
which makes regression testing, coverage visibility, and traceability especially important.

Another challenge is balancing the speed of delivery with the level of quality and reliability
our customers expect. As our platform continues to grow, maintaining confidence in releases requires
a combination of structured testing practices, automation, and close collaboration between
engineering and QA teams.


### How do teams at SiteGround approach testing?

Testing starts with understanding the requirements and acceptance criteria for a feature.
Before execution begins, we define a lightweight test plan that outlines the areas we want to validate,
potential risks and the overall testing scope.

During testing, we maintain testing notes and a testing journal where we document findings, observations
and scenarios that deserve additional investigation. Both the test plan and the testing journal go
through a review process, helping us share knowledge, improve coverage, and ensure consistency across the team.
The approach combines structured validation with exploratory testing techniques,
allowing us to adapt as we learn more about the feature.

Detailed test scenarios are created and maintained in Kiwi TCMS. These scenarios serve both as
validation artifacts and also as long-term documentation and a knowledge base for the organization.
As features mature, many of these scenarios become candidates for our Playwright automation.

Automation plays a central role in our testing strategy.
We maintain extensive automated coverage across different layers of the testing pyramid,
including unit, integration, API, end-to-end, visual, accessibility, and performance-related testing.
Automated regression suites are continuously executed through our CI/CD pipelines,
helping teams identify issues early and maintain confidence in every change.

The combination of structured manual testing, peer reviews, automation,
and continuous regression automation execution allows us to maintain quality while supporting a fast development cycle.


### What other technologies does testing at SiteGround involve?

Testing at SiteGround relies on a diverse ecosystem of tools that support automation,
reporting, traceability, and continuous delivery. Our end-to-end automation is primarily
built with Playwright, while reporting and execution visibility are provided through
Allure Report and our CI/CD pipelines. We also maintain dedicated checks for visual regressions,
accessibility validation, and website quality metrics using tools such as Lighthouse.

To support fast feedback cycles, our automation infrastructure is optimized for containerized
execution on Google Cloud Platform, allowing us to execute large regression suites efficiently and at scale.


### Where does Kiwi TCMS fit into SiteGround's overall testing infrastructure?

Kiwi TCMS serves as the central repository for testing knowledge and traceability within our organization.
While our automation execution, reporting, and CI/CD processes are handled by other tools,
Kiwi TCMS acts as the place where testing knowledge is documented, maintained, and shared across teams.

It stores our testing scenarios, helps us understand what has already been automated,
and provides visibility into overall test coverage. By maintaining a clear relationship between manual test design
and automated validation, it helps us ensure consistency as our products and automation suites evolve.

Kiwi TCMS integrates into our broader testing ecosystem and it is the source of truth for testing knowledge.
It provides traceability between requirements, documented scenarios, and automated validation,
while also serving as a valuable source of context for engineers and AI-assisted development workflows.


### Why did you decide to use Kiwi TCMS?

Before selecting Kiwi TCMS, we evaluated both commercial and open source test management solutions.
While many products offered a wide range of features, we were looking for a solution that was flexible,
practical, and aligned with the way our teams work.

Kiwi TCMS stood out because it provides the core functionality we need without unnecessary complexity.
Rather than focusing on heavily marketed features that we would rarely use,
it offers a clean and efficient approach to test management, traceability, and knowledge sharing.

Its open source nature was another important factor. We value the flexibility that open source software provides,
whether it's adapting workflows, building integrations, or contributing improvements back to the project.
This gives us confidence that the tool can evolve together with our testing needs.

### Tell us how you've integrated Kiwi TCMS with Playwright and Allure Report

One of our goals has been to maintain strong traceability between documented test scenarios and automated validation.
The scenarios stored in Kiwi TCMS often serve as the foundation for our Playwright automation.
To preserve this connection, we include Kiwi TCMS test case identifiers in the Allure Report metadata
of our automated tests. This provides a consistent mapping between documented scenarios and automated coverage,
making it easier to understand which tests validate which requirements and features.

Having this relationship available directly in the test metadata helps us identify coverage gaps,
keep documentation aligned with implementation, and navigate easily between automated tests and their corresponding
Kiwi TCMS scenarios.

Over time, we have also built custom integrations around this model.
One example is a custom Playwright reporter that can read Kiwi TCMS identifiers from the Allure Report metadata
and correlate automated execution results with the corresponding test cases in Kiwi TCMS.
The exact implementation continues to evolve, but the primary objective remains the same:
maintaining a clear connection between test design, automation, and execution results.


### Tell us more about your internal "Kiwi TCMS API Client" script

The internal "Kiwi TCMS API Client" started as a simple wrapper around the well-structured Kiwi TCMS API.
Initially, it was created to support integrations between our automation ecosystem and Kiwi TCMS,
helping us automate parts of the test result synchronization process and reduce manual effort.

Over time, its role evolved beyond automation integrations.
Because Kiwi TCMS serves as our central repository of testing knowledge,
this API client became a convenient way to expose that information to other tools and workflows.

More recently, we have also used it as part of the tooling that supports AI-assisted development and testing.
By giving AI tools controlled access to test scenarios and testing knowledge stored in Kiwi TCMS,
we can provide better context when generating test cases, automation code, or other testing-related artifacts.

This internal client remains intentionally lightweight, focusing on simplifying access to Kiwi TCMS data
and enabling integrations without requiring every other tool to interact directly with the API.


### Tell us how does using AI in testing fit in relation to Kiwi TCMS?

Yes, AI has become an important part of our daily engineering and testing workflows.
We use tools such as Codex, Claude Code, and Cline to assist with a variety of tasks,
including test case generation, Playwright automation development, code reviews, documentation,
technical research, and day-to-day development tasks. These tools help us accelerate routine work
and allow engineers and testers to focus more on quality strategy, risk analysis, and problem solving.

Kiwi TCMS plays an important role in this process because it serves as our central repository of testing knowledge.
The scenarios and documentation stored there provide valuable context for both engineers and AI-assisted workflows,
helping ensure that generated test assets remain aligned with documented requirements, expected behavior, and existing coverage.

For example, when working on automated tests, AI tools can help us generate or refine Playwright implementations
based on the scenarios stored in Kiwi TCMS. Having access to well-structured testing knowledge
significantly improves the quality and consistency of the generated output.

Rather than treating AI as a replacement for testing expertise, we see it as a force multiplier.
Combining AI-assisted development with well-maintained testing knowledge in Kiwi TCMS allows us to
work more efficiently while maintaining consistency and quality across both manual and automated testing efforts.


---

If you like what we're doing please help us grow and sustain development!

- [Give ⭐ on GitHub](https://github.com/kiwitcms/Kiwi/stargazers);
- [Join our newsletter](https://kiwitcms.us17.list-manage.com/subscribe?u=9b57a21155a3b7c655ae8f922&id=c970a37581)
  and follow all news;
- [Become a contributor](https://kiwitcms.readthedocs.io/en/latest/contribution.html) and an awesome open source hacker;
- [Become a subscriber](/#subscriptions) and help us sustain development
