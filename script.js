const btnNavigation = document.querySelector(".burger");
const menuNavigation = document.querySelector(".nav-liens");
const itemsNavigation = document.querySelectorAll(".nav-liens li a");

btnNavigation.addEventListener("click", () => {
  menuNavigation.classList.toggle("active");

  if (menuNavigation.classList.contains("active")) {
    btnNavigation.innerHTML = `<ion-icon name = 'close-outline'></ion-icon>`;
  } else {
    btnNavigation.innerHTML = `<ion-icon name = 'menu-outline'></ion-icon>`;
  }
});

itemsNavigation.forEach(function (lien) {
  lien.addEventListener("click", () => {
    menuNavigation.classList.remove("active");
  });
});

const btnSearch = document.querySelector(".nav-search");
const modalSearch = document.querySelector(".nav-modal-search");

btnSearch.addEventListener("click", () => {
  modalSearch.classList.toggle("active");
});
