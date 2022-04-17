const menuMobile = document.querySelector('#menu-mobile');
const overlay = document.querySelector('#overlay');
const hamburger = document.querySelector('#hamburger-menu');
const hideMenu = document.querySelector('#hide-menu');


hamburger.addEventListener('click', function() {
  menuMobile.classList.remove('hidden');
  menuMobile.classList.add('visible');
  overlay.classList.remove('hidden');
  overlay.classList.add('visible');
});

hideMenu.addEventListener('click', function() {
  overlay.classList.remove('visible');
  menuMobile.classList.add('hidden');
  menuMobile.classList.remove('visible');
  overlay.classList.add('hidden');
});

AOS.init();

// toogleMobile.addEventListener('click', show(overlay));
// toogleMobile.addEventListener('click', show(menuMobile));

// hideMenu.addEventListener('click', hide(overlay));
// hideMenu.addEventListener('click', hide(menuMobile));

