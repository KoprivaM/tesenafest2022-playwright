// lets try some uploading
// go to upload part of the page
// firstly we create txt file to upload

import { test } from '@playwright/test'

test('upload', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/upload')
    const upload = page.locator('id=file-upload')

    await upload.setInputFiles('uploadMe.txt')

    await page.pause()

})