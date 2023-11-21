const { After, Before, BeforeStep, AfterStep, Status } = require('@cucumber/cucumber');

const { POManager } = require('../../classes/POManager')

const { chromium } = require('@playwright/test')


Before(async function() {
    const browser = await chromium.launch({ 'headless': false })
    const context = await browser.newContext()
    this.page = await context.newPage()

    this.pomanager = new POManager(this.page)
});

BeforeStep(function() {
    // This hook will be executed before all steps in a scenario with tag @foo
});

AfterStep(async function({ result }) {

    if (result.status === Status.FAILED) {
        await this.page.screenshot({ path: "screenshot1.png" })

    }
});

After(function() {

    // console.log("It is a Last Execution");
});