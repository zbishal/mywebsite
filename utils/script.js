let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'fcNtHofHqY4',
        playerVars: {
            autoplay: 0,
            loop: 1,
            playlist: 'fcNtHofHqY4',
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

    setTimeout(() => {
        event.target.playVideo();
    }, 3000);

    document.querySelectorAll('.nav-link, .navbar-brand, footer a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const currentTime = player.getCurrentTime();
            sessionStorage.setItem('audioTime', currentTime);
            document.body.style.opacity = '0';
            setTimeout(() => {
                window.location.href = link.getAttribute('href');
            }, 300);
        });
    });
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        player.playVideo();
    }
}

window.addEventListener('load', () => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
    const savedTime = sessionStorage.getItem('audioTime');
    if (savedTime && player) {
        player.seekTo(parseFloat(savedTime), true);
        setTimeout(() => {
            player.playVideo();
        }, 3000);
    }
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        document.querySelector('.navbar').style.background = 'rgba(0, 0, 0, 0.7)';
    } else {
        document.querySelector('.navbar').style.background = 'transparent';
    }
});

window.addEventListener('pageshow', (event) => {
    if (event.persisted && player) {
        const savedTime = sessionStorage.getItem('audioTime');
        if (savedTime) {
            player.seekTo(parseFloat(savedTime), true);
            setTimeout(() => {
                player.playVideo();
            }, 3000);
        }
    }
});