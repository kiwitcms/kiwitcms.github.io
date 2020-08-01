    var imgs = [
        {
            title: 'Central dashboard to start your day',
            subtitle: 'See all of your test executions and test plans in one place',
            img: 'images/screenshots/001_central_dashboard.png'
        }, {
            title: 'Create IEEE 829 or free text test plan',
            subtitle: 'This document contains your overall testing strategy',
            img: 'images/screenshots/002_testplan_00.png'
        }, {
            title: 'Test plan is a collection of test cases',
            subtitle: 'Add, remove, review and approve test cases before you start testing',
            img: 'images/screenshots/002_testplan_01.png'
        }, {
            title: 'Create a test case',
            subtitle: 'Use Given-When-Then or bullet points to describe the scenario',
            img: 'images/screenshots/003_create_test_case.png'
        }, {
            title: 'View existing test case',
            subtitle: 'Intuitive access to all the important information',
            img: 'images/screenshots/004_view_existing_test_cases.png'
        }, {
            title: 'Execute test runs against a build',
            subtitle: 'For each product build create test runs to collect execution details',
            img: 'images/screenshots/005_execute_tests_for_build.png'
        }, {
            title: 'Bug tracker integration',
            subtitle: 'Link to existing bug reports or report new ones directly from Kiwi TCMS',
            img: 'images/screenshots/007_bugtracker_github.png'
        }, {
            title: 'Automatic 1-click bug report',
            subtitle: 'Open bugs in 3rd party systems from test executions. Fully customizable',
            img: 'images/screenshots/007_bugtracker_jira.png'
        }, {
            title: 'Testing breakdown telemetry',
            subtitle: 'Shows how existing test cases are distributed',
            img: 'images/screenshots/006_testing_breakdown_telemetry.png'
        }, {
            title: 'Status matrix telemetry',
            subtitle: 'Detailed information about test execution status',
            img: 'images/screenshots/007_status_matrix_telemetry.png'
        }, {
            title: 'Execution trends telemetry',
            subtitle: 'Information if product builds are getting better or worse',
            img: 'images/screenshots/008_execution_trends_telemetry.png'
        }, {
            title: 'Test case health telemetry',
            subtitle: 'Discover which test cases are the most common source of problems',
            img: 'images/screenshots/009_test_case_health_telemetry.png'
        }],
        imgIndex = 0;

    var nextBtn = document.getElementById('next'),
        prevBtn = document.getElementById('prev'),
        shown = document.getElementsByClassName('shown')[0];

    // updates/ what is shown in the containers
    function updateDisplay(idx) {
        var heading = document.getElementById('heading'),
            subtitle = document.getElementById('subtitle');

        shown.src = imgs[idx].img;
        heading.textContent = imgs[idx].title;
        subtitle.textContent = imgs[idx].subtitle;
    }

    // roll images left and right by swapping the hidden/shown containers
    function rollImage(direction) {
        imgIndex += direction;

        if (imgIndex < 0) {
            imgIndex = imgs.length - 1;
        }

        if (imgIndex >= imgs.length) {
            imgIndex = 0;
        }

        // show current image and texts
        updateDisplay(imgIndex);
        changeDirection(direction);
    }

    // helps change the direction from which the containers
    // transition depending on which direction we want to go
    function changeDirection(direction) {
        shown.style.left = 0;
    }

    // swipe detection in pure JavaScript
    // http://www.javascriptkit.com/javatutors/touchevents2.shtml
    function swipedetect(touchsurface, callback){
        var startX,
            startTime,
            threshold = 150, //required min distance traveled to be considered swipe
            allowedTime = 300, // maximum time allowed to travel that distance
            handleswipe = callback || function(swipedir){};

        touchsurface.addEventListener('touchstart', function(e){
            startX = e.changedTouches[0].pageX;
            startTime = new Date().getTime();
            e.preventDefault();
        }, false);

        touchsurface.addEventListener('touchmove', function(e){
            // prevent scrolling when inside DIV
            e.preventDefault();
        }, false);

        touchsurface.addEventListener('touchend', function(e){
            var distX = e.changedTouches[0].pageX - startX,
                elapsedTime = new Date().getTime() - startTime;
                swipedir = 0;
            if ((elapsedTime <= allowedTime) && (Math.abs(distX) >= threshold)) {
                // direction indices are reversed compared to when clicking the buttons
                swipedir = (distX < 0) ? 1 : -1;
                handleswipe(swipedir);
            }
            e.preventDefault();
        }, false);
    }

    // initialization and callbacks
    updateDisplay(0);
    nextBtn.addEventListener('mouseover', function(){ changeDirection(1) });
    prevBtn.addEventListener('mouseover', function(){ changeDirection(-1) });

    nextBtn.addEventListener('click', function(){ rollImage(1); });
    prevBtn.addEventListener('click', function(){ rollImage(-1); });

    // sets up a touch-gesture event listener
    swipedetect(document.getElementsByClassName('img-wrapper')[0], function(direction){
        changeDirection(direction);
        setTimeout(function() { rollImage(direction); }, 50);
    });
