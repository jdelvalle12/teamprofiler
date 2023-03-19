const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('getName method', () => {
        it("should get the employee's name", () => {
            const employee = new Employee('Jose', 106512, 'jdelvalle88@live.com');
            // Verify that the new object has the correct property
            expect(employee.getName()).toEqual('Jose');           
          });
    });
    describe('getId method', () => {
        it("should get the employee's Id", () => {
            const employee = new Employee('Jose', 106512, 'jdelvalle88@live.com');
            // Verify that the new object has the correct property
            expect(employee.getId()).toEqual(106512)
        });
    });
    describe('getEmail method', () => {
        it("should get the employee's email", () => {
            const employee = new Employee('Jose', 106512, 'jdelvalle88@live.com');
            // Verify that the new object has the correct property
            expect(employee.getEmail()).toEqual('jdelvalle88@live.com');
        });
    });
    describe('getRole method', () => {
        it("should display employee's role", () => {
            const employee = new Employee('employee');
            // Verify that the new object has the correct property
            expect(employee.getRole()).toEqual('Employee');
        });
    });
});