const Employee = require('./Employee');

//Class Manager with the following properties & method extending to Employee
class Manager extends Employee { 
    constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = 'manager';
    }
    getOfficeNumber() { //Method to get the office number
        return this.officeNumber;
    }
};


module.exports = Manager;