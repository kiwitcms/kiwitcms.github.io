// This is the Async JS directory.
// This loads asynchronous to the page.
// Everything that's not a MUST LOAD for
// above the fold should come here as to make
// the site load faster.

// EVENT LISTENERS

// FUNCTIONS
function toggle(objectId, toggleClass) {
    var toggleObject = document.getElementById(objectId);
    if (toggleObject.classList.contains(toggleClass)) {
        toggleObject.classList.remove(toggleClass);
    } else {
        toggleObject.classList.add(toggleClass);
    }
  }

  function doVideo(videoId, open) {
      var player = document.getElementById("vp-frame");
      var vpOverlay = document.getElementById("vp-overlay");
      if(open){
          player.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&hd=1&showinfo=0&enablejsapi=1";
          vpOverlay.classList.add("vp-visible");
      } else {
          stopVideo();
          vpOverlay.classList.remove("vp-visible");
      }
    }

  function stopVideo(){
    var video = document.getElementById("vp-frame");
       video.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
  }

  