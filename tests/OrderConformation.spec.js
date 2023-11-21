import { test } from '@playwright/test'
import { POManager } from '../classes/POManager'
const data = JSON.parse(JSON.stringify(require('../classes/Data.json')))

test("orderConformation", async({ page }) => {

    const pomanager = new POManager(page)
    const creatingAccount = pomanager.getCreatingAccount(page)
    const homepage = pomanager.getHomepage(page)
    const productPage = pomanager.getProductPage(page)
    const shoppingDetails = pomanager.getShoppingDetails(page)
    const orderConform = pomanager.getOrderConform(page)

    await creatingAccount.url(data["creatingAccountDetails"].URL)
    await creatingAccount.account()
    await creatingAccount.personalDetails(data["creatingAccountDetails"].firstName, data["creatingAccountDetails"].lastName)
    await creatingAccount.signInInformation(data["creatingAccountDetails"].email, data["creatingAccountDetails"].emailPassword, data["creatingAccountDetails"].conformEmailPassword)
    await creatingAccount.thankingRegisterMessage(data["creatingAccountDetails"].registerThankMessage);
    await homepage.homepageGoTo();
    await homepage.homepageDisplay();
    await homepage.productspage(data["creatingAccountDetails"].productName);
    await productPage.productDisplayed();
    await productPage.addToCart();
    await productPage.cartInventory()
    await shoppingDetails.details(data["creatingAccountDetails"].company, data["creatingAccountDetails"].streetAddress, data["creatingAccountDetails"].city, data["creatingAccountDetails"].postcode, data["creatingAccountDetails"].number)
    await orderConform.placingOrder()
    await orderConform.greetingmessage(data["creatingAccountDetails"].thankMessage)
})