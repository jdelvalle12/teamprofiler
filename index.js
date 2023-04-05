const inquirer = require('inquirer');
const fs = require('fs');
//Import Classes
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const generateHTML = require('./src/generateHTML');

const employee = [];

// const promptManager = () => {
//   return inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is the manager name?',
//       validate: (input) => {
//         if (input) {
//           return true;
//         } else {
//           console.log("Please input valid name");
//         }
//       },
//     },
//     {
//       type: 'input',
//       message: 'What is the manager ID?',
//       name: 'id',
//       validate: (input) => {
//         if (input) {
//           return true;
//         } else {
//           console.log("Please input valid id");
//         }
//       },
//     },
//     {
//       type: 'input',
//       message: 'What is the manager email?',
//       name: 'email',
//       validate: (input) => {
//         if (input) {
//           return true;
//         } else {
//           console.log("Please input valid email");
//         }
//       },
//     },
//     {
//       type: 'input',
//       name: 'officeNumber',
//       message: 'What is the manager office number?',
//       validate: (input) => {
//         if (input) {
//           return true;
//         } else {
//           console.log("Please input valid office number");
//         }
//       },
//     },
//   ])
//   .then((managerInfo) => {
//     const { name, id, email, officeNumber} = managerInfo;
//     const manager = new Manager(name, id, email, officeNumber);
//     employee.push(manager);
//     promptQuestions();
//   });
// };


const promptQuestions = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'question',
      message: 'What would you like to do?',
      choices: ['Manager', 'Engineer', 'Intern', 'Finish team building', 'EXIT'],
    },
    {
      type: 'input',
      name: 'name',
      message: "What is the team member's name?",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log('Please input valid name');
        }
      },
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the team member's ID?",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log('Please input valid ID');
        }
      },
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the team member's email?",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log('Please input valid email');
        }
      },
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Enter Office Number:',
      when: function(answers) {
        return answers.question === 'Manager';
      },
      validate: function(value) {
        if (value) {
          return true;
        } else {
          console.log('Please input a valid value');
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter Github Username:',
      when: function(answers) {
        return answers.question === 'Engineer';
      },
      validate: function(value) {
        if (value) {
          return true;
        } else {
          console.log('Please input a valid value');
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: 'Enter School Name:',
      when: function(answers) {
        return answers.question === 'Intern';
      },
      validate: function(value) {
        if (value) {
          return true;
        } else {
          console.log('Please input a valid value');
        }
      }
    }
  ])
    .then((employeeInfo) => {
      const { name, id, email, officeNumber, github, school, question } = employeeInfo;
      switch (question) {
        case 'Manager':
          const manager = new Manager(name, id, email, officeNumber);
          employee.push(manager);
          break;
        case 'Engineer':
          const engineer = new Engineer(name, id, email, github);
          employee.push(engineer);
          break;
        case 'Intern':
          const intern = new Intern(name, id, email, school);
          employee.push(intern);
          break;
        case 'Finish team building':
          console.log('team built successfully!');
          // const teamHTML = generateHTML(employee);
          // fs.writeFile('./dist/index.html', teamHTML, (err) => {
          //   if (err) {
          //     console.log(err);
          //   } else {
          //     console.log('Team profile page has been created!');
          //   }
          // });
          return;
        case 'EXIT':
          console.log('Goodbye!');
          return;
        default:
          console.log('Please select a valid option!');
          break;
      }
      return promptQuestions();
    });
};

function writeToFile(data) {
  fs.writeFile('./dist/index.html', data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Team profile page has been created!');
    }
  });
}

function start() {
  promptQuestions().then((data) => {
    const employee = generateHTML(data);
    writeToFile(employee);
    // send teamHTML to the browser here
  });
}

