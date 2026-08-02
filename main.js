const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", !expanded);
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("show");
  });

  const links = navLinks.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", false);
    });
  });
}

window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (nav) nav.classList.toggle("scrolled", window.scrollY > 0);
});
