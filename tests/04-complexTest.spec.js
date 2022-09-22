// Now we are ready for complex test
// Test of validation
// go to tesena homepage 'https://www.tesena.com/'
// click on Contact us
// expect error message not visible
// input just name
// click submit button
// expect error message visible

import { test, expect } from '@playwright/test'

test('Validation test', async ({ page }) => {
    const contactButton = page.locator('a:has-text("Contact us")')
    const errorMessage = page.locator('id=field-wrapper-email >> .field-message--error')
    const nameField = page.locator('id=field-name')
    const submitButton = page.locator('id=field-field_form_1_3_0_0')

    await page.goto('https://www.tesena.com/')
    await contactButton.click()
    await expect(errorMessage).not.toBeVisible()
    await nameField.fill('Michal Kopriva')
    await submitButton.click()
    await expect(errorMessage).toBeVisible()
})

// show report
// npx playwright show-report
// config report ['list']
// options for traces https://playwright.dev/docs/trace-viewer#recording-a-trace
// retain on failure, on first retry, on, off
// traces: 'on'
// show traces in report

// screenshots https://playwright.dev/docs/test-configuration#automatic-screenshots
// on, off, only on failure
// use:  screenshot: 'on',