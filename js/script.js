AOS.init()

var elem = document.querySelector('.carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  draggable: false
});
var flkty = new Flickity( '.carousel', {
});

document.getElementById("racing").addEventListener("click", function() {
  window.location.href = ""
});
document.getElementById("sport").addEventListener("click", function() {
  window.location.href = ""
});
document.getElementById("action").addEventListener("click", function() {
  window.location.href = ""
});
document.getElementById("platformer").addEventListener("click", function() {
  window.location.href = ""
});