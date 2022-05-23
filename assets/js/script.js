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
