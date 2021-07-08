// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
let questions = [
    {
        type: 'input',
        message: 'Project Title:',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Project description:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Installation instructions:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage information:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Contribution guidelines:',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Test instructions:',
        name: 'test',
    },
    {
        type: 'checkbox',
        message: 'Please choose application license:',
        name: 'license',
        choices: ['one', 'two', 'three'],
    },
    {
        type: 'input',
        message: 'Please enter GitHub username:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Please enter email address:',
        name: 'email',
    }
];

// TODO: Create a function to write README file
const generateReadme = (data) =>
    `#${data.title}
    ##Project Description
    ${data.description}
    ##Installation Instructions
    ${data.installation}
    ##Usage Information
    ${data.usage}
    ##Contribution Guidelines
    ${data.contribution}
    ##Test Instructions
    ${data.test}
    ##License Information
    ${data.license}
    ##Questions
    Please contact me at my [Github](https://github.com/${data.github})
    Or contact me by email at [${data.email}](mailto:${data.email})`;

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            const readmeContent = generateReadme(data);

            fs.writeFile('READMEnew.md', readmeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README!')
            )});
}

// Function call to initialize app
init();
