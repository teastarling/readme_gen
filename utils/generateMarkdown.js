// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';

    case 'Apache':
      return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    

    case 'BSD-3':
      return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';

    default:
      return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (license !== "none"){
    return "* [License Information](#license)";
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  switch (license) {
    case 'MIT':
      return '## License \n [MIT](https://choosealicense.com/licenses/mit/)';
    break;

    case 'Apache':
      return '## License \n [Apache](https://choosealicense.com/licenses/apache-2.0/)';
    break;

    case 'BSD-3':
      return '## License \n [BSD](https://choosealicense.com/licenses/bsd-3-clause-clear/)';
    break;
    default:
      return '';
  }
}


// functions to export for use on index.js
module.exports = {renderLicenseLink, renderLicenseBadge, renderLicenseSection};
