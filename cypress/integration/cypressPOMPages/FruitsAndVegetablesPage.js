import GroceriesAndEssentialsConstants from '../cypressPOMConstants/GroceriesAndEssentialsConstants'

const fruitsAndVegetablesConstants = require('../cypressPOMConstants/FruitsAndVegetablesConstants')

const groceriesAndEssentialsConstants = require('../cypressPOMConstants/GroceriesAndEssentialsConstants')


class FruitsAndVegetablesPage
{
  
   verifyUserLandedOnFruitsAndVegetablesPage()
   {
      cy.log("Verify User Landed On Fruits And Vegetables Page")
      cy.webElementHaveText(groceriesAndEssentialsConstants.pageHeader, fruitsAndVegetablesConstants.fruitsAndVegetablesPageHeadingText)
   }


   getFirstProductName()
   {
      cy.log("Get firsts product name")
    let vegName
    cy.get(fruitsAndVegetablesConstants.productName).first().then(function(name)
    {

        vegName = name.text()
    })

    return vegName
   }

   clickAddToCartBtnForFirstProduct()
   {
      cy.log("click Add To Cart Btn For First Product")
    cy.get(fruitsAndVegetablesConstants.addToCartBtn).first().click()
   }
}



export default FruitsAndVegetablesPage;
