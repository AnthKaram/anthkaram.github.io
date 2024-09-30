    function toggleMute() {
        var video = document.getElementById('myVideo');
        var button = document.getElementById('muteButton');

        video.muted = !video.muted;
        button.textContent = video.muted ? 'Unmute' : 'Mute';
    }