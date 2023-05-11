console.log('Hello from Nerdbord!');

const colors = ['red', 'black', 'orange', 'blue'];
const boxBorder = document.querySelector('.box');

function getRandomInt(max) {
    return  Math.floor(Math.random() * 4);
}
function changeBorderColor() {
    boxBorder.style.borderColor = colors[getRandomInt(4)];
}

setInterval(changeBorderColor, 3000);
