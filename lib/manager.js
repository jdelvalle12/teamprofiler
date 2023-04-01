const Employee = require('./employee');

//Class Manager with the following properties & method extending to Employee
class Manager extends Employee { 
    constructor(name, id, email, officeNumber) {
    super (name, id, email);
    this.officeNumber = officeNumber;
    }
    getOfficeNumber() { //Method to get the office number
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
};


module.exports = Manager;