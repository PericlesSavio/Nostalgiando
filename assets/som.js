var sb = {
    song: null,
    init: function () {
        sb.song = new Audio();
        sb.listeners();
    },
    listeners: function () {
        $("button").click(function (e) {
            if ($(e.target).hasClass("play")) {
                sb.play(e);
            } else if ($(e.target).hasClass("stop")) {
                sb.stop();
            }
        });
    },
    play: function (e) {
        sb.song.src = e.target.value;
        sb.song.play();
    },
    stop: function () {
        if (sb.song) {
            sb.song.pause();
            sb.song.currentTime = 0; // Reseta o áudio para o início
        }
    }
};

$(document).ready(sb.init);