const countdown = () => {
    const countDate = new Date('November 30, 2024 16:00:00').getTime();
    const now = new Date();

    const gap = countDate - now;

    //Set Up the Time

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //Calculate the time Gap
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor( (gap % day) / hour);
    const textMinute = Math.floor( (gap % hour) / minute);
    const textSecond = Math.floor( (gap % minute) / second);

    //Update the HTML
    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour < 10 ? '0' + textHour : textHour;
    document.querySelector('.minute').innerText = textMinute < 10 ? '0' + textMinute : textMinute;
    document.querySelector('.second').innerText = textSecond < 10 ? '0' + textSecond : textSecond;

}

setInterval(countdown, 1000);


const audio = document.getElementById('audio');
const icon = document.getElementById('playIcon');

function isPlaying(audelem) { return !audelem.paused; }

function playPauseSong() {
    if ( isPlaying(audio) ) {
        audio.pause();
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
    } else {
        audio.play();
        icon.classList.add("fa-pause");
        icon.classList.remove("fa-play");
    }
}

const playBtn = document.getElementById("playBtn");
playBtn.onclick = playPauseSong;

document.body.onload = function() {
    if ( isPlaying(audio) ) {
        icon.classList.add("fa-pause");
        icon.classList.remove("fa-play");
    }
  }