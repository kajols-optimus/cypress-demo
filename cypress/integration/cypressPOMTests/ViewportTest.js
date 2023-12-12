/* Scenario 3 : Verify -
Verify user is able to add partner tip along with the products added in cart on checkout page and 
partner tip amount is shown in invoice


 */
import '../../support/commands'
import HomePage from "../cypressPOMPages/HomePage"
import MyCartPage from "../cypressPOMPages/MyCartPage"
import GroceriesAndEssentialsPage  from "../cypressPOMPages/GroceriesAndEssentialsPage"


const { describe, it } = require('mocha');


class Testcase5Test {
  runTests() {


    const homePage = new HomePage()
    const myCartPage = new MyCartPage()
const groceriesAndEssentialsPage = new GroceriesAndEssentialsPage()

describe('Testcase 5 - Viewport(Organize desktop vs mobile tests separately)', () => 
{
  context('720p resolution - Desktop', () => {
    beforeEach(() => {
      // run these tests as if in a desktop
      // browser with a 720p monitor
      cy.viewport(1280, 720)
    })
it('Set viewport in the test configuration with 720p resolution - Desktop', function()
{
  
   //cy.logToFile("Verify Parter Tip Functionality on checkout page")
  cy.log("Verify Parter Tip Functionality on checkout page")
  homePage.navigateToUrl()
  homePage.setLocation()
homePage.clickGroceriesAndEssentials()
groceriesAndEssentialsPage.addTwoGroceryProductsInCartAndCheckout()
myCartPage.verifyUserLandedOnMyCartPage()
myCartPage.verifyPartnerTipAmountAdded()
  
})
})

context('iphone-5 resolution', () => {
  beforeEach(() => {
    // run these tests as if in a mobile browser with preset dimension "iphone-5"
   cy.viewport('iphone-8')
   // cy.viewport('iphone-se2')
  })
it('Verify Parter Tip Functionality on checkout page with "iphone-5 resolution"', function()
{
  
   //cy.logToFile("Verify Parter Tip Functionality on checkout page")
  cy.log("Verify Parter Tip Functionality on checkout page")
  homePage.navigateToUrl()
homePage.clickGroceriesAndEssentials()
})
})


context('macbook-16 resolution with the landscape orientation', () => {
  beforeEach(() => {
// run these tests as if in a mobile browser with preset dimension "macbook-16" with the landscape orientation
    cy.viewport('macbook-16', 'landscape')
  })
it('Verify Parter Tip Functionality on checkout page with Resolution "macbook-16" & orientation "landscape"', function()
{
  
   //cy.logToFile("Verify Parter Tip Functionality on checkout page")
  cy.log("Verify Parter Tip Functionality on checkout page")
  homePage.navigateToUrl()
  homePage.setLocation()
homePage.clickGroceriesAndEssentials()
groceriesAndEssentialsPage.addTwoGroceryProductsInCartAndCheckout()
myCartPage.verifyUserLandedOnMyCartPage()
myCartPage.verifyPartnerTipAmountAdded()
})
})


})

}

}


// Instantiate the class and run the tests
const testcase5Test = new Testcase5Test();
testcase5Test.runTests()