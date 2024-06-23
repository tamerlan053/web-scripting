'use strict';

function init() {
    let button = document.getElementById('rollBtn');
    button.addEventListener('click', rollDice);
}

function rollDice() {
    let url = 'http://localhost:3000/letters/';
    let divDice = document.getElementById('dice');
    let wordInput = document.getElementById('wordInput');
    makeElementEmpty(divDice);
    makeElementEmpty(wordInput);

    fetch(url)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Error with status: " + response.status);
        }
    })
}

window.addEventListener('load', init);
