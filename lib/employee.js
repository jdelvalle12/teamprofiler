const inquirer = require('inquirer');
const fs = require('fs');
// const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

class Employee { //Class Employee with the following properties and methods
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }//Method to print employee info
    printInfo() {
      console.log(`This employee name is ${this.name}`);
      console.log(`This employee id number is ${this.id}`);
      console.log(`This employee email address is ${this.email}`);
    }
    getName() { //Method to get the employee name
        return this.name;
    }
    getId() {  //Method to get the employee id
        return this.id;
    }
    getEmail() { //Method to get the employee email
        return this.email;
    }
    getRole() {    //Returns 'Employee'
        return 'Employee';
    }
};


module.exports = Employee;
