const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('getName method', () => {
        it("should get the employee's name", () => {
            const employee = new Employee('Jose', 106512, 'jdelvalle88@live.com');
      
            // Verify that the new object has the correct properties
            expect(employee.name).toEqual('Jose');
            expect(employee.id).toEqual(106512);
            expect(employee.email).toEqual('jdelvalle88@live.com');
          });
    })
})