// navigation.js

// Get the hamburger icon and navigation menu
const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

// Add a click event listener to the hamburger icon
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('hide'); // Toggle the visibility of the navigation menu
});
