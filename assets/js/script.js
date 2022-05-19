const modal = document.querySelector("[data-modal]");
const modalCloseBtn = document.querySelector("[data-modal-close]");
const modalCloseOverlay = document.querySelector("[data-modal-overlay]");

//modal close function
const modalCloseFunc = () => {
  modal.classList.add("closed");
};

//modal overlay close eventlistener
modalCloseOverlay.addEventListener("click", modalCloseFunc);
//modal  close button  eventlistener
modalCloseBtn.addEventListener("click", modalCloseFunc);
