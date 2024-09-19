const clickButton = document.getElementById('clickButton');
const counterDisplay = document.getElementById('counter');
const resetButton = document.getElementById('resetButton');
let counter = 0; 
clickButton.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = counter;
});

resetButton.addEventListener('click', () => {
    counter = 0;
    counterDisplay.textContent = counter;
});