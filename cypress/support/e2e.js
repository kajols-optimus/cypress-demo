// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:


// import 'cypress-mochawesome-reporter/register';
import 'cypress-real-events'
import './commands';
import addContext from 'mochawesome/addContext';
import * as fs from 'fs';
 import '@shelex/cypress-allure-plugin';

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const screenshot = `${Cypress.config('screenshotsFolder')}/${
      Cypress.spec.name
    }/${runnable.parent.title} -- ${test.title} (failed).png`;
    addContext({ test }, screenshot);
  }
});


/*
const readXlsx = require('./read-xlsx')

module.exports = (on, config) => {
  on('task', {
    'readXlsx': readXlsx.read,
    log (message) {
      console.log(message)
      return null
    }
  })
}
*/
// pay attention to the "screenshot" constant because if you specify an incorrect file name mask, the screenshot will not be included in the report

// Alternatively you can use CommonJS syntax:
// require('./commands')