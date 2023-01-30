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
            const manager = new Manager('jdelvalle88@live.com');
            // Verify that the new object has the correct property
            expect(manager.email).toEqual('jdelvalle88@live.com');
        })
    })
    describe('getOfficeNumber method', () => {
        it("should display manager's office number", () => {
            const manager = new Manager('386');
            // Verify that the new object has the correct property
            expect(manager.officeNumber).toEqual('386');
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