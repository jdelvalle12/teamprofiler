const Employee = require('./employee');

class Intern {
    constructor(name, id, email, school ) {
    // super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
    }
    getSchool() { 
        return this.school;
    }
    getRole() { //Overidden to return 'Intern'
        return 'Intern';
    }
};

module.exports = Intern;