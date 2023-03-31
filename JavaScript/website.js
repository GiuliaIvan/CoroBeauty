/*------------ SHOW MENU-------------*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
  /*validates if the variables exist*/
  if (toggle && nav) {
    /*here I add the show-menu class in the div with the nav__menu class*/
    toggle.addEventListener("click", () => {
      /*add the show-menu class to the div that has the nav-menu id */
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav");

/*------------ REMOVE MENU MOBILE -------------*/
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav");
  /*When a link or close button is clicked the show-menu class will be removed*/
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== LEAVE THE LINK CLICKED WITH THE CLASS ACTIVE-LINK ====================*/
const linkColor = document.querySelectorAll(".nav__link");

function colorLink() {
  if (linkColor) {
    linkColor.forEach((L) => L.classList.remove("active-link"));
    this.classList.add("active-link");
  }
}

linkColor.forEach((L) => L.addEventListener("click", colorLink));
/*==================== CHANGE HEADER COLOR ====================*/
function scrollHeader() {
  const scrollHeader = document.getElementById("header");
  if (this.scrollY >= 100) scrollHeader.classList.add("scroll-header");
  else scrollHeader.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);