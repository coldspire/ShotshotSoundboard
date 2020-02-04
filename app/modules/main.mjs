/* main.mjs */

const setAudioPlayStatus = (audioEl, status) => {
    audioEl.dataset.isPlaying = status;
};

const setupAudioPlay = function(soundEl) {
    const buttonEl = soundEl.getElementsByTagName("button")[0];
    const audioEl = soundEl.getElementsByTagName("audio")[0];

    audioEl.addEventListener("play", event => {
        setAudioPlayStatus(event.target, true);
    });

    audioEl.addEventListener("pause", event => {
        setAudioPlayStatus(event.target, false);
    });

    audioEl.addEventListener("ended", event => {
        setAudioPlayStatus(event.target, false);
    });

    buttonEl.addEventListener("click", event => {
        if (audioEl.dataset.isPlaying === "true") {
            // Loops are paused,
            // while non-looping are reset and played again.
            if (audioEl.loop) {
                audioEl.pause();
            } else {
                audioEl.pause();
                audioEl.currentTime = 0;
                audioEl.play();
            }
        } else {
            audioEl.play();
        }
    });
};

const init = function() {
    const soundElements = document.getElementsByClassName("sound");
    for (let soundEl of soundElements) {
        setupAudioPlay(soundEl);
    }
};

window.addEventListener("DOMContentLoaded", function(event) {
    init();
});
