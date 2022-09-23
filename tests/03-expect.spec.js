// Now lets look more on expects
// you can find more in documentation
// https://playwright.dev/docs/test-assertions

// the test:
// go to tesena homepage 'https://www.tesena.com/'
// expect contact us button is visible and has text "Contact us"
const { test, expect } = require('@playwright/test')

test('Expects', async ({ page }) => {
    await page.goto('https://www.tesena.com/')
    const cssLocator = page.locator('#menu-secondary >> a')

    await expect(cssLocator).toBeVisible()
    await expect(cssLocator).toHaveText('Contact us')
    await expect(cssLocator).toHaveText(/ontact u/)

    // Now look what happens when we let the test intentionally fail
    // await expect(cssLocator).toHaveText('Michal')
    await expect(cssLocator, 'Michal is not here!!!').toHaveText('Michal')
})

// to negate the expect, simply use .not before the assertion
test('Negative expect', async ({ page }) => {
    await page.goto('https://www.tesena.com/')
    const cssLocator = page.locator('#menu-secondary >> a')
    await expect(cssLocator).not.toHaveText('Michal')
})