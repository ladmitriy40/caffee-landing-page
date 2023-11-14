'use strict';
// Modal windows
// Мariables
const modalWindowSignUp = document.querySelector('.modal-window_sign-up');
const btnShowModalWindowSignUp = document.querySelector(
  '.show-modal-window_sign-up'
);
const btnCloseModalWindowSignUp = document.querySelector('.close_modal-window');
const modalWindowLogin = document.querySelector('.modal-window_login');
const btnShowModalWindowLogin = document.querySelector('.menu-login_link');
const btnCloseModalWindowLogin = document.querySelector(
  '.close_modal-window_login'
);
const modalWindowSubscribe = document.querySelector('.modal-window_subscribe');
const btnShowModalWindowSubscribe = document.querySelector(
  '.show-modal-window_subscribe'
);
const btnCloseModalWindowSubscribe = document.querySelector(
  '.close_modal-window_subscribe'
);
const footerEmail = document.querySelector('.footer-email');

const modalWindowInputs = document.querySelectorAll('.modal-input');
const overlay = document.querySelector('.overlay');

// Functions

// Refactoring with bind method

const addHiddenClass = function () {
  this.classList.add('hidden');
  overlay.classList.add('hidden');
  modalWindowInputs.forEach(function (input) {
    input.value = '';
  });
};
const removeHiddenClass = function (modalWindow, overlay) {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const emailCorrectionCheck = function (
  modalWindow,
  emailInputPosition,
  overlay
) {
  const userEmail = emailInputPosition.value.trim();
  if (
    userEmail.length <= 6 ||
    !userEmail.includes('@') ||
    !userEmail.includes('.')
  ) {
    alert(
      'Incorrect Email! Email must have at least 6 characters, "@" symbol and "."'
    );
    return;
  }
  emailInputPosition.value = '';
  removeHiddenClass(modalWindow, overlay);
};
// addHiddenClassSubscribe function (version without refactoring with 2 functions(for signUp button and for subscribe button))
// const addHiddenClassSubscribe = function () {
//   this.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// Sign Up modal window

btnShowModalWindowSignUp.addEventListener('click', function () {
  // login/password/nickname correction check, nickname saving and signed up page needed
  removeHiddenClass(modalWindowSignUp, overlay);
});
btnCloseModalWindowSignUp.addEventListener(
  'click',
  addHiddenClass.bind(modalWindowSignUp)
);
overlay.addEventListener('click', addHiddenClass.bind(modalWindowSignUp));

// Login modal window

btnShowModalWindowLogin.addEventListener('click', function () {
  // login/password correction check and loged in window needed
  removeHiddenClass(modalWindowLogin, overlay);
});
btnCloseModalWindowLogin.addEventListener(
  'click',
  addHiddenClass.bind(modalWindowLogin)
);
overlay.addEventListener('click', addHiddenClass.bind(modalWindowLogin));

// Subscribe modal window

btnShowModalWindowSubscribe.addEventListener('click', function (e) {
  e.preventDefault();
  emailCorrectionCheck(modalWindowSubscribe, footerEmail, overlay);
});

btnCloseModalWindowSubscribe.addEventListener(
  'click',
  addHiddenClass.bind(modalWindowSubscribe)
);
overlay.addEventListener('click', addHiddenClass.bind(modalWindowSubscribe));

///////////////////////////////////////////////////////////////

// Smoth scrolling
// Variables

// Refactoring with event delegation (all commented part is interpritation without event delegation)

// const btnHome = document.querySelector('.home-link');

// const btnStory = document.querySelector('.story-link');
// const btnBlog = document.querySelector('.blog-link');
// const btnSubscribe = document.querySelector('.subscribe-link');

// const navBtns = document.querySelectorAll('.nav-link');

const menu = document.querySelector('.ul-nav_links');

// const sectionHome = document.querySelector('#section-1');

// const sectionStory = document.querySelector('#section-2');
// const sectionBlog = document.querySelector('#section-3');
// const sectionSubscribe = document.querySelector('.footer-subscribe');

// Functions

// const PageScrolling = function (e) {
//   e.preventDefault();
//   this.scrollIntoView({ behavior: 'smooth' });
// };

// Smooth scrolling logics

// btnHome.addEventListener('click', PageScrolling.bind(sectionHome));

// btnStory.addEventListener('click', PageScrolling.bind(sectionStory));

// btnBlog.addEventListener('click', PageScrolling.bind(sectionBlog));

// btnSubscribe.addEventListener('click', PageScrolling.bind(sectionSubscribe));

// navBtns.forEach(function (link) {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const href = this.getAttribute('href');
//     document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
//   });
// });

menu.addEventListener('click', function (e) {
  if (e.target.classList.contains('nav-link')) {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  }
});
