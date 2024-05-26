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
    buttonGetPersons=ByName.addEventListener("click", handleGetPersonByName);
    let buttonPutPerson = document.getElementById('button_put_person');
    buttonPutPerson.addEventListener("click", handlePutPerson);
}
