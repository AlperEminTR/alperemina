
/*--------------Navabr start-----------*/ 
function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
/*-----------------Navbar finish-------*/

/*----------------------Galeri start*/ 
const images = document.querySelectorAll('.image');
const modalContainer = document.querySelector('.modal-container');
const modal = document.querySelector('.modal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');

images.forEach(image => {
    image.addEventListener('click', () => {
        const src = image.querySelector('img').getAttribute('src');
        modalImage.setAttribute('src', src);
        modalContainer.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    modalContainer.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == modalContainer) {
        modalContainer.style.display = 'none';
    }
});
/*--------------------------Galeri finish---------*/

/*--------------------------Playlkist start------------*/ 

document.addEventListener("DOMContentLoaded", function() {
    const playlist = document.querySelector(".playlist");
    const songs = document.querySelectorAll(".song");
    let currentSong = null;

    songs.forEach(function(song) {
        const audioPlayer = song.querySelector(".audioPlayer");
        const overlay = song.querySelector(".overlay");
        const title = song.querySelector(".title");

        // Görsele tıklandığında müzik çal
        overlay.addEventListener("click", function() {
            if (currentSong !== null && currentSong !== audioPlayer) {
                currentSong.pause();
                currentSong.currentTime = 0;
            }

            if (audioPlayer.paused) {
                audioPlayer.play();
                overlay.classList.add("playing");
                title.textContent = "Çalınıyor: " + title.textContent;
                currentSong = audioPlayer;
            } else {
                audioPlayer.pause();
                overlay.classList.remove("playing");
                title.textContent = title.textContent.replace("Çalınıyor: ", "");
                currentSong = null;
            }
        });

        // Müzik çalma durduğunda görsele geri dön
        audioPlayer.addEventListener("pause", function() {
            overlay.classList.remove("playing");
            title.textContent = title.textContent.replace("Çalınıyor: ", "");
        });
    });

    // Kaydırma çubuğu için ekstra stillendirme
    playlist.style.paddingBottom = playlist.offsetHeight - playlist.clientHeight + "px"; // Alt kısıma kaydırma çubuğu yüksekliği kadar boşluk ekleyelim
});




