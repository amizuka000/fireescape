//INITIALIZE FLICKITY
var elem = document.querySelector('.carousel');
var flkty = new Flickity( elem, {
  // options
  imagesLoaded: true,
  percentPosition: false,
  cellAlign: 'left',
  wrapAround:true,
  fullscreen: true,
});


//CAPTION
var caption = document.querySelector('.caption');

flkty.on( 'select', function() {

  // set image caption using img's alt
  caption.textContent = flkty.selectedElement.children[0].alt;
});
