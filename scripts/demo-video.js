var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-iframe');
}

function showVideo() {
    document.getElementById('demoVideo').style.display = "block";
    player.playVideo();
}

function hideVideo() {
    player.stopVideo();
    document.getElementById('demoVideo').style.display = "none";
}
