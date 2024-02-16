const button = document.querySelector('button');
const body = document.body;

let span = document.querySelector('span');

function randomColorGenerator(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const randomColor = `rgb(${red},${green},${blue})`;
    return randomColor;
}

button.addEventListener('click',()=>{
    const randomColor = randomColorGenerator();
    body.style.backgroundColor = randomColor;
    span.textContent = randomColor;
});
