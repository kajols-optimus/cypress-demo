/* Scenario 3 : Verify -
a) user is able to search for product(product name fetched from fixture) in Items section add items 
to cart, go to cart page and check same product is added to cart as searched.
b) User able to search for a Store, go to that store ,add items to cart , go to cart and check same 
product is added to cart as searched.


 */
import HomePage from "../cypressPOMPages/HomePage"
import MyCartPage from "../cypressPOMPages/MyCartPage"
import GroceriesAndEssentialsPage  from "../cypressPOMPages/GroceriesAndEssentialsPage"


const { describe, it } = require('mocha');


class Testcase4Test {
  runTests() {


    const homePage = new HomePage()
    const myCartPage = new MyCartPage()
const groceriesAndEssentialsPage = new GroceriesAndEssentialsPage()

describe('Testcase 4', () => 
{
  
it.skip('Verify Search functionality for product in Items section', {browser : 'chrome'} , () => 
{
  
  cy.log("Verify Search functionality for product in Items section")

    homePage.navigateToUrl()
    homePage.setLocation()
  homePage.searchForProductInItemsSection()
  myCartPage.verifyUserOnMyCartPageWithProductAddedOnCheckoutFromHomeSearchPage()
  
  
})

 
it('Verify Search functionality for a Store',  {browser : 'chrome'} , () => 
{
 
  cy.log("Verify Search functionality for a Store")
 
    homePage.navigateToUrl()
    homePage.setLocation()
  homePage.searchForProductInStoreSection()
  groceriesAndEssentialsPage.searchForProductInGroceryStoreAddToCartAndCheckout()
  myCartPage.verifyUserOnMyCartPageWithProductAddedOnCheckoutFromStoreSearchPage()
  
})

})

}

}


// Instantiate the class and run the tests
const testcase4Test = new Testcase4Test();
testcase4Test.runTests()