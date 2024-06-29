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

            let button = document.createElement('button');
            let buttonText = document.createTextNode("Check word");
            button.appendChild(buttonText);

            wordInput.appendChild(input);
            wordInput.appendChild(button);

            button.addEventListener('click', checkWord);
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
                    } else if (data.length === 1) {
                        let infoNode = document.createTextNode(`${inputValue} is in the list at id: ${data[0].id}`);
                        output.appendChild(infoNode);
                    } else {
                        let infoNode = `${inputValue} is in the list at ids: `;
                        for (let i = 0; i < data.length; i++) {
                            infoNode += data[i].id + " ";
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

function isCorrect(word, array) {
    word = word.toLowerCase();
    let wordArray = word.split('');
    let letters = [];
    for (let item of array) {
        letters.push((item.toLowerCase()));
    }
    let counter = 0;
    for (let letter of wordArray) {
        if (letters.indexOf(letter) === -1) {
            counter += 1;
        }
    }
    if (counter > 0) {
        return false;
    }
    return true;
}

window.addEventListener('load', init);
