const meatAndFishConstants = require('../cypressPOMConstants/MeatAndFishConstants')
const homePageConstants = require('../cypressPOMConstants/HomePageConstants')


class MeatAndFishPage {


    verfiyMeatAndFishPageTitle()
    {
        cy.log("Verify Meat & fish Page title")
   cy.get(meatAndFishConstants.pageHeader).should('have.text', meatAndFishConstants.meatAndFishPageHeadingText)

    }
}


export default MeatAndFishPage;
