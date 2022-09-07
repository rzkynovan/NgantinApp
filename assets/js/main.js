/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu=document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose=document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// Swiper Js
var swiper = new Swiper(".most-buy", {

    // grabCursor: true,
    spaceBetween: 24,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        992:{
            slidesPerView:4,
        },
        768:{
            slidesPerView:2,
        },
        568:{
            slidesPerView: 2,
        },
        375:{
            slidesPerView: 1.4,
        }
    },
  });