const HomeTemplate = require('../components/HomeTemplate.11ty')
const AboutTemplate = require('../components/AboutTemplate.11ty')

module.exports = async ({ cms }) => {
  return /*html*/ `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Home</title>
        </head>
        <body>
          <style>
            section {
              background-color: var(--backgroundColor);
              color: var(--color);
            }
          </style>
            ${HomeTemplate(cms.HERO)}
            ${AboutTemplate(cms.ABOUT)}
        </body>
        </html>
    `;
};

