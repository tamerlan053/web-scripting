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
        .then((letters) => {
            let array = [];

            letters.forEach((letter) => {
                array.push(letter.letter);
            })

            for (let i = 0; i < 6; i++) {
                let randomNumber = document.createTextNode(generateRandom(array));
                let spanElement = document.createElement('span');
                spanElement.appendChild(randomNumber);
                divDice.appendChild(spanElement);
            }
    })
    .catch(error => {
        console.error("Fetch error: ", error);
    });
}

window.addEventListener('load', init);
