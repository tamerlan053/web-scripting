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

            let input = document.createElement('input');
            input.setAttribute('id', 'word');
            input.setAttribute('placeholder', 'Enter a word');
    })
    .catch(error => {
        console.error("Fetch error: ", error);
    });
}

function generateRandom(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function checkWord() {
    let inputValue = document.getElementById("word").value;
    let output = document.querySelector('output');
    makeElementEmpty(output)
    let spanElements = document.querySelectorAll('span');
    let array = [];

    for (let i = 0; i < spanElements.length; i++) {
        array.push(spanElements[i].firstChild.nodeValue);
    }

    console.log(array);

    if (inputValue === "") {
        let errorNode = document.createTextNode("Please enter a word first");
        output.appendChild(errorNode);
    } else {
        let correct = isCorrect(inputValue, array);
        if (correct) {
            let url = `http://localhost:3000/words/?word=${inputValue}`;
            fetch(url)
                .then((response) => {
                    if (response.ok) {
                        console.log("Connection successful");
                        return response.json();
                    } else {
                        throw new Error("Error with status: " + response.status);
                    }
                })
                .then((data) => {
                    if (data.length === 0) {
                        let errorNode = document.createTextNode(`${inputValue} is not in the list!`);
                        output.appendChild(errorNode);
                    }  output.appendChild(document.createTextNode(infoNode));
                    }
                })
                .catch(error => {
                    console.error("Fetch error: ", error);
                });
        } else {
            let errorNode = document.createTextNode(`${inputValue} contains invalid letters!`);
            output.appendChild(errorNode);
        }
    }
}

window.addEventListener('load', init);
