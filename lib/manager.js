const Employee = require('../lib/employee');
// const Manager = require('../lib/manager');
//Class Manager with the following properties & method extending to Employee
class Manager { 
    constructor(name, id, email, officeNumber) {
    //super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
    }
    getOfficeNumber() { //Method to get the office number
        return this.officeNumber;
    }
    getRole() { //Overridden to return 'Manager'
        return 'Manager';
    }
};


module.exports = Manager;