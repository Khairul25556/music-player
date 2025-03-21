

const songs = [
    { name: "Breaking Bad", artist: "Negro y Azul", src: "assets/BB.mp3", img: "assets/breakingbd.png" },
    { name: "Que Sera Sera", artist: "Doris Day", src: "assets/que sera sera.mp3", img: "assets/from.jpg" },
    { name: "Anyone who knows what love is!", artist: "The Seal", src: "assets/anyone.mp3", img: "assets/anyone.jpg" },
    { name: "Bôa", artist: "The Duvet", src: "assets/boa.mp3", img: "assets/lain.jpg" },
    { name: "Stay With Me", artist: "Miki Matsubara", src: "assets/matsub.mp3", img: "assets/miki.jpg" },
    { name: "Smells Like Teen Spirit", artist: "Nivaran", src: "assets/smells.mp3", img: "assets/smells.jpg" },
    { name: "Something In The Way", artist: "Nivaran", src: "assets/something.mp3", img: "assets/something.jpg" },
    { name: "Come As You Are", artist: "The Nivaran", src: "assets/come.mp3", img: "assets/come.jpg" },
    { name: "After Dark", artist: "Mr.Kitty", src: "assets/afdark.mp3", img: "assets/afdark.png" }

];

let currentSongIndex = 0;

let progress = document.getElementById('progress');
let songTitle = document.querySelector(".music-player h1");
let songArtist = document.querySelector(".music-player p");
let songImg = document.querySelector(".song-img");
let ctrlIcon = document.getElementById('ctrlIcon');
let backwardBtn = document.querySelector('.fa-backward');
let forwardBtn = document.querySelector('.fa-forward');


let song = document.createElement('audio');
document.querySelector('.music-player').appendChild(song);


function loadSong(index) {
    song.src = songs[index].src;
    songTitle.innerText = songs[index].name;
    songArtist.innerText = songs[index].artist;
    songImg.src = songs[index].img;
    song.load(); // Reload the song
}


loadSong(currentSongIndex);


function playPause() {
    if (song.paused) {
        song.play();
        ctrlIcon.classList.remove('fa-play');
        ctrlIcon.classList.add('fa-pause');
    } else {
        song.pause();
        ctrlIcon.classList.remove('fa-pause');
        ctrlIcon.classList.add('fa-play');
    }
}


song.addEventListener("timeupdate", function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
});


progress.onchange = function () {
    song.currentTime = progress.value;
};


function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length; // Loop to the first song after the last
    loadSong(currentSongIndex);
    song.play();
    ctrlIcon.classList.remove('fa-play');
    ctrlIcon.classList.add('fa-pause');
}


function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length; // Loop to the last song when at the first
    loadSong(currentSongIndex);
    song.play();
    ctrlIcon.classList.remove('fa-play');
    ctrlIcon.classList.add('fa-pause');
}


forwardBtn.addEventListener("click", nextSong);
backwardBtn.addEventListener("click", prevSong);


song.addEventListener("ended", nextSong);
