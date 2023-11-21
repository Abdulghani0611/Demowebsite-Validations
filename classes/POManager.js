const { CreatingAccount } = require('../classes/CreatingAccount')
const { Homepage } = require('../classes/HomePage')
const { ProductPage } = require('../classes/ProductPage')
const { ShoppingDetails } = require('../classes/ShoppingDetails')
const { OrderConform } = require('../classes/OrderConform')
const data = JSON.parse(JSON.stringify(require('../classes/Data.json')))



class POManager {
    constructor(page) {
        this.page = page
        this.creatingAccount = new CreatingAccount(page, data["creatingAccountDetails"].firstName, data["creatingAccountDetails"].lastName)
        this.homepage = new Homepage(page)
        this.productPage = new ProductPage(page)
        this.shoppingDetails = new ShoppingDetails(page)
        this.orderConform = new OrderConform(page)

    }

    getCreatingAccount() {
        return this.creatingAccount
    }
    getHomepage() {
        return this.homepage
    }
    getProductPage() {
        return this.productPage
    }
    getShoppingDetails() {
        return this.shoppingDetails
    }

    getOrderConform() {
        return this.orderConform

    }


}
module.exports = { POManager }