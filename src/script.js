const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbarLinks = document.querySelector(".navbar-links");
const navbarEndButton = document.querySelector(".navbar-end-button");

hamburgerMenu.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  navbarEndButton.classList.toggle("active");
});
