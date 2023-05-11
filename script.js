console.log('Hello from Nerdbord!');

const colors = ['red', 'black', 'orange', 'blue'];
const boxBorder = document.querySelector('.box');

function getRandomInt(max) {
    return  Math.floor(Math.random() * max);
}
function changeBorderColor() {
    boxBorder.style.borderColor = colors[getRandomInt(colors.length)];
}

setInterval(changeBorderColor, 3000);
