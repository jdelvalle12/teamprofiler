const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./lib/employee');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');

const generateHTML = ({name, Id, role, school, officeNumber, github, email}) => {

  `<!DOCTYPE html>
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
          <h1 class="card-header" input="name">${name}</h1>
          <h3 input="role">${role}</h3>
          <p input="id">${Id}</p>
          <p input="office number">${officeNumber}</p>
          </div>
          </div>
          </div>
      </section>
  
      <section id="container background-color-blue text-align-center text-white">
          <div class="engineer">
          <div class="col-12 col-md-4">
          <div class="card">
          <h1 class="card-header" input="name">${name}</h1>
          <h3 input="role">${role}</h3>
          <p input="id">${id}</p>
          <p input="email">${email}</p>
          <p input="github">${github}</p>
          </div>
          </div>
          </div>
      </section>
  
      <section id="container background-color-blue text-align-center text-white">
          <div class="intern">
          <div class="col-12 col-md-4">
          <div class="card">
          <h1 class="card-header" input="name">${name}</h1>
          <h3 input="role">${role}</h3>
          <p input="id">${id}</p>
          <p input="email">${email}</p>
          <p input="school">${school}</p>
          </div>
          </div>
          </div>
      </section>
  </body>
  </html>`

const manager = () => {
  return inquirer
    .prompt ([
          {
            type: 'input',
            name: 'name',
            message: 'What is the manager name?',
          },
          {
            type: 'input',
            message: 'What is the manager Id?',
            name: 'Id',
          },
          {
            type: 'input',
            message: 'What is the employee role?',
            name: 'role',
          },
          {
            type: 'input',
            name: 'office number',
            message: 'What is the manager office number?',
          },
      ])
    .then((answers) => {
    const htmlPageContent = generateHTML(answers);
    fs.writeFile('index.html', htmlPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
      );
    });

  }
};



// TODO: Create a function to initialize app
function init () {}
  
// Function call to initialize app
init();