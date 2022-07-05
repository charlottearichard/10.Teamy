const inquirer = require("inquirer");
const fs = require("fs");

// team generator format
const generateTeamy = require("./src/teamytemp.js");

// team members
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const TeamMembers = [];

// MANAGER QUESTIONS
const teamQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please provide Team Managers name:",
      },
      {
        type: "input",
        name: "id",
        message: "Please provide Team Mangers Id",
      },
      {
        type: "input",
        name: "email",
        message: "Please provide Team Managers email:",
      },
      {
        type: "input",
        name: "office",
        message: "Please provide Team Managers office number:",
      },
      {
        type: "list",
        name: "newTeamMember",
        message:
          "Would you like to add a new employee or finish creating your team?",
        choices: ["Add Engineer", "Add Intern", "Create team"],
      },
    ])
    .then((info) => {
      const { name, id, email, office, newTeamMember } = info;
      const manager = new Manager(name, id, email, office);

      TeamMembers.push(manager);

      return newTeamMember;
    });
};

// ENGINEER QUESTIONS
const createTeamMember = (info) => {
  if (info === "Add Engineer") {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Please provide Team Engineer's name:",
        },
        {
          type: "input",
          name: "id",
          message: "Please provide Team Engineer's id:",
        },
        {
          type: "input",
          name: "email",
          message: "Please provide Team Enginer's email:",
        },
        {
          type: "input",
          name: "git",
          message: "Please provide Team Engineer's github:",
        },
        {
          type: "list",
          name: "newTeamMember",
          message:
            "Would you like to add a new employee or finish creating your team?",
          choices: ["Add Engineer", "Add Intern", "Create Team"],
        },
      ])
      .then((info) => {
        const { name, id, email, git, newTeamMember } = info;
        const engineer = new Engineer(name, id, email, git);

        TeamMembers.push(engineer);

        createTeamMember(newTeamMember);
      });

    // INTERN QUESTIONS
  } else if (info === "Add Intern") {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Please provide Intern's name:",
        },
        {
          type: "input",
          name: "id",
          message: "Please provide Intern's Id:",
        },
        {
          type: "input",
          name: "email",
          message: "Please provide Intern's email:",
        },
        {
          type: "input",
          name: "uni",
          message: "What university does the Intern attend?",
        },
        {
          type: "list",
          name: "newTeamMember",
          message:
            "Would you like to add a new employee or finish creating your team?",
          choices: ["Add Engineer", "Add Intern", "Create Team"],
        },
      ])
      .then((info) => {
        const { name, id, email, uni, newTeamMember } = info;
        const intern = new Intern(name, id, email, uni);

        TeamMembers.push(intern);

        createTeamMember(newTeamMember);
      });
  } else {
    const generateTeamy = TeamMembers;
    return writeFile(generateTeamy);
  }
};

// Write HTML File
const writeFile = (fileName, info) => {
  return () => {
    fs.writeFile("./dist/" + fileName, info, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Successfully wrote:" + fileName);
    });
  };
};

teamQuestions()
  .then((info) => {
    createTeamMember(info);
  })
  .catch((err) => {
    console.log(err);
  });
