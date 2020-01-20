/* main.mjs */

const init = function() {
    const soundElements = document.getElementsByClassName("sound");
    for (let soundEl of soundElements) {
        const buttonEl = soundEl.getElementsByTagName("button")[0];
        const audioEl = soundEl.getElementsByTagName("audio")[0];
        buttonEl.addEventListener("click", event => {
            audioEl.play();
        });
    }
};

window.addEventListener("DOMContentLoaded", function(event) {
    init();
});
