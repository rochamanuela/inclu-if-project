// Variables to select elements
const menuIcon = document.getElementById('open-menu-icon')
const closeMenuIcon = document.getElementById('close-menu-icon')
const internalLinks = document.getElementById('internal-links')
const overlay = document.getElementById('overlay')

// Function to toggle the menu
function toggleMenu() {
    internalLinks.classList.toggle('open')
    overlay.classList.toggle('open')
}

// Event listeners for opening/closing the menu
menuIcon.addEventListener('click', toggleMenu)
closeMenuIcon.addEventListener('click', toggleMenu)
overlay.addEventListener('click', toggleMenu)
