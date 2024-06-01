'use strict';

const fonts = ['Arial', 'Verdana', 'Times New Roman', 'Courier New', 'Georgia']
const sizes = [8, 10, 12, 16, 20, 24, 28]

function fillSelect(select, options) {
    options.forEach(option => {
        let optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.appendChild(document.createTextNode(option));
        select.appendChild(optionElement);
    });
}

function handleLoad() {
    let select_fonts = document.getElementById('select_lettertype');
    let select_sizes = document.getElementById('select_fontsize');

    fillSelect(select_fonts, fonts);
    fillSelect(select_sizes, sizes);
}

window.addEventListener('load', handleLoad);
