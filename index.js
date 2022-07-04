// NPM
const inquire = require("inquirer");
const generateTeamy = require("./src/teamytemp.js");

const generateTeam = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is team members name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Enter name");
          return false;
        }
      },
    },
  ]);
};
