const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

// Toggle Mobile Menu
const navToggle = () => {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
};

// Check if Click Outside
const clickOutside = (event) => {
  if (menu.contains(event.target) || btn.contains(event.target)) return;
  return btn.classList.contains("open") && navToggle();
};

btn.addEventListener("click", navToggle);
window.addEventListener("click", clickOutside);
