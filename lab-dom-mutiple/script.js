const buttons = document.querySelectorAll('button');

const box = document.querySelector('#box');

const redButton = document.querySelector('.red');
redButton;

const greenButton = document.querySelector('.green');
greenButton;

const blueButton = document.querySelector('.blue');
blueButton;


<div id=​"box">​</div>​
 buttons.forEach(button => {
  button.addEventListener('click', () => {
    const color = button.innerHTML;
    box.style.background = color;
  });
});
