

const pickAndDropConstants = require('../cypressPOMConstants/PickAndDropConstants')
const homePageConstants = require('../cypressPOMConstants/HomePageConstants')



class PickAndDropPage {


    verfiyPickAndDropPageTitle()
    {
      cy.log("Verify Pick & Drop Page Title")
  cy.get(pickAndDropConstants.pageHeader).should('have.text', pickAndDropConstants.pickAndDropConstantsPageHeadingText)

    }
}


export default PickAndDropPage;
