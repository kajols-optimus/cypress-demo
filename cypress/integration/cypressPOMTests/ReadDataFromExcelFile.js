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

describe('Excel File Systems Access through code', () => 
{
  
it('Verify Read Data From Excel File',  () => 
{
  
  cy.log("Verify Read Data From Excel File")

    homePage.navigateToUrl()
    homePage.setLocation()
homePage.readDataFromExcelFileAndStoreInJsonFile()
  homePage.readDataFromJsonFile()
  // homePage.readFromJson()

})

})

}

}


// Instantiate the class and run the tests
const testcase4Test = new Testcase4Test();
testcase4Test.runTests()