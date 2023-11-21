const { expect } = require('@playwright/test')
class Homepage {
    constructor(page) {
        this.page = page
        this.homePageGoTo = page.locator('a.logo')
        this.homepage = page.locator("//span[.='Luma pants when you shop today*']")
        this.productsPage = page.locator('//a[@class="product-item-link"]')
        this.product = page.locator('(//a[@class="product-item-link"])[10]')
    }
    async homepageGoTo() {
        await this.homePageGoTo.click()

    }
    async homepageDisplay() {
        await this.homepage.click()
    }
    async productspage(productName) {
        await this.page.waitForLoadState("domcontentloaded")
        const products = await this.productsPage.allTextContents();
        await expect(this.product).toBeVisible()
        for (let i = 0; i < products.length; i++) {
            if (products[i] === productName) {
                await this.product.click()
                break;
            }

        }
    }
}
module.exports = { Homepage }