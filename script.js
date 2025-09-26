// Toggle mobile menu
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
if (toggle) {
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Dark mode toggle
const darkToggle = document.querySelector(".dark-toggle");
if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      darkToggle.textContent = "☀️"; // sun icon
    } else {
      darkToggle.textContent = "🌙"; // moon icon
    }
  });
}
