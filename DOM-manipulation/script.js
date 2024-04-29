'use strict';

function handleLoad() {
    let form = document.querySelector("form");
    form.addEventListener("input", handleClick);
}

function handleClick() {
    let inputs = document.getElementsByTagName('input');

    if (inputs[0].value !== "" && inputs[1].value !== "") {
        let value1 = parseInt(inputs.namedItem("value1").value);
        let value2 = parseInt(inputs.namedItem("value2").value);
        let output = document.querySelector("output");
    }
}
