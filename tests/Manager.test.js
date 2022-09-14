const Manager = require('../lib/Manager.js');

describe('Construction', () => {
    it('Properly extends from Employee class', () => {
        const e = new Manager("Jack", 10, "jack@test.com",101);
        expect(e);
      });

    it('When constructed, attributes should be set properly', () => {
    const e = new Manager("Jack", 10, "jack@test.com",101);
    expect(e.name).toEqual("Jack");
    expect(e.id).toEqual(10);
    expect(e.email).toEqual("jack@test.com");
    expect(e.officeNumber).toEqual(101);
    });
});

describe('Functions', () => {
  it("Functions should return the proper values", () => {
    const e = new Manager("Jack", 10, "jack@test.com",101);
    expect(e.getName()).toEqual("Jack");
    expect(e.getId()).toEqual(10);
    expect(e.getEmail()).toEqual("jack@test.com");
    expect(e.getOfficeNumber()).toEqual(101);
    expect(e.getRole()).toEqual("Manager");
  });

});
