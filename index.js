// importing custom classes
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

// importing inquirer
const inquirer = require("inquirer");

e = new Employee("Jack",0,"jack@test.com");
m = new Manager("John",1,"john@test.com",101);

console.log(e.getName(),e.getId(),e.getEmail(),e.getRole());
console.log(m.getName(),m.getId(),m.getEmail(),m.getRole(),m.officeNumber);