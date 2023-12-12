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

describe('Testcase 5',  () => 
{
 
it.only('Verify Parter Tip Functionality on checkout page', function()
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

}

}


// Instantiate the class and run the tests
const testcase5Test = new Testcase5Test();
testcase5Test.runTests()