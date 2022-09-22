// last part - lets look at base page
// if there are some common elements for more of the pages
// like the top navigation bar at tesena pages
// we can create base page with the common elements
// and then let other pages to inherit it 

import { EventsPage } from '../pageObjects/EventsPage'
import { test } from '@playwright/test'

test('Events menu', async ({ page }) => {
    const eventsPage = new EventsPage(page)
    await eventsPage.goto()
    await eventsPage.tesenaFestClick()
})
