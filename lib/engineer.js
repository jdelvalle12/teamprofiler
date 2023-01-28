const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github ) {
    super(name, id, email);
    this.github = github;
    }
    getGitHub() { //GitHub username
        return this.github;
    }
    getRole() { //Overidden to return 'Engineer'
        return 'Engineer';
    }
};

module.exports = Engineer;