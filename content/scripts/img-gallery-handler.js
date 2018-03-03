window.onload = setTimeout(imageGalleryHandler, 0);

function imageGalleryHandler() {
    var imgs = [
        {
            title: 'Create IEEE 829 or free text Test Plan',
            subtitle: 'This document describes what and how are you going to test',
            img: 'images/screenshots/001_create_test_plan.png'
        }, {
            title: 'Create a Test Case',
            subtitle: 'Use Given-When-Then or bullet points to describe the scenario',
            img: 'images/screenshots/002_create_test_case.png'
        }, {
            title: 'Execute Test Runs against a build',
            subtitle: 'for each build create test runs to collect execution details',
            img: 'images/screenshots/003_execute_tests_for_build.png'
        }, {
            title: 'Mark individual test result statuses',
            subtitle: 'add comments, link or report bugs',
            img: 'images/screenshots/004_mark_individual_test_results.png'
        }, {
            title: 'Product builds report',
            subtitle: 'shows testing progress across builds',
            img: 'images/screenshots/005_product_builds_report.png'
        }, {
            title: 'Testing report per Test Plan and product build ',
            subtitle: 'shows detailed statuses per build and test run',
            img: 'images/screenshots/006_report_per_plan_and_build.png'
        }],
        imgIndex = 0;

    var nextBtn = document.getElementById('next'),
        prevBtn = document.getElementById('prev'),
        shown = document.getElementsByClassName('shown')[0],
        hidden =  document.getElementsByClassName('hidden')[0];


    // updates/ what is shown in the containers
    function updateDisplay(idx) {
        var heading = document.getElementById('heading'),
            subtitle = document.getElementById('subtitle'),
            progress = document.getElementById('imgIndex');

        shown.style.backgroundImage = 'url(' + imgs[idx].img + ')';
        heading.textContent = imgs[idx].title;
        subtitle.textContent = imgs[idx].subtitle;
        progress.textContent = (idx + 1) + '/' + imgs.length;
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

        // swap the shown/hidden containers
        shown.classList.remove("shown");
        shown.classList.add("hidden");

        hidden.classList.remove("hidden");
        hidden.classList.add("shown");

        // also update the references held in the variables
        shown = document.getElementsByClassName('shown')[0];
        hidden = document.getElementsByClassName('hidden')[0];

        // show current image and texts
        updateDisplay(imgIndex);
        changeDirection(direction);
    }

    // helps change the direction from which the containers
    // transition depending on which direction we want to go
    function changeDirection(direction) {
        hidden.style.left = (105 * direction) + "%";
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
}
