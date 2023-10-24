'use strict';
const modalWindowSignUp = document.querySelector('.modal-window_sign-up');
const btnShowModalWindowSignUp = document.querySelector(
  '.show-modal-window_sign-up'
);
const btnCloseModalWindowSignUp = document.querySelector('.close_modal-window');
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

// Refactoring with bind method

const addHiddenClass = function () {
  this.classList.add('hidden');
  overlay.classList.add('hidden');
  modalWindowInputs.forEach(function (input) {
    input.value = '';
  });
};
// addHiddenClassSubscribe function (version without refactoring with 2 functions(for signUp button and for subscribe button))
// const addHiddenClassSubscribe = function () {
//   this.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

btnShowModalWindowSignUp.addEventListener('click', function () {
  modalWindowSignUp.classList.remove('hidden');
  overlay.classList.remove('hidden');
});
btnCloseModalWindowSignUp.addEventListener(
  'click',
  addHiddenClass.bind(modalWindowSignUp)
);
overlay.addEventListener('click', addHiddenClass.bind(modalWindowSignUp));

btnShowModalWindowSubscribe.addEventListener('click', function (e) {
  e.preventDefault();
  const userEmail = footerEmail.value.trim();
  if (
    userEmail.length <= 6 ||
    !userEmail.includes('@') ||
    !userEmail.includes('.')
  ) {
    alert('Incorrect Email!');
    return;
  }
  footerEmail.value = '';
  modalWindowSubscribe.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

btnCloseModalWindowSubscribe.addEventListener(
  'click',
  addHiddenClass.bind(modalWindowSubscribe)
);
overlay.addEventListener('click', addHiddenClass.bind(modalWindowSubscribe));
