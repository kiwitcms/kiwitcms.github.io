// This is the General JS directory.
// This loads with the page, keep it small and simple.

// EVENT LISTENERS
window.onscroll = function() {minifyNav()};


// FUNCTIONS
function minifyNav() {
  if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) {
    document.getElementById("main-nav").classList="minified";
  } else {
    document.getElementById("main-nav").classList="";
  }
}