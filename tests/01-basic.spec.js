// 01 - basic test
// 1) Go to https://www.tesena.com/
// 2) Expect title regex /Tesena/

// run: npx playwright test /01-basic.spec.js --headed

import { test, expect } from '@playwright/test'

// we use "test" function for test
// first argument = test name
// second argument = callback function = our test
// the function is asynchronous
// argument of function is "page" object, which represents our browser page
test('tesena title', async ({ page }) => {

    // every step starts with await
    // fistly we need to go to our web adress
    await page.goto('https://www.tesena.com/')

    // then we'll use simple expectation for title of the page
    // playwright has function "expect" for this
    await expect(page).toHaveTitle(/Tesena/)
})

// lets try to fail this test by wrong title
test('tesena title negative', async ({ page }) => {
    await page.goto('https://www.tesena.com/')
    await expect(page).toHaveTitle(/Dog/)
})

