// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Click link containing text
Cypress.Commands.add("clickLink", (label) => {
    cy.get('a').contains(label).click()
  })
  
  
  // Check if webelement is visible or displayed
  Cypress.Commands.add("isWebElementVisible", (ele) => {
      cy.get(ele).should('be.visible')
    })
  
    
  // Check if webelement is Checked
  Cypress.Commands.add("isWebElementChecked", (ele) => {
      cy.get(ele).should('be.checked')
    })
    
  
    
  // Check if webelement is Enabled
  Cypress.Commands.add("isWebElementEnabled", (ele) => {
      cy.get(ele).should('be.enabled')
    })
    
    
    
  // Check if webelement is Not Checked
  Cypress.Commands.add("isWebElementNotChecked", (ele) => {
      cy.get(ele).should('not.be.checked')
    })
    
    
    
  // Check if webelement is Selected
  Cypress.Commands.add("isWebElementSelected", (ele) => {
      cy.get(ele).should('be.selected')
    })
    
    
    
  // Check if webelement is Disabled
  Cypress.Commands.add("isWebElementDisabled", (ele) => {
      cy.get(ele).should('be.disabled')
    })

    // Verify web element contains text
    Cypress.Commands.add("webElementContainsText", (ele, text) => {
      cy.get(ele).should('contain.text', text)
    })

    
    // Verify web element should have text
    Cypress.Commands.add("webElementHaveText", (ele, text) => {
      cy.get(ele).should('have.text', text)
    })
    
     // Verify text element to be visible
     Cypress.Commands.add("textElementVisible", (ele) => {
      cy.contains(ele).should('be.visible')
    })
    

    // Verify text element to be visible
    Cypress.Commands.add("webElementContainingTextVisible", (ele,text) => {
      // cy.contains(ele).should('be.visible')
      cy.get(ele).contains(text).should('be.visible')
    })
    
  
    
  // Click and Enter Text
  Cypress.Commands.add("clickAndEnterText", (ele, text) => {
      cy.get(ele).click().type(text)
    })

     
  // Click and Enter Text
  Cypress.Commands.add("clickWebElementContainingText", (text) => {
    cy.contains(text).click()
  })
  
    
  // Click and Enter Text Fluently
  Cypress.Commands.add("clickAndEnterTextFluently", (ele, text) => {
      cy.get(ele).should('be.visible').click().type(text)
    })
    
  
     
  // Scroll to a particular webelement
  Cypress.Commands.add("scrollToAWebElement", (ele) => {
      cy.get(ele).scrollIntoView().should('be.visible')
    })
  
    
     
  // Use linear easing animation to scroll
  Cypress.Commands.add("scrollWithLinearAnimation", (ele) => {
      cy.get(ele).scrollIntoView({ easing: 'linear' })
    })
    
  
    
     
  //Scroll to element over duration 2000ms
  Cypress.Commands.add("scrollOverDuration", (ele, time) => {
      cy.get(ele).scrollIntoView({ duration: time })
    })
    
    
     
  //Scroll to bottom
  Cypress.Commands.add("scrollToBottom", () => {
     cy.scrollTo('bottom')
    })
    
  
     
  //Scroll down by pixels
  Cypress.Commands.add("scrollDownByPixel", (p) => {
      cy.scrollTo(0, p)
    })
    
  
    
     
  //Mouse Hover WebElement
  Cypress.Commands.add("mouseHoverWebElement", (ele) => {
      cy.get(ele).realHover('mouse')
    })
    
    

    
  
    
  
  // Download a file
  Cypress.Commands.add('downloadFile', (url, directory, fileName) => {
      return cy.getCookies().then((cookies) => {
        return cy.task('downloadFile', {
          url,
          directory,
          cookies,
          fileName,
        })
      })
    })
  
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      cy.log(err)
      cy.log("error", err.message);
      cy.log("runnable", runnable);
      return false
    })

   
//
// import * as fs from 'fs'
const fs = require('fs'); 
 
const logToFile = (message) => { 
  const logFilePath = 'cypress-logs.txt';
   fs.appendFileSync(logFilePath, `${message}\n`)
   }
   Cypress.Commands.add('logToFile', logToFile)
   
   /*
   const xlsx = require('xlsx');
 
   Cypress.Commands.add('readExcelFile', (filePath) => {
     const workbook = xlsx.readFile(filePath);
     const sheetName = workbook.SheetNames[0];
     const sheet = workbook.Sheets[sheetName];
     const jsonData = xlsx.utils.sheet_to_json(sheet);
     return jsonData;
   });

   */