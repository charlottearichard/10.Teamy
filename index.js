// NPM
const generateTeamy = require("./src/teamytemp.js");
const fs = require("fs");
const Employee = require("./lib/Employee");
const inquirer = require("inquirer");

const teamQuestions = [
  //Managers Questions
  {
    type: "input",
    name: "name",
    message: "What is the team managers name?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Don't forget to enter team managers name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please provide the team managers email: ",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Don't forget to enter team managers Id!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "Please provide team managers id:",
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Don't forget to enter the Id!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "office",
    message: "Please provide team managers office number:",
    validate: (officeInput) => {
      if (officeInput) {
        return true;
      } else {
        console.log("Don't forget to enter the office number!");
        return false;
      }
    },
  },
];

function init() {
  inquirer.prompt(teamQuestions);
}
init();
