// Smooth scroll nav highlighting
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  links.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector("nav ul");
menuToggle.addEventListener("click", () => {
  navList.classList.toggle("show");
});

// Scroll-in animations using Intersection Observer
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2, // 20% of the card must be visible
  }
);

cards.forEach((card) => observer.observe(card));
