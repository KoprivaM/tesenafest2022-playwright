import { BasePage } from './BasePage'

export class EventsPage extends BasePage {
    constructor(page) {
        super(page)
        this.link = this.baseLink + 'events/'
        this.header = page.locator('...') // some elements of the page...
    }

    async goto() {
        await this.page.goto(this.link)
    }
}