const Intern = require('../lib/Intern.js');

describe('Construction', () => {
    it('Properly extends from Employee class', () => {
        const e = new Intern("Jack", 10, "jack@test.com","Harvard");
        expect(e);
      });

    it('When constructed, attributes should be set properly', () => {
    const e = new Intern("Jack", 10, "jack@test.com","Harvard");
    expect(e.name).toEqual("Jack");
    expect(e.id).toEqual(10);
    expect(e.email).toEqual("jack@test.com");
    expect(e.school).toEqual("Harvard");
    });
});

describe('Functions', () => {
  it("Functions should return the proper values", () => {
    const e = new Intern("Jack", 10, "jack@test.com","Harvard");
    expect(e.getName()).toEqual("Jack");
    expect(e.getId()).toEqual(10);
    expect(e.getEmail()).toEqual("jack@test.com");
    expect(e.getSchool()).toEqual("Harvard");
    expect(e.getRole()).toEqual("Intern");
  });

});
