"use strict";
//MODAL
const modal = document.querySelector("[data-modal]");
const modalCloseBtn = document.querySelector("[data-modal-close]");
const modalCloseOverlay = document.querySelector("[data-modal-overlay]");

//modal close function
const closeFunc = () => {
  modal.classList.add("closed");
};

//modal overlay close eventlistener
modalCloseOverlay.addEventListener("click", closeFunc);
//modal  close button  eventlistener
modalCloseBtn.addEventListener("click", closeFunc);

//NOTIFICATION-TOAST
const notificationToast = document.querySelector("[data-toast");
const toastCloseBtn = document.querySelector("[data-toast-close");

//notification toast eventListener
toastCloseBtn.addEventListener("click", () => {
  notificationToast.classList.add("closed");
});

//MOBILE MENU

const mobileMenuOpenBtn = document.querySelectorAll(
  "[data-mobile-menu-open-btn]"
);

const mobileMenu = document.querySelector("[data-mobile-menu]");
const mobileMenuCloseBtn = document.querySelector(
  "[data-mobile-menu-close-btn]"
);
const overlay = document.querySelector("[data-overlay]");

// I REPLACED FOR LOOP WITH FOR OF LOOP JUST IN CASE I NEED TO EDIT ANY OF THE CODE LATER
for (let btn of mobileMenuOpenBtn) {
  // mobile menu open & close function
  const mobileMenuCloseFunc = () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
  };

  btn.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
  });

  mobileMenuCloseBtn.addEventListener("click", mobileMenuCloseFunc);
  overlay.addEventListener("click", mobileMenuCloseFunc);
}

//ACCORDION MENU

const accordionBtn = document.querySelectorAll("[data-accordion-btn]");
const accordion = document.querySelectorAll("[data-accordion");

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", function () {
    const clickedBtn = this.nextElementSibling.classList.contains("active");

    for (let i = 0; i < accordion.length; i++) {
      if (clickedBtn) break;

      if (accordion[i].classList.contains("active")) {
        accordion[i].classList.remove("active");
        accordionBtn[i].classList.remove("active");
      }
    }

    this.nextElementSibling.classList.toggle("active");
    this.classList.toggle("active");
  });
}

// "use strict";

// // modal variables
// const modal = document.querySelector("[data-modal]");
// const modalCloseBtn = document.querySelector("[data-modal-close]");
// const modalCloseOverlay = document.querySelector("[data-modal-overlay]");

// // modal function
// const modalCloseFunc = function () {
//   modal.classList.add("closed");
// };

// // modal eventListener
// modalCloseOverlay.addEventListener("click", modalCloseFunc);
// modalCloseBtn.addEventListener("click", modalCloseFunc);

// // notification toast variables
// const notificationToast = document.querySelector("[data-toast]");
// const toastCloseBtn = document.querySelector("[data-toast-close]");

// // notification toast eventListener
// toastCloseBtn.addEventListener("click", function () {
//   notificationToast.classList.add("closed");
// });

// // mobile menu variables
// const mobileMenuOpenBtn = document.querySelectorAll(
//   "[data-mobile-menu-open-btn]"
// );
// const mobileMenu = document.querySelector("[data-mobile-menu]");
// const mobileMenuCloseBtn = document.querySelector(
//   "[data-mobile-menu-close-btn]"
// );
// const overlay = document.querySelector("[data-overlay]");

// for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
//   // mobile menu function
//   const mobileMenuCloseFunc = function () {
//     mobileMenu.classList.remove("active");
//     overlay.classList.remove("active");
//   };

//   mobileMenuOpenBtn[i].addEventListener("click", function () {
//     mobileMenu.classList.add("active");
//     overlay.classList.add("active");
//   });

//   mobileMenuCloseBtn.addEventListener("click", mobileMenuCloseFunc);
//   overlay.addEventListener("click", mobileMenuCloseFunc);
// }

// const accordionBtn = document.querySelectorAll("[data-accordion-btn]");
// const accordion = document.querySelectorAll("[data-accordion]");

// for (let i = 0; i < accordionBtn.length; i++) {
//   accordionBtn[i].addEventListener("click", function () {
//     const clickedBtn = this.nextElementSibling.classList.contains("active");

//     for (let i = 0; i < accordion.length; i++) {
//       if (clickedBtn) break;

//       if (accordion[i].classList.contains("active")) {
//         accordion[i].classList.remove("active");
//         accordionBtn[i].classList.remove("active");
//       }
//     }

//     this.nextElementSibling.classList.toggle("active");
//     this.classList.toggle("active");
//   });
// }
