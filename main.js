'use strict';

//navbar를 투명하다가 내려가면 색깔이 생기도록
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  //   console.log(window.scrollY);
  //   console.log(`navbarHeight: ${navbarHeight}`);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

//Hand scrolling when tapping on the navbar
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', event => {
  const target = event.target;
  const link = target.dataset.link;
  //link가 있을경우에만 동작
  if (link == null) {
    return;
  }
  var elmnt = document.querySelector(link);
  elmnt.scrollIntoView({ behavior: 'smooth' });
  console.log(event.target.dataset.link);
});
