const page = document.querySelectorAll('*');
const allClasses = Array.from(page);

const bubble = document.querySelector('.bubble');
const bubbleSrc = bubble.src;

const bubble1 = document.querySelector('.bubble-1');
const bubble1Src = bubble1.src;

const bubble2 = document.querySelector('.bubble-2');
const bubble2Src = bubble2.src;

const logotypeDark = document.querySelector('.logotype-dark');
const logotypeDarkSrc = logotypeDark.src;

const logotypeIF = document.querySelector('.logo-if');
const logotypeIFSrc = logotypeIF.src;

const logotypeMedium = document.querySelector('.logotype-medium');
const logotypeMediumSrc = logotypeMedium.src;

const logotypeSmall = document.querySelector('.logotype-small');
const logotypeSmallSrc = logotypeSmall.src;

const shapes = Array.from(document.querySelectorAll('.shape'));
const shape1Src = shapes[0].src;
const shape2Src = shapes[1].src;

const shapeMiddle = document.querySelector('.shape-middle');
const shapeMiddleSrc = shapeMiddle.src;

const toggleColorButton = document.querySelector('.toggle-color');
const toggleColorImage = toggleColorButton.querySelector('img');
const toggleColorImageSrc = toggleColorImage.src;
toggleColorButton.addEventListener('click', toggleColor);

const removeImageButton = document.querySelector('.remove-images');
const removeImageImage = removeImageButton.querySelector('img');
const removeImageImageSrc = removeImageImage.src;
const images = document.querySelectorAll('img');
removeImageButton.addEventListener('click', removeAllImages);

const text = document.querySelectorAll('p, h1, h2, a, button');

const increaseSizeButton = document.querySelector('.increase-size');
const increaseSizeImage = increaseSizeButton.querySelector('img');
const increaseSizeImageSrc = increaseSizeImage.src;
increaseSizeButton.addEventListener('click', () => changeSize('increase'));

const decreaseSizeButton = document.querySelector('.decrease-size');
const decreaseSizeImage = decreaseSizeButton.querySelector('img');
const decreaseSizeImageSrc = decreaseSizeImage.src;
decreaseSizeButton.addEventListener('click', () => changeSize('decrease'));

const increaseRowSizeButton = document.querySelector('.increase-row');
const increaseRowSizeImage = increaseRowSizeButton.querySelector('img');
const increaseRowSizeImageSrc = increaseRowSizeImage.src;
increaseRowSizeButton.addEventListener('click', () => changeRowSize('increase'));

const decreaseRowSizeButton = document.querySelector('.decrease-row');
const decreaseRowSizeImage = decreaseRowSizeButton.querySelector('img');
const decreaseRowSizeImageSrc = decreaseRowSizeImage.src;
decreaseRowSizeButton.addEventListener('click', () => changeRowSize('decrease'));

function removeAllImages() {
    images.forEach(image => {
        image.classList.toggle('no_image');
    });
}

function toggleColor() {
    allClasses.forEach(element => {
            element.classList.toggle('contrast');
    });
    if(bubble.src == bubbleSrc){
        bubble.src = 'contrast_images/bubble-contrast.svg';
        bubble1.src = 'contrast_images/bubble-1-contrast.svg';
        bubble2.src = 'contrast_images/bubble-2-contrast.svg';
        logotypeDark.src = 'contrast_images/logotype-dark-contrast.svg';
        logotypeIF.src = 'contrast_images/logotype-ifsp-contrast.png';
        logotypeMedium.src = 'contrast_images/logotype-medium-contrast.svg';
        logotypeSmall.src = 'contrast_images/logotype-small-contrast.svg';
        shapeMiddle.src = 'contrast_images/shape-1-mobile-contrast.png';
        shapes[0].src = 'contrast_images/shape-1-mobile-contrast.png';
        shapes[1].src = 'contrast_images/shape-2-mobile-contrast.png';
        toggleColorImage.src = 'contrast_images/contrast-contrast.svg';
        removeImageImage.src = 'contrast_images/removeImg-contrast.svg';
        increaseSizeImage.src = 'contrast_images/font1-contrast.svg';
        decreaseSizeImage.src = 'contrast_images/font2-contrast.svg';
        increaseRowSizeImage.src = 'contrast_images/line1-contrast.svg';
        decreaseRowSizeImage.src = 'contrast_images/line2-contrast.svg';
    }else{
        bubble.src = bubbleSrc;
        bubble1.src = bubble1Src;
        bubble2.src = bubble2Src;
        logotypeDark.src = logotypeDarkSrc;
        logotypeIF.src = logotypeIFSrc;
        logotypeMedium.src = logotypeMediumSrc;
        logotypeSmall.src = logotypeSmallSrc;
        shapeMiddle.src = shapeMiddleSrc;
        shapes[0].src = shape1Src;
        shapes[1].src = shape2Src;
        toggleColorImage.src = toggleColorImageSrc;
        removeImageImage.src = removeImageImageSrc;
        increaseSizeImage.src = increaseSizeImageSrc;
        decreaseSizeImage.src = decreaseSizeImageSrc;
        increaseRowSizeImage.src = increaseRowSizeImageSrc;
        decreaseRowSizeImage.src = decreaseRowSizeImageSrc;
    }
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

function changeRowSize(operation){
    if(operation == 'increase')
        value = 1.3;
    else
        value = 0.7;

    text.forEach(element => {
        const style = window.getComputedStyle(element);
        const oldSize = parseFloat(style.lineHeight);
        element.style.lineHeight = `${oldSize * value}px`;
    });
}