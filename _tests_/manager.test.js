// const Employee = require('../lib/employee');
const Manager = require('../lib/manager'); 

describe('Manager', () => {
    let manager;
    beforeEach(() =>{
        manager = new Manager('Jose', 127843, 'jdelvalle88@live.com', '386');
    });
    describe('getName method', () => {
        it("should get the manager's name", () => {
            
            // Verify that the new object has the correct property
            expect(manager.getName()).toEqual('Jose');           
          })
    })
    describe('getId method', () => {
        it("should get the manager's Id", () => {
            
            // Verify that the new object has the correct property
            expect(manager.getId()).toEqual(127843)
        })
    })
    describe('getEmail method', () => {
        it("should get the manager's email", () => {
            
            // Verify that the new object has the correct property
            expect(manager.getEmail()).toEqual('jdelvalle88@live.com');
        })
    })
    describe('getOfficeNumber method', () => {
        it("should display manager's office number", () => {
            
            // Verify that the new object has the correct property
            expect(manager.getOfficeNumber()).toEqual('386');
        })
    })
    describe('getRole method', () => {
        it("should display manager's role", () => {
            
            // Verify that the new object has the correct property
            expect(manager.getRole()).toEqual('Manager');
        })
    })
});