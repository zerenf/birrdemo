const hamburger = document.querySelector(".hamburger");
const respMenu = document.querySelector("#respMenu");

hamburger.addEventListener("click", () => {
  respMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

const respMenuLi = document.querySelectorAll("#respMenu li").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    respMenu.classList.remove("active");
  })
);

// ************** scrolled *****************

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 250) {
    navbar.classList.add("scrolled");
  } else if (window.scrollY <= 250) {
    navbar.classList.remove("scrolled");
  }
});
