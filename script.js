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

// Variables to select elements
const menuAccessibility = document.getElementById('open-menu-accessibility')
const closeMenuAccessibility = document.getElementById('close-menu-accessibility')
const internalButtons = document.getElementById('internal-buttons')

// Function to toggle the menu
function toggleMenuAccessibility() { 
    internalButtons.classList.toggle('open')
    overlay.classList.toggle('open')
}

// Event listeners for opening/closing the menu
menuAccessibility.addEventListener('click', toggleMenuAccessibility)
closeMenuAccessibility.addEventListener('click', toggleMenuAccessibility)
overlay.addEventListener('click', toggleMenuAccessibility)

// Selecionar todos os botões de accordion
const buttons = document.querySelectorAll('.accordion-button');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        // Pegar o conteúdo correspondente
        const content = this.nextElementSibling;
        const icon = this.querySelector('.icon');

        // Alternar o display do conteúdo entre "block" e "none"
        if (content.style.display === 'block') {
            content.style.display = 'none';
            icon.textContent = '+'; // Alterar para o ícone "+"
        } else {
            content.style.display = 'block';
            icon.textContent = '-'; // Alterar para o ícone "-"
        }
    });
});
