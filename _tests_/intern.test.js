// const Employee = require('../lib/employee');
const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('getName method', () => {
        it("should get the intern's name", () => {
            const intern = new Intern('Jose', 464723, 'jdelvalle88@live.com', 'UCF');
            // Verify that the new object has the correct property
            expect(intern.getName()).toEqual('Jose');           
          });
    });
    describe('getId method', () => {
        it("should get the intern's Id", () => {
            const intern = new Intern('Jose', 464723, 'jdelvalle88@live.com', 'UCF');
            // Verify that the new object has the correct property
            expect(intern.getId()).toEqual(464723)
        });
    });
    describe('getEmail method', () => {
        it("should get the intern's email", () => {
            const intern = new Intern('Jose', 464723, 'jdelvalle88@live.com', 'UCF');
            // Verify that the new object has the correct property
            expect(intern.getEmail()).toEqual('jdelvalle88@live.com');
        });
    });
    describe('getSchool method', () => {
        it("should display intern's school", () => {
            const intern = new Intern('Jose', 464723, 'jdelvalle88@live.com', 'UCF');
            // Verify that the new object has the correct property
            expect(intern.getSchool()).toEqual('UCF');
        });
    });
    describe('getRole method', () => {
        it("should display intern's role", () => {
            const intern = new Intern('intern');
            // Verify that the new object has the correct property
            expect(intern.getRole()).toEqual('Intern');
        });
    });
});
