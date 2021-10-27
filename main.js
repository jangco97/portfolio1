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
  scrollIntoSelector(link);
});
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});
//contact me버튼을 눌렀을 때 contact section으로 이동시키기
const contactbutton = document.querySelector('.home__contact');
console.log(contactbutton);
contactbutton.addEventListener('click', event => {
  scrollIntoSelector('#contact');
});

function scrollIntoSelector(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
