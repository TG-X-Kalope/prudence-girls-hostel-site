// Get buttons and menu
const mobileMenuButton = document.getElementById("mobile-menu-button");
const closeMenuButton = document.getElementById("close-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = mobileMenu.querySelectorAll("a"); // Select all navigation links inside the mobile menu

// Open the menu
mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
});

// Close the menu
closeMenuButton.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});

// Close the menu when any navigation link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});