const body = document.querySelector("body");
const filterButton = document.querySelector(".filtersvg");
const filterBox = document.querySelector(".filterBox");
const filterMain = document.querySelector("#formBox");

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

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    body.classList.remove("filterOn");
    filterButton.focus();
  }
});

var focusableElements = filterMain.querySelectorAll(
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
);
var lastElement = focusableElements[focusableElements.length - 1];

lastElement.addEventListener("blur", function () {
  if (!filterMain.contains(document.activeElement)) {
    const firstChildren = document.querySelector(".filterChild");
    firstChildren.querySelector("input").focus();
  }
});

filterButton.addEventListener("click", filterToggle);

document.addEventListener("scroll", dynamicNavLinks);
document.addEventListener("DOMContentLoaded", dynamicNavLinks);
