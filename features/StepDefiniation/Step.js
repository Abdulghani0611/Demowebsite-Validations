const { When, Then, Given } = require('@cucumber/cucumber')
const { POManager } = require('../../classes/POManager')
const { chromium } = require('@playwright/test')
const data = JSON.parse(JSON.stringify(require('../../classes/Data.json')))

Given('Register to Ecommerce Website using {string} and {string} and {string} and {string} and {string}', { timeout: 100 * 1000 },
    async function(string, string2, string3, emailPassword, conformEmailPassword) {
        this.pomanager = new POManager(this.page)
        this.creatingAccount = this.pomanager.getCreatingAccount(this.page)
        await this.creatingAccount.url(data["creatingAccountDetails"].URL)
        await this.creatingAccount.account()
        await this.creatingAccount.personalDetails(data["creatingAccountDetails"].firstName, data["creatingAccountDetails"].lastName)
        await this.creatingAccount.signInInformation(data["creatingAccountDetails"].email, data["creatingAccountDetails"].emailPassword, data["creatingAccountDetails"].conformEmailPassword)
        await this.creatingAccount.thankingRegisterMessage(data["creatingAccountDetails"].registerThankMessage);
    });

When('check  {string} in homepage', { timeout: 100 * 1000 }, async function(productName) {
    this.homepage = this.pomanager.getHomepage(this.page)
    await this.homepage.homepageGoTo();
    await this.homepage.homepageDisplay();
    await this.homepage.productspage(data["creatingAccountDetails"].productName);
});

Then('add product to cart and  displayed in cart', { timeout: 100 * 1000 }, async function() {
    this.productPage = this.pomanager.getProductPage(this.page)
    await this.productPage.productDisplayed();
    await this.productPage.addToCart();
    await this.productPage.cartInventory()
});

When('Enter valid details and place the order', { timeout: 100 * 1000 }, async function() {
    this.shoppingDetails = this.pomanager.getShoppingDetails(this.page)
    await this.shoppingDetails.details(data["creatingAccountDetails"].company, data["creatingAccountDetails"].streetAddress, data["creatingAccountDetails"].city, data["creatingAccountDetails"].postcode, data["creatingAccountDetails"].number)

});

Then('verify the order Conformation', { timeout: 100 * 1000 }, async function() {
    this.orderConform = this.pomanager.getOrderConform(this.page)
    await this.orderConform.placingOrder()
    await this.orderConform.greetingmessage(data["creatingAccountDetails"].thankMessage)
});


Then('Verify the Register thanking message', async function() {
    await this.creatingAccount.thankingRegisterMessage(data["creatingAccountDetails"].registerThankMessage);
});