class ShoppingDetails {
    constructor(page) {
        this.page = page
        this.company = page.locator('//input[@name="company"]')
        this.streetAddress = page.locator('//input[@name="street[0]"]')
        this.city = page.locator('//input[@name="city"]')
        this.region = page.locator('//select[@name="region_id"]')
        this.postcode = page.locator('//input[@name="postcode"]')
        this.country = page.locator('//select[@name="country_id"]')
        this.number = page.locator('//input[@name="telephone"]')
        this.methods = page.locator('(//input[@class="radio"])[2]')
        this.next = page.locator('//span[.="Next"]')



    }
    async details(company, streetAddress, city, postcode, number) {

        await this.company.type(company);
        await this.streetAddress.fill(streetAddress);
        await this.city.fill(city)
        await this.region.selectOption("California")
        await this.postcode.fill(postcode);
        await this.country.selectOption("United States")
        await this.number.fill(number)
        await this.methods.click()
        await this.next.click()
    }
}
module.exports = { ShoppingDetails }