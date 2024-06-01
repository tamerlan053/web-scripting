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
    let pip = document.getElementById('p_example');

    fillSelect(select_fonts, fonts);
    fillSelect(select_sizes, sizes);

    select_fonts.addEventListener('change', () => {
        pip.style.fontFamily = select_fonts.value;
    })

    select_sizes.addEventListener('change', () => {
        pip.style.fontSize = select_sizes.value + 'px';
    })
}

window.addEventListener('load', handleLoad);
