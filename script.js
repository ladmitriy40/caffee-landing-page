'use strict';
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

btnShowModalWindowSignUp.addEventListener('click', function () {
  // login/password/nickname correction check, nickname saving and signed up page needed
  removeHiddenClass(modalWindowSignUp, overlay);
});
btnCloseModalWindowSignUp.addEventListener(
  'click',
  addHiddenClass.bind(modalWindowSignUp)
);
overlay.addEventListener('click', addHiddenClass.bind(modalWindowSignUp));

btnShowModalWindowLogin.addEventListener('click', function () {
  // login/password correction check and loged in window needed
  removeHiddenClass(modalWindowLogin, overlay);
});
btnCloseModalWindowLogin.addEventListener(
  'click',
  addHiddenClass.bind(modalWindowLogin)
);
overlay.addEventListener('click', addHiddenClass.bind(modalWindowLogin));
btnShowModalWindowSubscribe.addEventListener('click', function (e) {
  e.preventDefault();
  emailCorrectionCheck(modalWindowSubscribe, footerEmail, overlay);
});

btnCloseModalWindowSubscribe.addEventListener(
  'click',
  addHiddenClass.bind(modalWindowSubscribe)
);
overlay.addEventListener('click', addHiddenClass.bind(modalWindowSubscribe));
