const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text')

function printText() {   
    const text = textInput.value;
    memeText.innerText = text;
}

textInput.addEventListener('input', printText);

// Código utilizado para realizar o upload da imagem retirado de https://codepen.io/vanessametonini/pen/zLmzNY?editors=1010

const memeInsert = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');

function printImage() {
    const image = memeInsert.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);

    function generateImage(load) {
        memeImage.src = load.target.result;
    }

    reader.addEventListener('loadend', generateImage);
}

memeInsert.addEventListener('input', printImage);

const memeImageContainer = document.getElementById('meme-image-container');

const fireButton = document.getElementById('fire');

function fireBorder() {
    memeImageContainer.style.border = 'dashed 3px red';
}

fireButton.addEventListener('click', fireBorder);

const waterButton = document.getElementById('water');

function waterBorder() {
    memeImageContainer.style.border = 'double 5px blue';
}

waterButton.addEventListener('click', waterBorder);

const earthButton = document.getElementById('earth');

function earthBorder() {
    memeImageContainer.style.border = 'groove 6px green';
}

earthButton.addEventListener('click', earthBorder);

const meme1Button = document.getElementById('meme-1');

function printMeme1() {
    memeImage.src = 'imgs/meme1.png';
}

meme1Button.addEventListener('click', printMeme1);

const meme2Button = document.getElementById('meme-2');

function printMeme2() {
    memeImage.src = 'imgs/meme2.png';
}

meme2Button.addEventListener('click', printMeme2);

const meme3Button = document.getElementById('meme-3');

function printMeme3() {
    memeImage.src = 'imgs/meme3.png';
}

meme3Button.addEventListener('click', printMeme3);

const meme4Button = document.getElementById('meme-4');

function printMeme4() {
    memeImage.src = 'imgs/meme4.png';
}

meme4Button.addEventListener('click', printMeme4);