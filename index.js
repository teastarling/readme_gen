// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
let questions = [
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installation',
        default: 'npm i',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Test instructions:',
        name: 'test',
        default: 'npm test',
    },
    {
        type: 'list',
        message: 'Please choose application license:',
        name: 'license',
        choices: ['MIT', 'Apache', 'BSD-3', 'none'],
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
`# ${data.title}

${generateMarkdown.renderLicenseBadge(data.license)}

## Table of Contents
* [Description](#description)
* [Installation Instructions](#installation)
* [Usage Information](#usage)
* [Contribution Guidelines](#contributing)
* [Test Instructions](#test)
${generateMarkdown.renderLicenseLink(data.license)}
* [Questions](#questions)

## Description
${data.description}

## Installation
    ${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Test
    ${data.test}

\n${generateMarkdown.renderLicenseSection(data.license)}\n

## Questions
* Please contact me at my [Github](https://github.com/${data.github})
* Or contact me by email at [${data.email}](mailto:${data.email})`;

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
