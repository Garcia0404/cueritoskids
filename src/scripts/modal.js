const button = document.querySelector("#modal-button");
const dialog = document.querySelector("dialog");
button?.addEventListener("click", () => {
  dialog?.showModal();
});
