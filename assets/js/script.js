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
const mobileMenu = document.querySelectorAll("[data-mobile-menu]");
const mobileMenuCloseBtn = document.querySelectorAll(
  "[data-mobile-menu-close-btn]"
);
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
  // mobile menu open & close function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove("active");
    overlay.classList.remove("active");
  };

  mobileMenuOpenBtn[i].addEventListener("click", function () {
    mobileMenu[i].classList.add("active");
    overlay.classList.add("active");
  });

  mobileMenuCloseBtn[i].addEventListener("click", mobileMenuCloseFunc);
  overlay.addEventListener("click", mobileMenuCloseFunc);
}
