// importing custom classes
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

// importing inquirer
const inquirer = require("inquirer");


let employeeList = [];
// employee = new Employee("Jack",0,"jack@test.com");
// manager = new Manager("John",1,"john@test.com",101);
// engineer = new Engineer("Jason", 2, "jason@test.com", "jasonGit");
// intern = new Intern("Jacqueline", 3, "jackie@test.com","Harvard");

// console.log(employee.getName(),employee.getId(),employee.getEmail(),employee.getRole());
// console.log(manager.getName(),manager.getId(),manager.getEmail(),manager.getRole(),manager.officeNumber);
// console.log(engineer.getName(),engineer.getId(),engineer.getEmail(),engineer.getRole(),engineer.getGithub());
// console.log(intern.getName(),intern.getId(),intern.getEmail(),intern.getRole(),intern.getSchool());

function createManager() {
    // name, email, officenumber
    inquirer.prompt([
    {
        type: "input",
        message: "What is the manager's name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is the manager's email?",
        name: "email",
    },
    {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNum",
    },
    ])
    .then((response) => {
        console.log(response);
        employeeList.push(new Manager(response.name, employeeList.length, response.email, response.officeNum));
        console.log("list:",employeeList);
        createManager();
    }
    );
}

function createEngineer() {
    // name, email, github
}

function createIntern() {
    // name, email, school
}

createManager();