// importing custom classes
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

// importing inquirer
const inquirer = require("inquirer");

employee = new Employee("Jack",0,"jack@test.com");
manager = new Manager("John",1,"john@test.com",101);
engineer = new Engineer("Jason", 2, "jason@test.com", "jasonGit");
intern = new Intern("Jacqueline", 3, "jackie@test.com","Harvard");

console.log(employee.getName(),employee.getId(),employee.getEmail(),employee.getRole());
console.log(manager.getName(),manager.getId(),manager.getEmail(),manager.getRole(),manager.officeNumber);
console.log(engineer.getName(),engineer.getId(),engineer.getEmail(),engineer.getRole(),engineer.getGithub());
console.log(intern.getName(),intern.getId(),intern.getEmail(),intern.getRole(),intern.getSchool());