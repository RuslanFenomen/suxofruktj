// header sticky
const header = document.querySelector(".header");
window.onscroll = function () {
  if (window.pageYOffset > 200) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// header languahe
const leng = document.querySelector('.header__btns');
const lengBtn = document.querySelector('.header__lenguage');
const langItem = document.querySelectorAll('.lang-item');

// header menu
const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.menu-btn')
const menuLink = document.querySelectorAll('.menu__link')

lengBtn.addEventListener('click', function () {
  leng.classList.toggle('leng--active');
  menu.classList.remove('menu--active');
})

menuBtn.addEventListener('click', function () {
  if (window.innerWidth < 1200) {
    menu.classList.toggle('menu--active');
    leng.classList.remove('leng--active');
  }
})

menuLink.forEach(link => {
  link.addEventListener('click', function () {
    menu.classList.remove('menu--active')
    document.body.classList.remove('stop-scroll')
  })
})

// catalog__control--active
const controls = document.querySelectorAll('.catalog__control')
controls[0].classList.add('catalog__control--active')

controls.forEach(control => {
  control.addEventListener('click', function () {
    controls.forEach(control => {
      control.classList.remove('catalog__control--active')
    })
    control.classList.add('catalog__control--active')
  })
});

// // Search Btn
// const SearchWrapper = document.querySelector('.header__search')
// const SearchBtn = document.querySelector('.header__search-btn')

// SearchBtn.addEventListener('click', function () {
//   SearchWrapper.classList.toggle('header__search--active')
// })

// // popup
const popupBg = document.querySelector('.popup__bg')
const popup = document.querySelector('.popup')
const openPopupBtn = document.querySelectorAll('.popup__open')
const closePopupBtn = document.querySelector('.popup__close')

openPopupBtn.forEach((btn) => {
  btn.addEventListener('click', function () {
    popupBg.classList.add('popup__bg--active')
    popup.classList.add('popup--active')
  })
})

closePopupBtn.addEventListener('click', function () {
  popupBg.classList.remove('popup__bg--active')
  popup.classList.remove('popup--active')
})

document.addEventListener('click', function (element) {
  if (element.target === popupBg) {
    popupBg.classList.remove('popup__bg--active')
    popup.classList.remove('popup--active')
  }
})



const containerEl = document.querySelector('[data-ref~="mixitup-container"]');

const mixer = mixitup(containerEl, {
  selectors: {
    target: '[data-ref~="mixitup-target"]'
  }
});

// Accordion
new Accordion('.accordion-container');