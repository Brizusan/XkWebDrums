// AOS Animation
  AOS.init();
// navbar en vista tablet
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
});

// Carrousel 
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });

var options = {
    indicator: true,
    numVisible: 5,
    padding : 15
}
//SimpleLighbox
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });