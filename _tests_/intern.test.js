const Employee = require('../lib/employee');
const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('getName method', () => {
        it("should get the intern's name", () => {
            const intern = new Intern('Jose');
            // Verify that the new object has the correct property
            expect(intern.name).toEqual('Jose');           
          })
    })
    describe('getId method', () => {
        it("should get the intern's Id", () => {
            const intern = new Intern(464723);
            // Verify that the new object has the correct property
            expect(intern.id).toEqual(464723)
        })
    })
    describe('getEmail method', () => {
        it("should get the intern's email", () => {
            const intern = new intern('jdelvalle88@live.com');
            // Verify that the new object has the correct property
            expect(intern.email).toEqual('jdelvalle88@live.com');
        })
    })
    describe('getSchool method', () => {
        it("should display intern's school", () => {
            const intern = new Intern('UCF');
            // Verify that the new object has the correct property
            expect(intern.school).toEqual('UCF');
        })
    })
    describe('getRole method', () => {
        it("should display intern's role", () => {
            const intern = new Intern('intern');
            // Verify that the new object has the correct property
            expect(intern.role).toEqual('intern');
        })
    })
});