const Engineer= require('../lib/Engineer.js');

describe('Construction', () => {
    it('Properly extends from Employee class', () => {
        const e = new Engineer("Jack", 10, "jack@test.com","jackGit");
        expect(e);
      });

    it('When constructed, attributes should be set properly', () => {
    const e = new Engineer("Jack", 10, "jack@test.com","jackGit");
    expect(e.name).toEqual("Jack");
    expect(e.id).toEqual(10);
    expect(e.email).toEqual("jack@test.com");
    expect(e.github).toEqual("jackGit");
    });
});

describe('Functions', () => {
  it("Functions should return the proper values", () => {
    const e = new Engineer("Jack", 10, "jack@test.com","jackGit");
    expect(e.getName()).toEqual("Jack");
    expect(e.getId()).toEqual(10);
    expect(e.getEmail()).toEqual("jack@test.com");
    expect(e.getGithub()).toEqual("jackGit");
    expect(e.getRole()).toEqual("Engineer");
  });

});
