const  inquirer = require('inquirer');
const fs = require('fs');
const employee = require('employee');

const generateHTML = [name, ID, role, school, officeNumber,  ]

inquirer
    .prompt ([
          {
            type: 'input',
            name: 'name',
            message: 'What is the employee name?',
          },
          {
            type: 'input',
            message: 'What is the employee ID?',
            name: 'ID',
          },
          {
            type: 'input',
            message: 'What is the employee role?',
            name: 'role',
          },
          {
            type: 'input',
            name: 'school',
            message: 'What school is the employee attend?',
          },
          {
            type: 'input',
            name: 'office number',
            message: 'What is the office number?',
          },
          {
            type: 'input',
            name: 'github',
            message: 'What is the employee GitHub link?',
          },
          {
            type: 'input',
            name: 'email address',
            message: 'What is the employee email address?',
          },
      ])
    .then((answers) => {
    const readMeContent = generateMarkdown(answers);
    fs.writeFile('README.md', readMeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  );
});


// TODO: Create a function to initialize app
function init () {}
  
// Function call to initialize app
init();