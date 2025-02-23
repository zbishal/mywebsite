let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'tF4z5kntXAA', //this is ithe youtube video ID btw
        playerVars: {
            autoplay: 1, 
            loop: 1,
            playlist: 'tF4z5kntXAA', //for the loop
            controls: 0,
            showinfo: 0,
            modestbranding: 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    const volumeSlider = document.getElementById('volumeSlider');
    event.target.setVolume(volumeSlider.value);
    volumeSlider.addEventListener('input', () => {
        player.setVolume(volumeSlider.value);
    });
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    const audioMessage = document.getElementById('audioMessage');
    
    if (event.data === YT.PlayerState.PLAYING) {
        audioMessage.classList.remove('visible'); 
    } else if (event.data === YT.PlayerState.UNSTARTED || event.data === YT.PlayerState.PAUSED) {
        audioMessage.classList.add('visible'); 
    }
    
    if (event.data === YT.PlayerState.ENDED) {
        player.playVideo(); 
    }
}

window.onbeforeunload = function() {
    if (player) {
        player.stopVideo(); 
    }
};