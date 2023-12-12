const homePageConstants = require('../cypressPOMConstants/HomePageConstants')
const myCartConstants = require('../cypressPOMConstants/MyCartConstants')

import testdata from '../../fixtures/dunzoData.json';


class HomePage
{

    navigateToUrl()
    {

        cy.log("Navigate to URL")
        cy.visit(Cypress.env('url'), 
        {
            // Handle Exceptions in Cypress due to Unexpected Status Codes
/* Cypress throws an error if the web page returns any status code other than 2xx and 3xx. We need to handle
 the exception to avoid unwanted test failures
//To avoid the test case from failing due to the status codes, you can use the failOnStatusCode:false option 
// when opening a URL/requesting with the request command.
*/
          failOnStatusCode: false,
    });
    }


clickGroceriesAndEssentials()
{
    cy.log("Click Groceries And Essentials")
    cy.get(homePageConstants.groceriesAndEssentials).click()
   
}



clickFruitsAndVegetables()
{
    cy.log("Click Fruits & Vegetables")
    cy.get(homePageConstants.fruitsAndVegetablesStore).should('be.visible').click()
}

clickMeatAndFishStoreLink()
    {
        cy.log("click Meat And Fish Store Link")
        cy.get(homePageConstants.meatAndFishStore).should('be.visible').click()
    }

    clickPickAndDrop()
    {
        cy.log("Click Pick & Drop")
        cy.get(homePageConstants.pickupAndDrop).should('be.visible').click()
    }


clickMyCartButton()
{
   cy.log("Click My Cart button")
  cy.get(homePageConstants.cartBtn).click()

}



setLocation()
{
    cy.log("Set location")
 cy.get(homePageConstants.setLocation).should('be.visible').click()
 cy.get("input[placeholder*='Search for location']").should('be.visible').click()
 cy.get("input[placeholder*='Search for location']").type('Mumbai')
 cy.get("p[title='address-name']").first(). should('be.visible').click()
 cy.wait(2000)
 cy.contains('Essentials delivered to your doorstep').should('be.visible')
 
}




clickDunzoImageLogo()
   {
    cy.log("Click Dunzo Image")
  cy.get(homePageConstants.dunzoImageLogo).should('be.visible').click()
   }

searchForProductInItemsSection()
{
    cy.log("Search for Product In Items Section")
    cy.get(homePageConstants.searchBtn).should('be.visible').click()
    cy.fixture('dunzoData.json').as('testdata');
    cy.get(homePageConstants.searchBox).click().type(testdata.productName)
   cy.get(homePageConstants.searchResultText).contains(homePageConstants.searchResultsFor).should('contain.text', testdata.productName)
   cy.get(homePageConstants.addToCartBtn).contains('ADD').first().should('be.visible').click()
   cy.get(homePageConstants.cartBtn).click()

}


readDataFromExcelFileAndStoreInJsonFile()
{
    /*
 Due to Cypress’s lack of support.xlsx file. The only format supported by Cypress is JSON,
 So we will convert the Excel.xlsx file to a JSON file. And using that JSON file, we’ll be able to
  extract the info we require.

    */
    cy.log("Read Data from Excel & Store in a JSON File")
    cy.get(homePageConstants.searchBtn).should('be.visible').click()

 const filePath = 'cypress/fixtures/excelData.xlsx'
//const filePath = Cypress.config("fileServerFolder")+("/cypress/fixtures/excelData.xlsx")
cy.task('excelToJsonConvertor', filePath).then(function(result)
{
    cy.log(result)
   cy.log(result.Sheet1[0].A)
   // WRITE JSON FILE 
   cy.writeFile('cypress/fixtures/productData.json', 
    {groceryProductName1: result.Sheet1[0].A, groceryProductName2: result.Sheet1[1].A})

 })
    //Browser(Engine) - JS code  -> Client Side Environment (Front end) - Cypress


    //Node (Engine) - Js code -> Back End applications/Environment
      //Accessing files - fs, Database access, 


      //Task -(Files,DB) -> Config.js,  (ExcelToJson)-> cy.task(ExcelToJson)
}


readDataFromJsonFile()
{
    cy.log("Read datafrom JSON files")
   // cy.fixture('productData.json').as('productDataJson').then(function(data)
   /// READ JSON FILE
   cy.readFile('cypress/fixtures/productData.json').then((data) =>
    {
    cy.get(homePageConstants.searchBox).click().type(data.groceryProductName2)
   cy.get(homePageConstants.searchResultText).contains(homePageConstants.searchResultsFor).should('contain.text', data.groceryProductName2)
   cy.get(homePageConstants.addToCartBtn).contains('ADD').first().should('be.visible').click()
   cy.get(homePageConstants.cartBtn).click()
   cy.contains(myCartConstants.yourCartPageHeadingText).should('be.visible')
    })
}


searchForProductInStoreSection()
{
    cy.log("search For Product In Store Section")
    cy.get(homePageConstants.searchBtn).should('be.visible').click()
    cy.fixture('dunzoData.json').as('testdata');
    cy.get(homePageConstants.searchBox).click().type(testdata.storeName)
    cy.wait(2000)
    cy.get(homePageConstants.storeButton).click({force : true})
    cy.get(homePageConstants.storeLInk).first().should('be.visible').click()
}

}
export default HomePage;
