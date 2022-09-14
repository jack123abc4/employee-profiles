const Employee = require('../lib/Employee.js');

describe('Construction', () => {
  it('When constructed, attributes should be set properly', () => {
    const e = new Employee("Jack", 10, "jack@test.com");
    expect(e.name).toEqual("Jack");
    expect(e.id).toEqual(10);
    expect(e.email).toEqual("jack@test.com");
  });
});

describe('Functions', () => {
  it("Functions should return the proper values", () => {
    const e = new Employee("Jack", 10, "jack@test.com");
    expect(e.getName()).toEqual("Jack");
    expect(e.getId()).toEqual(10);
    expect(e.getEmail()).toEqual("jack@test.com");
    expect(e.getRole()).toEqual("Employee");
  });

});
