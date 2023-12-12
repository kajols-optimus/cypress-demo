/* Scenario 1 : Verify all main menu options, and click on every option option and verify user lands
 on correct page by verifying page title
 */
 import HomePage from "../cypressPOMPages/HomePage"
 import GroceriesAndEssentialsPage from "../cypressPOMPages/GroceriesAndEssentialsPage"
  import PickAndDropPage from "../cypressPOMPages/PickAndDropPage"
 import MeatAndFishPage from "../cypressPOMPages/MeatAndFishPage"
 import FruitsAndVegetablesPage from "../cypressPOMPages/FruitsAndVegetablesPage"

 
  

  
 const { describe, it } = require('mocha');

 class Testcase1Test {
  runTests() {
    
 const homePage = new HomePage()
  const fruitsAndVegetablesPage = new FruitsAndVegetablesPage()
  const groceriesAndEssentialsPage = new GroceriesAndEssentialsPage()
  const meatAndFishPage = new MeatAndFishPage()
    const pickAndDropPage = new PickAndDropPage()

describe('Testcase 1', () => 
{  
it('Verify user lands on correct page by verifying page title', function()

{
  
  cy.log("Verify user lands on correct page by verifying page title")
  homePage.navigateToUrl()
    homePage.setLocation()
    homePage.clickGroceriesAndEssentials()
    groceriesAndEssentialsPage.verifyUserLandedOnGroceriesAndEssentialsPage()
    homePage.clickDunzoImageLogo()
    homePage.clickPickAndDrop()
    pickAndDropPage.verfiyPickAndDropPageTitle()
    homePage.clickDunzoImageLogo()
    homePage.clickMeatAndFishStoreLink()
    meatAndFishPage.verfiyMeatAndFishPageTitle()
    homePage.clickDunzoImageLogo()
    homePage.clickFruitsAndVegetables()
    fruitsAndVegetablesPage.verifyUserLandedOnFruitsAndVegetablesPage()
  
})

})

}

}


// Instantiate the class and run the tests
const testcase1test = new Testcase1Test();
testcase1test.runTests()
