const Employee = require('./employee');

class Manager extends Employee { //Class Manager with the following properties & method
    constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    }
    getRole() { //Overridden to return 'Manager'
        return 'Manager';
    }
};

module.exports = Manager;