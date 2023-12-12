module.exports = class GroceriesAndEssentialsConstants
{
    // Test data constants

 static groceriesAndEssentialsPageHeadingText =  "Order Daily Grocery"
static   addToCartBtnText = 'ADD'
static checkoutBtnText = 'Checkout'

    // css selectors for webelements
    static orderDailyGroceriesHeading = "div h1"
    static welcomeStoreLink = "a[href*='/welcome-store']"
    static firstStoreLink = "a[href*='subTag=grocery']"
    static welcomeStoreHeading = "img[title*='Welcome Store']"
    static welcomeStoreHeadingText ="div h1"
     static addToCartBtn = "a[href*='product'] button"
     static cartIcon = "a[href*='/checkout']"
     static productName = "a[href*='/product/'] p"
     static pageHeader = "div h1"
     static increementProd = "a[href*='product/'] div div:nth-child(3) button:nth-child(3)"
     static checkoutBtn = "div button[shape=circular]"
     static searchBox = "input[placeholder*='Search in ']"
     static storeHeadingText ="div h1"
}
