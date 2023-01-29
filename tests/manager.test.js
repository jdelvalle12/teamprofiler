const Employee = require('../lib/employee');
const Manager = require('../lib/manager'); 

describe('Manager', () => {
    describe('getName method', () => {
        it("should get the manager's name", () => {
            const manager = new Manager('Jose');
            // Verify that the new object has the correct property
            expect(manager.name).toEqual('Jose');           
          })
    })
    describe('getId method', () => {
        it("should get the manager's Id", () => {
            const manager = new Manager(127843);
            // Verify that the new object has the correct property
            expect(manager.id).toEqual(127843)
        })
    })
    describe('getEmail method', () => {
        it("should get the manager's email", () => {
            const manager = new Manager('');
            // Verify that the new object has the correct property
            expect(manager.email).toEqual('');
        })
    })
    describe('getRole method', () => {
        it("should display manager's role", () => {
            const manager = new Manager('manager');
            // Verify that the new object has the correct property
            expect(manager.role).toEqual('manager');
        })
    })
});