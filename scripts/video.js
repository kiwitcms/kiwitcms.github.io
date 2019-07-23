var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-iframe');
}

function showVideo(videoId) {
    document.getElementById('demoVideo').style.display = "block";
    player.loadVideoById(videoId);
    player.playVideo();
}

function hideVideo() {
    player.stopVideo();
    document.getElementById('demoVideo').style.display = "none";
}
