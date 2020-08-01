var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('vp-frame');
}

function showVideo(videoId) {
    document.getElementById('vp-overlay').classList.add('vp-visible');
    player.loadVideoById(videoId);
    player.playVideo();
}

function hideVideo() {
    player.stopVideo();
    document.getElementById('vp-overlay').classList.remove('vp-visible');
}
