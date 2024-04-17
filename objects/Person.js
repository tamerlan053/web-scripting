'use strict';

class Person {
    constructor(firstName, lastName, dateOfBirth) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._dateOfBirth = dateOfBirth;
    }

    set lastName(lastName) {
        this._lastName = lastName;
    }

    get lastName() {
        return this._lastName;
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }

    get firstName() {
        return this._firstName;
    }

    set dateOfBirth(dateOfBirth) {
        this._dateOfBirth = dateOfBirth;
    }

    get dateOfBirth() {
        return this._dateOfBirth;
    }

    calculateAge() {
        let currentDate = new Date();
        let birthYear = this.dateOfBirth.getFullYear();
        let currentYear = currentDate.getFullYear();
        let age = currentYear - birthYear;

        let birthdayPassed = (currentDate.getMonth() > this.dateOfBirth.getMonth() || (currentDate.getMonth() === this.dateOfBirth.getMonth() && currentDate.getDate() >= this.dateOfBirth.getDate()));

        if (!birthdayPassed) {
            age--;
        }
        return age;
    }

    print() {
        console.log(this.firstName + " " + this.lastName + " " + this.calculateAge());
    }
};

let person = new Person("John", "Gould", new Date(1999, 8, 27));

console.log(person.print());