start();

      // promptManager()
      //       .then(promptQuestions) 
      //       .then(function(employee) {
      //         return generateHTML(employee);
      //       })
      //       .then(function(teamHTML) {
      //         return teamHTML;
      //       })
      //       .catch(function (err) {console.log(err)
      //       });

    // {
    //   type: 'input',
    //   name: 'github',
    //   message: 'Enter Github Username:',
    //   when: function(answers) {
    //     return answers.role === 'Engineer';
    //   },
    //   validate: function(value) {
    //     if (value) {
    //       return true;
    //     } else {
    //       console.log('Please input a valid value');
    //     }
    //   }
    // },
    // {
    //   type: 'input',
    //   name: 'school',
    //   message: 'Enter School Name:',
    //   when: function(answers) {
    //     return answers.role === 'Intern';
    //   },
    //   validate: function(value) {
    //     if (value) {
    //       return true;
    //     } else {
    //       console.log('Please input a valid value');
    //     }
    //   }
    // }
  
    // .then((upNext) => {
    //   switch (upNext.question) {
    //     case 'Add Engineer':
    //       promptEngineer();
    //       return;
    //       case 'Add Intern':
    //         promptIntern();
    //         return;
    //       case 'Finish team building':
    //         console.log('team built successfully!');
    //         const teamHTML = generateHTML(teamMember);
    //         fs.writeFile('./dist/index.html', teamHTML, (err) => {
    //           if(err) {
    //             console.log(err);
    //           } else {
    //             console.log('Team profile page has been created!');
    //           }
    //         });
    //           return;
    //         default:
    //           console.log("Please select an option!");
    //           promptQuestions();
    //           return;
    //           }
    //         });
    //       };
        

     

// const promptEngineer = () => {
//   return inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is the engineer name?',
//       validate: (name) => {
//         if (name) {
//           return true;
//         } else {
//           console.log("please input employee name");
//         }
//       },
//     },
//     {
//       type: 'input',
//       message: 'What is the Engineer ID?',
//       name: 'id',
//       validate: (id) => {
//         if (id) {
//           return true;
//         } else {
//           console.log("please input Engineer ID");
//         }
//       },
//     },
//     {
//       type: 'input',
//       message: 'What is the Engineer email?',
//       name: 'email',
//       validate: (email) => {
//         if (email) {
//           return true;
//         } else {
//           console.log("please input Engineer email");
//         }
//       },
//     },
//     {
//       type: 'input',
//       name: 'github',
//       message: 'What is the Engineer Github username?',
//       validate: (github) => {
//         if (github) {
//           return true;
//         } else {
//           console.log("Please input Engineer GitHub");
//         }
//       },
//     },
//   ])
//   .then((engineerInfo) => {
//     const { name, id, email, github} = engineerInfo;
//     const engineer = new Engineer(name, id, email, github);
//     teamMember.push(engineer);
//   });
// };

// const promptIntern = () => {
//   return inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is the intern name?',
//       validate: (name) => {
//         if (name) {
//           return true;
//         } else {
//           console.log("Please input intern name");
//         }
//       },
//     },
//     {
//       type: 'input',
//       message: 'What is the intern ID?',
//       name: 'id',
//       validate: (id) => {
//         if (id) {
//           return true;
//         } else {
//           console.log("Please input Intern id");
//         }
//       },
//     },
//     {
//       type: 'input',
//       message: 'What is the Intern email?',
//       name: 'email',
//       validate: (email) => {
//         if (email) {
//           return true;
//         } else {
//           console.log("Please input Intern email");
//         }
//       },
//     },
//     {
//       type: 'input',
//       name: 'school',
//       message: 'What is the Intern school?',
//       validate: (school) => {
//         if (school) {
//           return true;
//         } else {
//           console.log("Please input Intern school");
//         }
//       },
//     },
//   ])
//   .then((internInfo) => {
//     const { name, id, email, school} = internInfo;
//     const intern = new Intern(name, id, email, school);
//     teamMember.push(intern);
//   });
// };

// const init = async () => {
//   const teamMember = [];

//   // Prompt for manager
//   const managerAnswers = await promptManager();
//   const managerCard = generateHTML(managerAnswers);
//   teamMember.push(managerCard);

//   // Prompt for engineers
//   const numEngineers = 2; // Example: prompt for two engineers
//   for (let i = 0; i < numEngineers; i++) {
//     const engineerAnswers = await promptEngineer();
//     const engineerCard = generateHTML (engineerAnswers);
//     teamMember.push(engineerCard);
//   }

//   //Prompt for interns
//   const numInterns = 1; // Example: prompt for one intern
//   for (let i = 0; i < numInterns; i++) {
//     const internAnswers = await promptIntern();
//     const internCard = generateHTML(internAnswers);
//     teamMember.push(internCard);
//   }

//   // Generate HTML file
//   const teamHTML = generateHTML(teamMember);
//   fs.writeFile('./dist/index.html', teamHTML, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('Team profile page has been created!');
//     }
//   });
// };

// init();
  
