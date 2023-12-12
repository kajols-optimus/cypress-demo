/* Scenario 3 :  Go to Groceries & Essentials section, add any two products, and go to checkput page.
 Verify User should be shown the total amount (payment details) with the necessary breakup 
 as applicable on checkout page.
 */
import HomePage from "../cypressPOMPages/HomePage"
import MyCartPage from "../cypressPOMPages/MyCartPage"
import GroceriesAndEssentialsPage from "../cypressPOMPages/GroceriesAndEssentialsPage"



const { describe, it } = require('mocha');


class Testcase3Test {
  runTests() {


    const homePage = new HomePage()
    const myCartPage = new MyCartPage()
    const groceriesAndEssentialsPage = new GroceriesAndEssentialsPage()


describe('Testcase 3', () => 
{
 
  /*If you want to configure retry attempts on a specific test, you can set this 
  by using the test's configuration.
  */
it('Verify Payment details with the necessary breakup',
{
  // Customize retry attempts for an individual test
  retries: {
    runMode: 2,
    openMode: 1,
  },
},
function()
{
 
  cy.log("Verify Payment details with the necessary breakup")
    homePage.navigateToUrl()
    homePage.setLocation()
  homePage.clickGroceriesAndEssentials()
groceriesAndEssentialsPage.addTwoGroceryProductsInCartAndCheckout()
  myCartPage.verifyUserLandedOnMyCartPage()
  myCartPage.verifyTotalAmountAndNecessaryBreakupInInvoice()
 
})

})

}

}


// Instantiate the class and run the tests
const testcase3Test = new Testcase3Test();
testcase3Test.runTests()