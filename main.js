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
//Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});
//Handle scrolling when tapping on the navbar
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', event => {
  const target = event.target;
  const link = target.dataset.link;
  //link가 있을경우에만 동작
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove('open');
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

//arrow up button
const arrow = document.querySelector('.arrow__container');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrow.classList.add('visible');
  } else {
    arrow.classList.remove('visible');
  }
});

//arrow up function
arrow.addEventListener('click', () => {
  scrollIntoSelector('#home');
});
//projects
const WorkBtnContainer = document.querySelector('.category');
const projectcontainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
WorkBtnContainer.addEventListener('click', e => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }
  //selection 없애기
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('selected');
  projectcontainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach(project => {
      console.log(project.dataset.type);
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectcontainer.classList.remove('anim-out');
  }, 300);
});
//scroll function
function scrollIntoSelector(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
