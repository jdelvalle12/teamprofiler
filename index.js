const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const manager = new Manager('Jose', 127843, 'jdelvalle88@live.com', '386');
const engineer = new Engineer('Jose', 92170, 'jdelvalle88@live.com', 'jdelvalle12');
const intern = new Intern('Jose', 464723, 'jdelvalle88@live.com', 'UCF');

console.log(manager);
console.log(engineer);
console.log(intern);

const generateHTML = (answer) => {
  
  return `<!DOCTYPE html>
  
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Oxygen&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./dist/style.css" />
        <title>Team Players</title>
      </head>
      <body>
        <header class="background-color-red text-align-center text-white">
          <div id="header">  
            <a href="index.html" class="logo">Team Players</a>
          </div>
        </header>
        <section id="container background-color-blue text-align-center text-white">
          <div class="manager">
            <div class="col-12 col-md-4">
              <div class="card">
                <h1 class="card-header" input="name">${answer.name}</h1>
                <h3 input="role">${answer.role}</h3>
                <p input="id">Employee ID: ${answer.id}</p>
                <p input="office number">Office Number: ${answer.officeNumber}</p>
              </div>
            </div>
          </div>
        </section>
        <section id="container background-color-blue text-align-center text-white">
          <div class="engineer">
            <div class="col-12 col-md-4">
              <div class="card">
                <h1 class="card-header" input="name">${answer.name}</h1>
                <h3 input="role">${answer.role}</h3>
                <p input="id">Employee ID: ${answer.id}</p>
                <p input="email">Email Address: ${answer.email}</p>
                <p input="github">GitHub: ${answer.github}</p>
              </div>
            </div>
          </div>
        </section>
        <section id="container background-color-blue text-align-center text-white">
          <div class="intern">
            <div class="col-12 col-md-4">
              <div
          <div class="card">
          <h1 class="card-header" input="name">${answer.name}</h1>
          <h3 input="role">${answer.role}</h3>
          <p input="id">Employee ID: ${answer.id}</p>
          <p input="email">Email Address: ${answer.email}</p>
          <p input="school">School: ${answer.school}</p>
          </div>
          </div>
          </div>
      </section>
  </body>
  </html>`
};

const promptManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the manager name?',
    },
    {
      type: 'input',
      message: 'What is the manager ID?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is the manager email?',
      name: 'email',
    },
    {
      type: 'input',
      name: 'office number',
      message: 'What is the manager office number?',
    },
  ]);
};

const promptEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the engineer name?',
    },
    {
      type: 'input',
      message: 'What is the engineer ID?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is the engineer email?',
      name: 'email',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is the engineer Github username?',
    },
  ]);
};

const promptIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the intern name?',
    },
    {
      type: 'input',
      message: 'What is the intern ID?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is the intern email?',
      name: 'email',
    },
    {
      type: 'input',
      name: 'school',
      message: 'What is the intern school?',
    },
  ]);
};

const init = async () => {
  const teamMembers = [];

  // Prompt for manager
  const managerAnswers = await promptManager();
  const managerCard = generateHTML(managerAnswers);
  teamMembers.push(managerCard);

  // Prompt for engineers
  const numEngineers = 2; // Example: prompt for two engineers
  for (let i = 0; i < numEngineers; i++) {
    const engineerAnswers = await promptEngineer();
    const engineerCard = generateHTML (engineerAnswers);
    teamMembers.push(engineerCard);
  }

  //Prompt for interns
  const numInterns = 1; // Example: prompt for one intern
  for (let i = 0; i < numInterns; i++) {
    const internAnswers = await promptIntern();
    const internCard = generateHTML(internAnswers);
    teamMembers.push(internCard);
  }

  // Generate HTML file
  const html = generateHTML(teamMembers);
  writeToFile('index.html', html);
};

init();
  
