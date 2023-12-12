//export default 
module.exports = class HomePageConstants
{
   // Test data constants
static searchResultsFor = "Search Results for"

// css selectors for Home page
static groceriesAndEssentials = "a[href*='/grocery-stores']"
static cartBtn = "a[href='/checkout']"
static pickupAndDrop = "a[href*='order/send-packages']"
static meatAndFishStore = "a[href*='order/meat-and-fish-stores']"
static fruitsAndVegetablesStore = "a[href*='order/fruit-and-vegetable-stores']"
static setLocation = "div[data-for*='header-location']"
static dunzoImageLogo = "img[src*='/images/logo-']"
static searchBtn = "a[href*='/search']"
static searchBox = "input[placeholder='Search for item or a store']"
static searchResultText = "div p"
static addToCartBtn = "a[href*='product'] button"
static storeButton = "div[id=search-tabs] button[value=STORE]"
static storeLInk = "div a[href*='/mumbai/']"
}