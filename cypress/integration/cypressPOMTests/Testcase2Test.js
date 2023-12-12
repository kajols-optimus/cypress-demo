/* Scenario 2 :  Navigate to electronics-> Computers-> laptops-> click on cart -> add laptop.
  Verify my cart page and check that same product is added to cart 
 */
import HomePage from "../cypressPOMPages/HomePage"
import MyCartPage from "../cypressPOMPages/MyCartPage"




const { describe, it } = require('mocha');

class Testcase2Test {
  runTests() {


    const homePage = new HomePage()
    const myCartPage = new MyCartPage()

describe('Testcase 2',
{
  
  /* If you want to configure try attempts for a suite of tests, you can do this by setting
   the suite's configuration.
   */
  retries: {
    runMode: 0,
    openMode: 1,
  },
},

() => {
  
it('Verify My cart page with same product added to cart', function()
{
  
  cy.log("Verify My cart page with same product added to cart")
    homePage.navigateToUrl()
    homePage.setLocation()
  homePage.clickGroceriesAndEssentials()
  myCartPage.verifyUserLandedOnMyCartPageWithSameAddedProductName()
  
})

})

}

}


// Instantiate the class and run the tests
const testcase2test = new Testcase2Test();
testcase2test.runTests()