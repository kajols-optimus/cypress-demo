import HomePage from "../cypressPOMPages/HomePage"
import GroceriesAndEssentialsPage from "../cypressPOMPages/GroceriesAndEssentialsPage"
import "../../support/commands"
import testdata from '../../fixtures/dunzoData.json';

const groceriesAndEssentialsConstants = require('../cypressPOMConstants/GroceriesAndEssentialsConstants')
const myCartConstants = require('../cypressPOMConstants/MyCartConstants')
const globalConstants = require('../cypressPOMConstants/GlobalConstants')
const homePage = new HomePage()
const groceriesAndEssentialsPage = new GroceriesAndEssentialsPage()


class MyCartPage
{
    

   verifyUserLandedOnMyCartPage()
   {
   cy.log("Verify User Landed On My Cart Page")
   return cy.textElementVisible(myCartConstants.yourCartPageHeadingText)   
   }
   
   verifyUserLandedOnMyCartPageWithSameAddedProductName()
   {
    cy.log("Verify User Landed On MyCart Page With Same Added Product Name")
    groceriesAndEssentialsPage.verifyUserLandedOnGroceriesAndEssentialsPage()
    groceriesAndEssentialsPage.clickFirstGroceryStoreStore()
    cy.wait(2000)
  let productName12 
    cy.get(groceriesAndEssentialsConstants.productName).first().should('be.visible').then(function(name)
    {

      productName12 = name.text()
      cy.log(productName12)
    })

    cy.log(productName12)

   
   
    groceriesAndEssentialsPage.clickAddToCartBtnForFirstProduct()
    groceriesAndEssentialsPage.clickOnCartIcon()
    let a = cy.contains('Your Cart').should('be.visible')
    let   cartProdName
    cy.get(myCartConstants.productName).first().then(function(name)
    {

       cartProdName = name.text()
      cy.log(cartProdName)
    })
    
   expect(cartProdName).to.equal(productName12) 
   
    
   }
   
   verifyTotalAmountAndNecessaryBreakupInInvoice()
   {
cy.webElementContainingTextVisible(globalConstants.pTag,myCartConstants.invoice)
     cy.get('p').contains(myCartConstants.invoice).click()
     cy.webElementContainingTextVisible(globalConstants.spanTag,myCartConstants.itemTotal)
       cy.webElementContainingTextVisible(globalConstants.spanTag,myCartConstants.deliveryFee)
     cy.webElementContainingTextVisible(globalConstants.pTag,myCartConstants.toPayAmount)
cy.mouseHoverWebElement(myCartConstants.priceBreakdownDataTip)
cy.get(myCartConstants.priceBreakdownToolTip).first().should('contain.text', myCartConstants.deliveryFee)
   }

   verifyUserOnMyCartPageWithProductAddedOnCheckoutFromHomeSearchPage()
   {
    cy.log("verify User On My Cart Page With Product Added On Checkout From Home Search Page")
this.verifyUserLandedOnMyCartPage()
cy.fixture('dunzoData.json').as('testdata');
cy.get(myCartConstants.productName).should('contain.text',testdata.productName)
   }

   
   verifyUserOnMyCartPageWithProductAddedOnCheckoutFromStoreSearchPage()
   {
    cy.log("verify User On My Cart Page With Product Added On Checkout From Store Search Page")
this.verifyUserLandedOnMyCartPage()
cy.fixture('dunzoData.json').as('testdata');
cy.webElementContainsText(myCartConstants.productName, testdata.groceryProductName)
   }

   verifyPartnerTipAmountAdded()
   {
  cy.log("Verify Partner Tip Amount Added")
   cy.textElementVisible(myCartConstants.thankYourPartnerTip)
   cy.get(myCartConstants.addpartnerTip).click()
     cy.webElementContainingTextVisible('p', myCartConstants.invoice)
     cy.get(globalConstants.pTag).contains(myCartConstants.invoice).click()
    cy.textElementVisible(myCartConstants.partnerTipAmountInvoice)
cy.textElementVisible(myCartConstants.itemTotal)
     cy.webElementContainingTextVisible(globalConstants.spanTag, myCartConstants.itemTotal)
     cy.webElementContainingTextVisible(globalConstants.spanTag, myCartConstants.deliveryFee)
     cy.webElementContainingTextVisible(globalConstants.pTag, myCartConstants.toPayAmount)


   }

  }


export default MyCartPage;