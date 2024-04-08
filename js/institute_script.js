const body = document.querySelector("body");
const filterButton = document.querySelector(".filtersvg");
// const filterBox = document.querySelector(".filterBox");

let prevScrollPos = window.scrollY;

function dynamicNavLinks() {
  const currentScrollPos = window.scrollY;

  if (currentScrollPos > 120) {
    body.classList.add("scrolled");
  } else {
    body.classList.remove("scrolled");
  }

  if (currentScrollPos < prevScrollPos) {
    body.classList.remove("scrolled");
  }

  prevScrollPos = currentScrollPos;
}

function filterToggle() {
  body.classList.toggle("filterOn");
}

filterButton.addEventListener("click", filterToggle);

document.addEventListener("scroll", dynamicNavLinks);
document.addEventListener("DOMContentLoaded", dynamicNavLinks);
