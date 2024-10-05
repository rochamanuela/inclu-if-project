const page = document.querySelectorAll('*');
const allClasses = Array.from(page);
const toggleColorButton = document.querySelector('.toggle-color');
toggleColorButton.addEventListener('click', toggleColor);

const removeImageButton = document.querySelector('.remove-images')
const images = document.querySelectorAll('img');
removeImageButton.addEventListener('click', removeAllImages);

const text = document.querySelectorAll('p, h1, a');
const increaseSizeButton = document.querySelector('.increase-size');
const decreaseSizeButton = document.querySelector('.decrease-size');
increaseSizeButton.addEventListener('click', () => changeSize('increase'))
decreaseSizeButton.addEventListener('click', () => changeSize('decrease'))

function removeAllImages() {
    images.forEach(image => {
        image.classList.toggle('no_image');
    });
}

function toggleColor() {
    allClasses.forEach(element => {
        if(element.classList.contains('contrast'))
            element.classList.remove('contrast');
        else
            element.classList.add('contrast');
    });
}

function changeSize(operation){
    if(operation == 'increase')
        value = 1.1;
    else
        value = 0.9;

    text.forEach(element => {
        const style = window.getComputedStyle(element);
        const oldSize = parseFloat(style.fontSize);
        element.style.fontSize = `${oldSize * value}px`;
    });
}