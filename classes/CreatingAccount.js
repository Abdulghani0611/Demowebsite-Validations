const { expect } = require('@playwright/test')
class CreatingAccount {
    constructor(page, firstName, lastName) {
        this.page = page
        this.createAccount = page.locator("(//a[.='Create an Account'])[1]");
        this.firstName = page.locator("#firstname");
        this.lastName = page.locator("#lastname");
        this.email = page.locator("#email_address");
        this.emailPassword = page.locator('//input[@title="Password"]');
        this.conformEmailPassword = page.locator('//input[@title="Confirm Password"]')
        this.creatingAnAccount = page.locator('//button[@class="action submit primary"]')
        this.thankMessage = page.locator("//div[.='Thank you for registering with Main Website Store.']")

        this.randomMessage = `${Math.random().toString().slice(2,6)}`;
        this.firstNameValue = `${firstName}${this.randomMessage}`;
        this.lastNameValue = `${lastName}${this.randomMessage}`;
        this.emailValue = `${firstName}${this.randomMessage}${'@gmail.com'}`;

    }

    async url(URL) {
        await this.page.goto(URL)
        await this.page.waitForLoadState("domcontentloaded")
    }

    async account() {
        await this.createAccount.click()
    }

    async personalDetails(firstName, lastName) {
        await this.firstName.fill(this.firstNameValue)
        await this.lastName.fill(this.lastNameValue)
    }

    async signInInformation(email, emailPassword, conformEmailPassword) {
        await this.email.fill(this.emailValue)
        await this.emailPassword.fill(emailPassword)
        await this.conformEmailPassword.fill(conformEmailPassword)
        await this.creatingAnAccount.click()
    }
    async thankingRegisterMessage(registerThankMessage) {
        await expect(this.thankMessage).toHaveText(registerThankMessage)

    }


}
module.exports = { CreatingAccount }