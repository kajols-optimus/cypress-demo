import testdata from '../../fixtures/dunzoData.json';

const groceriesAndEssentialsConstants = require('../cypressPOMConstants/GroceriesAndEssentialsConstants')

const homePageConstants = require('../cypressPOMConstants/HomePageConstants')


class GroceriesAndEssentialsPage
{
  
   verifyUserLandedOnGroceriesAndEssentialsPage()
   {
       cy.webElementHaveText(groceriesAndEssentialsConstants.pageHeader, groceriesAndEssentialsConstants.groceriesAndEssentialsPageHeadingText)
   }

clickWelcomeStore()
{
    cy.textElementVisible(groceriesAndEssentialsConstants.welcomeStoreLink).click()
    cy.webElementHaveText(groceriesAndEssentialsConstants.welcomeStoreHeadingText,'Welcome Store')
}

clickFirstGroceryStoreStore()
{
    cy.get(groceriesAndEssentialsConstants.firstStoreLink).first().should('be.visible').click()
    }
   getFirstProductName()
   {
    let vegName
    cy.get(fruitsAndVegetablesConstants.productName).first().then(function(name)
    {

        vegName = name.text()
    })

    return vegName
   }

   clickAddToCartBtnForFirstProduct()
   {
    cy.log(" click Add To Cart Btn For First Product")
    cy.get(groceriesAndEssentialsConstants.addToCartBtn).first().should('be.visible').click()
   }

   clickOnCartIcon()
   {
    cy.log("Click on Cart Icon")
    cy.get(groceriesAndEssentialsConstants.cartIcon).click()
   }

   addTwoGroceryProductsInCartAndCheckout()
   {
    cy.log("Add Two Grocery Products In Cart And Checkout")
    this.clickFirstGroceryStoreStore()
cy.get(groceriesAndEssentialsConstants.addToCartBtn).contains('ADD').first().should('be.visible').click()
cy.get(groceriesAndEssentialsConstants.addToCartBtn).contains('ADD').first().click()
cy.webElementContainingTextVisible(groceriesAndEssentialsConstants.checkoutBtn,groceriesAndEssentialsConstants.checkoutBtnText).click()
   
}

searchForProductInGroceryStoreAddToCartAndCheckout()
{
    cy.log("search For Product In Grocery Store Add To Cart And Checkout")
    cy.fixture('dunzoData.json').as('testdata');
cy.get(groceriesAndEssentialsConstants.storeHeadingText).should('be.visible').and('have.text',testdata.storeName)
cy.get(groceriesAndEssentialsConstants.searchBox).type(testdata.groceryProductName)
cy.wait(2000)
cy.get(groceriesAndEssentialsConstants.addToCartBtn).contains('ADD').first().should('be.visible').click()
cy.webElementContainingTextVisible(groceriesAndEssentialsConstants.checkoutBtn, groceriesAndEssentialsConstants.checkoutBtnText).click()
}
}



export default GroceriesAndEssentialsPage;
