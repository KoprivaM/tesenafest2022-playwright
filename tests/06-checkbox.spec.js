// lets look at handling of checkboxes
// we are going to use this dummy website
// 'https://the-internet.herokuapp.com/'

// test
// go to page
// expect not checked checkbox
// check it
// expect it is checked

import { test, expect } from '@playwright/test'

test('checkboxes', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes')

    const checkBox1 = page.locator('input >> nth=0')
    const checkBox2 = page.locator('input >> nth=1')

    await expect(checkBox1).not.toBeChecked()
    await expect(checkBox2).toBeChecked()

    await checkBox1.check()
    await expect(checkBox1).toBeChecked()

    await checkBox2.uncheck()
    await expect(checkBox2).not.toBeChecked()

    await page.pause()
})