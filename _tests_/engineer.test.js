const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('getName method', () => {
        it("should get the engineer's name", () => {
            const engineer = new Engineer('Jose');
            // Verify that the new object has the correct property
            expect(engineer.name).toEqual('Jose');           
          })
    })
    describe('getId method', () => {
        it("should get the engineer's Id", () => {
            const engineer = new Engineer(092170);
            // Verify that the new object has the correct property
            expect(engineer.id).toEqual(092170)
        })
    })
    describe('getEmail method', () => {
        it("should get the engineer's email", () => {
            const engineer = new Engineer('jdelvalle88@live.com');
            // Verify that the new object has the correct property
            expect(engineer.email).toEqual('jdelvalle88@live.com');
        })
    })
    describe('getGitHub method', () => {
        it("should display engineer's GitHub username", () => {
            const engineer = new Engineer('jdelvalle12');
            // Verify that the new object has the correct property
            expect(engineer.github).toEqual('jdelvalle12');
        })
    })
    describe('getRole method', () => {
        it("should display engineer's role", () => {
            const engineer = new Engineer('engineer');
            // Verify that the new object has the correct property
            expect(engineer.role).toEqual('engineer');
        })
    })
});