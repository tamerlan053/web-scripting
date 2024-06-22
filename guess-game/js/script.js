'use strict';

function init() {
    let button = document.getElementById('rollBtn');
    button.addEventListener('click', rollDice);
}

function rollDice() {
    let url = 'http://localhost:3000/letters/';
    let divDice = document.getElementById('dice');
}

window.addEventListener('load', init);
