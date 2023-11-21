const { expect } = require('@playwright/test')
class OrderConform {
    constructor(page) {
        this.page = page
        this.placeOrder = page.locator('//span[.="Place Order"]')
        this.greetingMessage = page.locator("//span[.='Thank you for your purchase!']")

    }
    async placingOrder() {
        await this.placeOrder.click()
    }
    async greetingmessage(thankMessage) {

        await expect(this.greetingMessage).toHaveText(thankMessage)
    }
}
module.exports = { OrderConform }