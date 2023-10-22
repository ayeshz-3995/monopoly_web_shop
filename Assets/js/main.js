
jQuery(document).ready(function ($) { // When jQuery is ready

  function check_from_top_de() { // Create our function
    var scroll = $(window).scrollTop(); // Check scroll distance
    if (scroll >= 150) { // If it is equal or more than 150 - you can change this to what you want
      $("#_main_navi_id").addClass("shrink"); // Add custom class to main nav#_main_navi_id
    } else {
      $("#_main_navi_id").removeClass("shrink"); // When scrolled to the top, remove the class
    }
  }

  check_from_top_de(); // On load, run the function

  $(window).scroll(function () { // When scroll - run function
    check_from_top_de();
  });

});


/* const nav = document.querySelector('.navbar')
fetch('../header/header.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
    const parser = new DOMParser()
    const doc= parser.parseFromString(data, 'text/html')
   eval(doc.querySelector('script').textContent) 
}) */

/****************************** Standt- Monopoly Video******************** */
const videoPlayer = document.getElementById('videoPlayer');
const playButton = document.getElementById('playButton');
const statusText = document.getElementById('status');

playButton.addEventListener('click', () => {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playButton.innerText = 'Pause';
    statusText.innerText = 'Video is playing.';
  } else {
    videoPlayer.pause();
    playButton.innerText = 'Play';
    statusText.innerText = 'Video is paused.';
  }
});


/************ Mitmachen Vorschlage > Show All Button ************************* */
function showAllBoxes() {
  var additionalBoxes = document.getElementById("additional-boxes");
  additionalBoxes.classList.toggle("shop-hidden");
}