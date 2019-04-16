Title: Test runner plugin specification
date: 2018-11-05 16:05
comments: true
author: Alexander Todorov


Happy Monday testers! Kiwi TCMS needs your help! We are looking for developers who
wish to create plugins for popular test runners that will record test results
in Kiwi TCMS! Initially we are looking for plugins for Python's unittest,
[Django](https://docs.djangoproject.com/en/2.1/topics/testing/advanced/#using-different-testing-frameworks)
and [JUnit](https://junit.org/junit4/plugins.html)!


What is a test runner?
----------------------

When working with automated testing you have several components:

* A test module (or test script), e.g. `test_models.py` which contains
  tests for your software;
* A test framework, e.g. Python nose, which provides the structure
  for test classes and methods and assert methods to use;
* A test runner, which knows how to discover your test scripts, load them,
  execute the testing scenarios inside of them and report the results.


Very often all of the components above live together inside the testing framework
but don't need to. For example the standard `unittest` module in Python
provides a test runner but there are also `nose` and `py.test` and Django provides
its own test runner that knows how to work with the database.


Workflow organization
---------------------

Once you agree to writing a plugin we are going to create a separate GitHub
repository where you will be granted write privileges making you an independent
contributor to the Kiwi TCMS project!


Design and architecture of the plugin is up to you, following the practices
established by the testing framework in question. You will also have to create
a test suite for your plugin based on the specification below.

You are expected to use
[public.tenant.kiwitcms.org](https://public.tenant.kiwitcms.org/login/github/) while working on the
plugin and afterwards. This is known as eating your own dog food!

For Python we provide the `tcms-api` module which already takes care of the
communications layer. For other languages you will have to create this layer or
depend on other open source libraries that provide a XML-RPC or JSON-RPC
client!

You can use
[this gist](https://gist.github.com/atodorov/f5aed028b6f254d97bcaf93453abe8d2)
for inspiration!


Behavior Specification
----------------------


*Please use the comments section to discuss unclear behavior and missing scenarios!*

        SUMMARY: Will use configuration file if it exists
        GIVEN: the file ~/.tcms.conf exists
        WHEN: plugin initializes
        THEN: the plugin will log an info message, read the file and
        THEN: configure TCMS_API_URL, TCMS_USERNAME, TCMS_PASSWORD
              variables with the respective values
        
        
        SUMMARY: Will use ENVIRONMENT if configuration file doesn't exist
        GIVEN: the file ~/.tcms.conf does not exists
        WHEN: plugin initializes
        THEN: the plugin will read configuration from environment and configure
              the following variables/class members:
              TCMS_API_URL, TCMS_USERNAME and TCMS_PASSWORD
        
        
        SUMMARY: Will exit if TCMS_API_URL not configured
        GIVEN: TCMS_API_URL variable is empty
        WHEN: plugin initializes
        THEN: log a warning message and exit
        AND: depending on the test runner framework set exist status 1
        
        
        SUMMARY: Will exit if TCMS_USERNAME not configured
        GIVEN: TCMS_USERNAME is empty
        WHEN: plugin initializes
        THEN: log a warning message and exit
        AND: depending on the test runner framework set exist status 1
        
        
        SUMMARY: Will exit if TCMS_PASSWORD not configured
        GIVEN: TCMS_PASSWORD is empty
        WHEN: plugin initializes
        THEN: log a warning message and exit
        AND: depending on the test runner framework set exist status 1
        
        
        SUMMARY: Will re-use existing TestPlan if configured
        GIVEN: TCMS_RUN_ID environment variable is not empty
        WHEN: plugin initializes
        THEN:  this will be the Current_TestRun record to which the plugin is
               going to add test execution results
        AND: Current_TestPlan document in which the plugin will
               search for test cases becomes Current_TestRun.plan
        
        
        SUMMARY: Will create new TestPlan & TestRun if TCMS_RUN_ID not configured
        GIVEN: TCMS_RUN_ID environment variable is empty
        THEN: plugin will create a new TestPlan in Kiwi TCMS with attributes:
            name='Automated test plan for %(product)'
            product='%(product)'
            product_version='%(version)'
            type='Unit'
        WHERE: %(product) is a placeholder for TCMS_PRODUCT==TRAVIS_REPO_SLUG==JOB_NAME
               %(version) is a placeholder for TCMS_PRODUCT_VERSION==TRAVIS_COMMIT==TRAVIS_PULL_REQUEST_SHA==GIT_COMMIT
        THEN: plugin will crate a new TestRun in Kiwi TCMS with attributes:
            summary='Automated test run ....'
            plan=Current TestPlan
            build='%(build)'
            manager=TCMS_USERNAME
        WHERE: %(build) is a placeholder for TCMS_BUILD==TRAVIS_BUILD_NUMBER==BUILD_NUMBER
        Environment variables are specified in:
        https://docs.travis-ci.com/user/environment-variables#default-environment-variables
        https://wiki.jenkins.io/display/JENKINS/Building+a+software+project#Buildingasoftwareproject-belowJenkinsSetEnvironmentVariables
        
        SUMMARY: Will not create duplicate Product, Version & Build if they already exist
        GIVEN: TCMS_RUN_ID is not configured
        AND: %(product) exists
        AND: %(version) exists
        AND: %(build) exists
        WHEN: plugin tries to auto-create TestPlan and TestRun
        THEN: plugin will re-use %(product), %(version) and %(build) from the database
        AND: not try to auto-create them
        
        
        SUMMARY: Will auto-create Product, Version & Build if they don't exist
        GIVEN: TCMS_RUN_ID is not configured
        AND: %(product) doesn't exist
        AND: %(version) doesn't exist
        AND: %(build) doesn't exist
        WHEN: plugin tries to auto-create TestPlan and TestRun
        THEN: %(product), %(version) and %(build) be created automatically
        
        
        SUMMARY: Unit test names are added to TestPlan
        GIVEN: we have good plugin configuration
        WHEN: plugin loops over unit tests emitted by the test runner
        THEN: plugin will check Current_TestPlan for a TestCase with the same name
        AND: if test case doesn't exist in Current_TestPlan
        THEN: it will be added to Current_TestPlan
        hint: it is probably best to process all unit test results at the end!
        
        
        SUMMARY: Unit test names are added to TestRun
        GIVEN: we have good plugin configuration
        WHEN: plugin loops over unit tests emitted by the test runner
        THEN: plugin will check Current_TestRun for a TestCaseRun object which matches
              the current unit test name
        hint: (or Current_TestCase object from previous scenario, depending on implementation)
        AND: if such TestCaseRun doesn't exist in Current_TestRun
        THEN: it will be added to Current_TestRun
        hint: it is probably best to process all unit test results at the end!
        
        
        SUMMARY: Current_TestRun is updated with unit test results
        GIVEN: we have good plugin configuration
        WHEN: plugin loops over unit tests emitted by the test runner
        THEN: plugin will check Current_TestRun for a TestCaseRun object which matches
              the current unit test name
        hint: (or Current_TestCase object from previous scenario, depending on implementation)
        AND: if TestCaseRun object exists in Current_TestRun
        THEN: its status will be updated with the execution result coming from the test runner
        hint: it is probably best to process all unit test results at the end!


Happy testing!
