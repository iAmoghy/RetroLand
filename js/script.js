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


if (screen.width < 1280 || screen.height < 800) {
  console.log("too small")
  alert("This site is not intended to be run on mobile devices! Please use a PC/laptop for the best experience.")
}

function copyLink() {
  console.log("RUNNING")
  navigator.clipboard.writeText("https://iamoghy.github.io/RetroLand/")
  alert("Text copied! Share it wherever you would like :)")
}