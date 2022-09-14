// importing custom classes
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

// importing inquirer
const inquirer = require("inquirer");
// importing fs
const fs = require('fs');


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
        else {
            writeFiles();
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

function createHTML() {
    let retStr = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content=
            "width=device-width, initial-scale=1,shrink-to-fit=no">
      
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href=
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                integrity=
    "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
             crossorigin="anonymous">
               
        <link rel="stylesheet" href=
    "https://use.fontawesome.com/releases/v5.4.1/css/all.css"
                integrity=
    "sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz"
                 crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Employee Team Profiles</title>
    </head>
    <header>
        <div class="jumbotron jumbotron-fluid text-center">
            <div class="container">
              <h1 class="display-4">My Team</h1>
              <p class="lead">Check out my team!</p>
            </div>
          </div>
    </header>
    <body>
        <div id="card-row-container" class="container">
            <div class="d-inline-flex justify-content-start container">`;
            index = 0;
    for (const e of employeeList) {
        retStr += createCard(e);
        index ++;
        if (index % 3 === 0 && employeeList[index]) {
            retStr += `</div> 
            <div class="d-inline-flex justify-content-start container">`
        }
    }
    retStr += `</div>
    </div>
</body>
<script src="https://code.jquery.com/jquery-3.2.1.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous">
    </script>
      
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous">
    </script>
  
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous">
    </script>
</body>
</html>`;
//console.log(retStr);
    return retStr;
}

function createCSS() {
    return `.jumbotron {
        background-color: rgb(232,71,86);
        color: white;
    }
    
    .card {
        box-shadow: 5px 5px 5px black;
        margin: 10px;
    }
    
    .card-top {
        background-color: rgb(0,119,247);
        color: white;
        padding: 10px;
        
    }
    
    .card-bottom {
        padding:10px;
        background-color: rgb(246,247,249);
        border: 1px solid black;
    }
    
    #card-row-container {
        /* background-color: green; */
        width: 100%;
    }
    
    
    .card-columns {
        column-count: 3;
    }
    `
}

function writeFiles() {
    fs.writeFile('./dist/index.html', createHTML(), (err) =>
    err ? console.error(err) : console.log('HTML success!'));
    fs.writeFile('./dist/style.css', createCSS(), (err) =>
    err ? console.error(err) : console.log('CSS success!')); 

}

function createCard(employee) {
    let extraAttribute;
    console.log(employee.name,"\tconstructor name",employee.constructor.name);
    switch (employee.constructor.name) {
        case "Manager":
            extraAttribute = `Office #: ${employee.getOfficeNumber()}`;
            break;
        case "Engineer":
            extraAttribute = `Github: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a>`;
            break;
        case "Intern":
            extraAttribute = `School: ${employee.getSchool()}`;
            break;
    }
    return `<div class="col-4">
                <div class="card" >
                    <div class="card-block">
                        <div class="card-top">
                            <h2 class="card-title">${employee.name}</h2>
                            <h3 class="card-text">
                                ${employee.getRole()}
                            </h3>
                        </div>
                        <div class="card-bottom">
                            <ul class="list-group list-group-flush card-list">
                            <li class="list-group-item">ID: ${employee.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                            <li class="list-group-item">${extraAttribute}</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>`;
}


async function main() {
    console.log("Welcome! To begin setting up your team, please create a manager profile.");

    const myManager = await createManager("manager");
    console.log("Thank you for setting up your manager profile!");
    promptContinue();
}


main();