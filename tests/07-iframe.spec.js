const { test, expect } = require('@playwright/test')

test('iframe wrong', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/iframe')

    const textBox = page.locator('id=tinymce')

    await textBox.fill('Playwright workshop 2022')

    await page.pause()
})

test('iframe right', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/iframe')

    const textBox = page.frameLocator('id=mce_0_ifr').locator('id=tinymce')

    await textBox.fill('Playwright workshop 2022')

    await page.pause()
})