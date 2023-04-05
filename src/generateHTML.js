
const teamHTML = (generatedCards) => {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather&family=Oxygen&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="./style.css" />
        <title>Team Players</title>
      </head>
      <body>
        <header class="background-color-red text-align-center text-black">
          <div id="header">
            <a href="index.html" class="logo">Team Players</a>
          </div>
        </header>
        <section class="container background-color-blue text-align-center text-black">
            
                ${generatedCards}
             
        </section>
      </body>
    </html>`;
};

const generateManager = (manager) => {
    return `<section class="container background-color-blue text-align-center text-black">
    <div class="manager">
      <div class="col-12 col-md-4">
        <div class="card">
          <h1 class="card-header" data-input="name">${manager.name}</h1>
          <h3 data-input="role">${manager.email}</h3>
          <p data-input="id">Employee ID: ${manager.id}</p>
          <p data-input="office number">Office Number: ${manager.officeNumber}</p>
        </div>
      </div>
    </div>
  </section>`;
};

const generateEngineer = (engineer) => {

    return `<section class="container background-color-blue text-align-center text-black">
            <div class="engineer">
              <div class="col-12 col-md-4">
                <div class="card">
                  <h1 class="card-header" data-input="name">${engineer.name}</h1>
                  <p data-input="id">Employee ID: ${engineer.id}</p>
                  <p data-input="email">Email Address: ${engineer.email}</p>
                  <p data-input="github">GitHub: ${engineer.github}</p>
                </div>
              </div>
            </div>
          </section>`;
    };

const generateIntern = (intern) => {
    return `<section class="container background-color-blue text-align-center text-black">
      <div class="intern">
        <div class="col-12 col-md-4">
          <div class="card">
      <h1 class="card-header" data-input="name">${intern.name}</h1>
      <p data-input="id">Employee ID: ${intern.id}</p>
      <p data-input="email">Email Address: ${intern.email}</p>
      <p data-input="school">School: ${intern.school}</p>
      </div>
      </div>
      </div>
  </section>`;
};

const generateHTML = (data) => {
 
  if(!data) {
    return '';
  }
    const generatedCards = data.map(data => {
      switch(data.getRole()) {
        case 'Manager':
          return generateManager(data);
        case 'Engineer':
          return generateEngineer(data);
        case 'Intern':
          return generateIntern(data);
        default:
          return '';
      }
    }).join('');
  
    return teamHTML(generatedCards);
  };

  module.exports = generateHTML;