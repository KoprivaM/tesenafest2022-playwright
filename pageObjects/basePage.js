export class BasePage {
	constructor(page) {
		this.page = page
		this.baseLink = 'https://www.tesena.com/en/'
		this.tesenaFestMenu = page.locator('a:has-text("Tesena Fest") >> nth=1')
	}

	async tesenaFestClick() {
		await this.tesenaFestMenu.click()
	}

}
