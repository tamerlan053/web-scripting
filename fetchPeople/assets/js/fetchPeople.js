'use strict';

window.addEventListener('load', loaded);

function loaded() {
    let buttonGetAllPeople = document.getElementById('button_get_all_people');
    buttonGetAllPeople.addEventListener("click", handleGetAllPeople);
    let buttonGetPerson = document.getElementById('button_get_person');
    buttonGetPerson.addEventListener("click", handleGetPerson);
    let buttonPost = document.getElementById('button_post_person');
    buttonPost.addEventListener("click", handlePostPerson);
    let buttonGetPersonByName = document.getElementById('button_get_person_by_name');
    buttonGetPersonByName.addEventListener("click", handleGetPersonByName);
    let buttonPutPerson = document.getElementById('button_put_person');
    buttonPutPerson.addEventListener("click", handlePutPerson);
}

function handleGetAllPeople() {
    let url = 'http://localhost:3000/people/'
    let output = document.getElementById("div_output");
    makeElementEmpty(output);
    fetch(url)
    .then((response) => {
        if (response.status == 200) {
            return response.json();
        } else {
            throw `Error with status ${response.status}`;
        }
    })
    .then((people) => {
        let data = [];
        for (let person of people) {
            data.push([person.id, person.name]);
        }
        let table = makeTable(data);
        output.appendChild(table);
    })
    .catch((error) => {
        output.appendChild(document.createTextNode(error));
    });
}

function handleGetPerson() {
    let url = 'http://localhost:3000/people/';
    let id = document.getElementById("txt_id").value;
    let output = document.getElementById("div_output");
	
    makeElementEmpty(output);
    if (id.trim() != ''){
	    fetch(url + id)
    	    .then((response) => {
    	        if (response.status == 200) {
    	            return response.json();
    	        } else {
    	            throw `Error with status ${response.status}`;
    	        }
    	    })
    	    .then((person) => {
    	        let data = [];
    	        data.push([person.id, person.name]);
    	        let table = makeTable(data);
    	        output.appendChild(table);
    	    })
    	    .catch((error) => {
    	        output.appendChild(document.createTextNode(error));
    	    });
	}
}

function handleGetPersonByName() {
    let url = 'http://localhost:3000/people/';
    let name = document.getElementById("txt_name").value; 
    let output = document.getElementById("div_output");
	
    makeElementEmpty(output);
    if (name.trim() != ''){
	    fetch(url + `?name=${name}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw `Error with status ${response.status}`;
                }
            })
            .then((persons) => {
                let data = [];
                for (let person of persons) {
                    data.push([person.id, person.name])
                }
                let table = makeTable(data);
                output.appendChild(table);
            })
            .catch((error) => {
                output.appendChild(document.createTextNode(error));
            })
	}
}

function handlePostPerson() {
    let url = 'http://localhost:3000/people/';
    let output = document.getElementById("div_output");
    let name = document.getElementById("txt_name").value;
    let person = {name: name}; 
    makeElementEmpty(output);
    fetch(url,
        {
            method: "POST",
            body: JSON.stringify(person),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if (response.status == 201) {
                return response.json();
            } else {
                throw `Error with status ${response.status}`;
            }
        })
	.then((person) => {
	    let data = [];
	    data.push([person.id, person.name]);
	    let table = makeTable(data);
	    output.appendChild(table);
	})
	.catch((error) => {
	    output.appendChild(document.createTextNode(error));
	});
}

function handleGetPersonByName() {
	
}

function makeElementEmpty(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
}
