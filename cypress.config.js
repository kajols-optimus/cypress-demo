const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

module.exports = (on, config) => {
  require('cypress-mochawesome-reporter/plugin')(on);
  // require('@shelex/cypress-allure-plugin/writer');
};

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  env: {
   
 url : 'https://www.dunzo.com/order'
// url : 'https://www.jiomart.com/'

  },

  modifyObstructiveCode: true,
  experimentalSourceRewriting: true,
chromeWebSecurity: true,
responseTimeout: 30000,
  retries: {
    runMode: 0,
    openMode: 0
  },
  screenshotOnRunFailure: true,
  screenshotsFolder: 'mochawesome-report/assets',
  //screenshotsFolder: 'screenshots',
 // projectId: '4g1956',
 projectId : '4dkwwk',
   e2e: {
    
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      on('task', {
        excelToJsonConvertor(filePath)
        {
          const result = excelToJson({
            source: fs.readFileSync(filePath)
        })
        return result
      }
    })
      return config;
    },


  specPattern:
  
    'cypress/integration/cypressPOMTests/*.js' //  - for all .js file
   /*
   specPattern: 
    [
    'cypress/integration/cypressPOMTests/Testcase1Test.js',
     'cypress/integration/cypressPOMTests/Testcase2Test.js',

  ]

  */ 
  },
 
  
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    screenshots: true,
    charts: true,
    reportPageTitle: 'My Test Suite',
    embeddedScreenshots: true,
    inlineAssets: true,
    json: true,
    video : true
  },
  


});
