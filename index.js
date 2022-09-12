// importing custom classes
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

// importing inquirer
const inquirer = require("inquirer");

e = new Employee("Jack",0,"jack@test.com");
m = new Manager("John",1,"john@test.com",101);
eng = new Engineer("Jason", 2, "jason@test.com", "jasonGit");

console.log(e.getName(),e.getId(),e.getEmail(),e.getRole());
console.log(m.getName(),m.getId(),m.getEmail(),m.getRole(),m.officeNumber);
console.log(eng.getName(),eng.getId(),eng.getEmail(),eng.getRole(),eng.getGithub());