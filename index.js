const createTeam = require("./src/html-template");
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const teamMemberInfo = [];

const questions = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      message: "What's your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What's your ID'?",
      name: "id",
    },
    {
      type: "input",
      message: "What's a good Email of yours'?",
      name: "email",
    },
    {
      type: "list",
      message: "What's your Position?",
      name: "role",
      choices: ["Manager", "Engineer", "Intern"],
    },
  ]);

  if (answers.role === "Manager") {
    const managerAns = await inquirer.prompt([
      {
        type: "input",
        message: "What Officer Number are you in?",
        name: "officeNumber",
      },
    ]);
    const newManager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      managerAns.officeNumber
    );
    teamMemberInfo.push(newManager);
  } else if (answers.role === "Engineer") {
    const githubAns = await inquirer.prompt([
      {
        type: "input",
        message: "What's your GitHub username?",
        name: "github",
      },
    ]);
    const newEngineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      githubAns.github
    );
    teamMemberInfo.push(newEngineer);
  } else if (answers.role === "Intern") {
    const internAns = await inquirer.prompt([
      {
        type: "input",
        message: "What's College did you go to?",
        name: "school",
      },
    ]);

    const newIntern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      internAns.school
    );
    teamMemberInfo.push(newIntern);
  }
};

async function askQuestions() {
  await questions();
  const addTeamAnswers = await inquirer.prompt([
    {
      name: "addTeamMember",
      type: "list",
      choices: ["Add Additional Team Member", "Create team"],
      message: "What's Next?",
    },
  ]);

  if (addTeamAnswers.addTeamMember === "Add Additional Team Member") {
    return askQuestions();
  }
  return GenTeamHTML();
}

askQuestions();

function GenTeamHTML() {
  fs.writeFileSync("./dist/index.html", createTeam(teamMemberInfo), "utf-8");
}
