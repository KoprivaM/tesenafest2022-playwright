const { test } = require('@playwright/test')

test('Locators', async ({ page }) => {
    await page.goto('https://www.tesena.com/')

    // to create a locator, we need to use .locator() on our page
    // we start with simple text locator
    const textLocator = page.locator('text=Contact us')

    // css
    const cssLocator = page.locator('a:has-text("Contact us")')

    //lets try to use simple click method
    // await cssLocator.click()

    // css combination
    const cssCombined = page.locator('#menu-secondary >> a ')

    // or
    const cssCombined2 = page.locator('form >> button')
    await cssCombined2.click()

    // xpath
    const xpath = page.locator('//*[@id="menu-19"]/li/a/span')

    // id
    const idLocator = page.locator('id=field-name')

    // custom - data-test, data-test-id, data-testid
    const dataTestLocator = page.locator('data-test=field-name')

    // you can of course use locators like this
    await page.locator('a:has-text("Contact us")').click()
})