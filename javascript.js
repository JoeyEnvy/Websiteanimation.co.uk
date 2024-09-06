let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

const video = document.getElementById('myVideo');
const sources = video.getElementsByTagName('source');
let currentSource = 0;

video.addEventListener('ended', function() {
  currentSource = (currentSource + 1) % sources.length;
  video.src = sources[currentSource].src;
  video.play();
});


document.addEventListener('DOMContentLoaded', function() {
  const reelVideo = document.getElementById('reelVideo');
  const videoReel = document.querySelector('.video-reel');
  const videoSources = [
    'videos/Blender Stock Videos/1.mp4',
    'videos/Blender Stock Videos/2.mp4',
    'videos/Blender Stock Videos/3.mp4',
    'videos/Blender Stock Videos/4.mp4',
    'videos/Blender Stock Videos/5.mp4',
    'videos/Blender Stock Videos/6.mp4',
    'videos/Blender Stock Videos/7.mp4',
    'videos/Blender Stock Videos/8.mp4',
    'videos/Blender Stock Videos/9.mp4'
  ];
  let currentSourceIndex = 0;

  function changeVideo() {
    videoReel.classList.add('loading');
    currentSourceIndex = (currentSourceIndex + 1) % videoSources.length;
    reelVideo.src = videoSources[currentSourceIndex];
    
    reelVideo.addEventListener('loadedmetadata', function() {
      const randomStartTime = Math.random() * (reelVideo.duration - 10);
      reelVideo.currentTime = randomStartTime;
      reelVideo.play();
      videoReel.classList.remove('loading');
    }, { once: true });
  }

  // Initial video load
  changeVideo();

  // Change video every 10 seconds
  setInterval(changeVideo, 10000);
});
