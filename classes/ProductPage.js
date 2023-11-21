const { expect } = require('@playwright/test')
class ProductPage {
    constructor(page) {
        this.page = page
        this.productName = page.locator('//span[@itemprop="name"]')
        this.size = page.locator('#option-label-size-143-item-172')
        this.color = page.locator('#option-label-color-93-item-50')
        this.addtoCart = page.locator("//span[.='Add to Cart']");
        this.cart = page.locator('//span[@class="counter-number"]');
        this.editCart = page.locator("//span[.='View and Edit Cart']")
        this.shoppingCart = page.locator("//span[.='Proceed to Checkout']")



    }
    async productDisplayed() {

        const productname = await this.productName.textContent()
        await expect(productname).toBeTruthy();
        await this.size.click()
        await this.color.click()

    }
    async addToCart() {

        await this.addtoCart.click()
        await this.page.waitForTimeout(4000);

    }
    async cartInventory() {

        await this.cart.click();
        await this.editCart.click();
        await this.page.waitForTimeout(8000);
        await this.shoppingCart.click();


    }



}
module.exports = { ProductPage }