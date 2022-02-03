let menuBtn = document.querySelector('.menu-btn');
var navLinks = document.querySelector('.nav-links');
menuBtn.onclick = function () {
    navLinks.classList.toggle('open');
    menuBtn.classList.toggle('open');
}

window.addEventListener('scroll', function () {
    let navbar = document.querySelector(".prodes-nav");
    let navlinks = document.querySelector('.nav-links');
    navbar.classList.toggle('sticky', window.scrollY > 50);
    navlinks.classList.toggle('sticky', window.scrollY > 50);
    let burger = document.querySelector(".menu-btn__burger");
    burger.classList.toggle('scrolled', window.scrollY > 50);
})

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  cellAlign: 'center',
  contain: true,
  // wrapAround: true,
  freeScroll: true,
  autoPlay: 3500,
});

var flkty = new Flickity( '.first-carousel', {
  cellAlign: 'center',
  contain: true,
  // wrapAround: true,
  freeScroll: true,
  autoPlay: 3500,
});

var flkty = new Flickity( '.second-carousel', {
  cellAlign: 'center',
  contain: true,
  // wrapAround: true,
  freeScroll: true,
  autoPlay: 3600,
});

var flkty = new Flickity( '.third-carousel', {
  cellAlign: 'center',
  contain: true,
  // wrapAround: true,
  freeScroll: true,
  autoPlay: 3700,
});

var flkty = new Flickity( '.fourth-carousel', {
  cellAlign: 'center',
  contain: true,
  // wrapAround: true,
  freeScroll: true,
  autoPlay: 3550,
});

var flkty = new Flickity( '.fifth-carousel', {
  cellAlign: 'center',
  contain: true,
  // wrapAround: true,
  freeScroll: true,
  autoPlay: 3500,
});

var flkty = new Flickity( '.sixth-carousel', {
  cellAlign: 'center',
  contain: true,
  // wrapAround: true,
  freeScroll: true,
  autoPlay: 3750,
});

var flkty = new Flickity( '.seventh-carousel', {
  cellAlign: 'center',
  contain: true,
  // wrapAround: true,
  freeScroll: true,
  autoPlay: 3600,
});