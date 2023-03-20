const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('getName method', () => {
        it("should get the engineer's name", () => {
            const engineer = new Engineer('Jose', 92170, 'jdelvalle88@live.com', 'jdelvalle12');
            // Verify that the new object has the correct property
            expect(engineer.getName()).toEqual('Jose');           
          });
    });
    describe('getId method', () => {
        it("should get the engineer's Id", () => {
            const engineer = new Engineer('Jose', 92170, 'jdelvalle88@live.com', 'jdelvalle12');
            // Verify that the new object has the correct property
            expect(engineer.getId()).toEqual(92170)
        });
    });
    describe('getEmail method', () => {
        it("should get the engineer's email", () => {
            const engineer = new Engineer('Jose', 92170, 'jdelvalle88@live.com', 'jdelvalle12');
            // Verify that the new object has the correct property
            expect(engineer.getEmail()).toEqual('jdelvalle88@live.com');
        });
    });
    describe('getGithub method', () => {
        it("should display engineer's GitHub username", () => {
            const engineer = new Engineer('Jose', 92170, 'jdelvalle88@live.com', 'jdelvalle12');
            // Verify that the new object has the correct property
            expect(engineer.getGithub()).toEqual('jdelvalle12');
        });
    });
    describe('getRole method', () => {
        it("should display engineer's role", () => {
            const engineer = new Engineer('engineer');
            // Verify that the new object has the correct property
            expect(engineer.getRole()).toEqual('Engineer');
        });
    });
});