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

async function promptUser(questions) {
    // name, email, officenumber
    let e;
    await inquirer.prompt(questions)
    .then((response) => {
        e = response;
    }
    );
    return Promise.resolve(e);
}

async function createManager() {
    const questions = [
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
    ]
    const response = await promptUser(questions);
    const man = new Manager(response.name, employeeList.length, response.email, response.officeNum);
    employeeList.push(man);
    return Promise.resolve(man);
}

async function createEngineer() {
    // name, email, github
    const questions = [
        {
            type: "input",
            message: "What is the engineer's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the engineer's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the engineer's github?",
            name: "github",
        },
    ]
    const response = await promptUser(questions);
    const eng = new Engineer(response.name, employeeList.length, response.email, response.github);
    employeeList.push(eng);
    return Promise.resolve(eng);
}

async function createIntern() {
    // name, email, school
    const questions = [
        {
            type: "input",
            message: "What is the intern's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the intern's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the intern's school?",
            name: "school",
        },
    ]
    const response = await promptUser(questions);
    const intern = new Intern(response.name, employeeList.length, response.email, response.school);
    employeeList.push(intern);
    return Promise.resolve(intern);
}

async function createEmployee(type) {
    switch(type) {
        case "manager":
            await createManager();
            break;
        case "engineer":
            await createEngineer();
            break;
        case "intern":
            await createIntern();
            break;
    }
    promptContinue();

}

function promptContinue() {
    console.log("Current employee list:", employeeList);
    inquirer.prompt(
        {
            type: "confirm",
            message: "Would you like to add another employee?",
            name: "userContinue",
        }
    )
    .then((response) => { 
        //console.log("promptContinue response was",response);
        if (response.userContinue) {
            askEmployee();
        }
    }
    );
}

function askEmployee() {
    inquirer.prompt(
        {
            type: "list",
            name: "employeeType",
            message: "What kind of employee would you like to add?",
            choices: ["engineer", "intern"]
        }
    )
    .then((response) => {
        //console.log("askEmployee response was",response);
        createEmployee(response.employeeType);
})
}

async function main() {
    console.log("Welcome! To begin setting up your team, please create a manager profile.");

    const myManager = await createManager("manager");
    console.log("Thank you for setting up your manager profile!");
    promptContinue();
}


main();