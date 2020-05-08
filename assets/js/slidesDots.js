//DOTS SLIDESHOW

var slideIndexDots = 1;
showSlidesDots(slideIndexDots);

// Next/previous controls
function plusSlidesDots(n) {
  showSlidesDots(slideIndexDots += n);
}

// Thumbnail image controls
function currentSlideDots(n) {
  showSlidesDots(slideIndexDots = n);
}

function showSlidesDots(n) {
  var i;
  var slidesDots = document.getElementsByClassName("mySlides");
  var dotsDots = document.getElementsByClassName("dot");
  var captionTextDots = document.getElementById("caption");
  if (n > slidesDots.length) {slideIndexDots = 1}
  if (n < 1) {slideIndexDots = slidesDots.length}
  for (i = 0; i < slidesDots.length; i++) {
      slidesDots[i].style.display = "none";
  }
  for (i = 0; i < dotsDots.length; i++) {
      dotsDots[i].className = dotsDots[i].className.replace(" dotactive", "");
  }
  slidesDots[slideIndexDots-1].style.display = "block";
  dotsDots[slideIndexDots-1].className += " dotactive";
  captionTextDots.innerHTML = dotsDots[slideIndexDots-1].title;
}
