'use strict';

let output = document.getElementById("output");
let table = document.createElement("table");

const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

let tr = document.createElement("tr");
let headers = ["Name", "Height", "Place"];

for (let headertext of headers) {
    let headerElement = document.createElement("th");
    let headerText = document.createTextNode(headertext);
    headerElement.appendChild(headerText);
    tr.appendChild(headerElement);
}

table.appendChild(tr);

for (let mountain of MOUNTAINS) {
    let row = document.createElement("tr");

        for (let key of Object.keys(mountain)) {
        let cell = document.createElement("td");
        let textNode = document.createTextNode(mountain[key]);
        cell.appendChild(textNode);
        row.append(cell);
    }

    table.appendChild(row);
}

output.appendChild(table);
