let audio = document.querySelector("audio")
let title = document.querySelector(".title")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")
let playPauses = document.querySelector(".playPause")


// Array All Songs
const allSongs= [
    {
        path: 'media/01.mp3',
        name:"Ya Blady - Ramy Gamal - Aziz Elshafaay"
    },
    {
        path: 'media/02.mp3',
        name:"Ya Elmedan - Aida Elayuoby - CairoKee"
    },
    {
        path: 'media/03.mp3',
        name:"Ezay - Mounir"
    },
    {
        path: 'media/04.mp3',
        name:"Dayman 3ay4en - Hamaki"
    },
    {
        path: 'media/05.mp3',
        name:"Masr 2alet - Amr Diab"
    },
]

let song_playing = false;

// Play Song
function playSong() {
    song_playing = true;
    audio.play();
    playPauses.classList.add("active")
}

// Pause Song
function pauseSong() {
    song_playing = false;
    audio.pause();
    playPauses.classList.remove("active")
}

// Play Or Pause Song 

playPauses.addEventListener("click" , () =>{

    if(song_playing){
        playPauses.querySelector(".play-song-now").classList.remove("d-none")
        playPauses.querySelector(".pause-song-now").classList.add("d-none")
        pauseSong()
    }else{
        playPauses.querySelector(".pause-song-now").classList.remove("d-none")
        playPauses.querySelector(".play-song-now").classList.add("d-none")
        playSong()
    }
    console.log(song_playing);
})

function loadSong(allSongs) {
    
    title.textContent = allSongs.name;
    audio.src = allSongs.path
}

let i = 1
loadSong(allSongs[i])

prev.addEventListener("click" , ()=>{
    i--;
    if(i < 0) {

        i = allSongs.length -1;
    }
    loadSong(allSongs[i])
    playSong()
})

next.addEventListener("click" , ()=>{
    i++;
    if(i > allSongs.length -1) {

        i = 0;
    }
    loadSong(allSongs[i])
    playSong()
})