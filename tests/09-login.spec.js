// lets start with page object model
// first prepare the page object
// lets make page object for this dummy login page
// 'http://the-internet.herokuapp.com/login'
// we want to fill name and password
// click login and see we are logged

import { LoginPage } from '../pageObjects/loginPage'
import { test } from '@playwright/test'

test('E2E login', async ({ page }) => {
	const loginPage = new LoginPage(page)
	await loginPage.goto()
	await loginPage.login('tomsmith', 'SuperSecretPassword!')
	await loginPage.expectSecure()
})

// we also want to try wrong password and expect error message

test('Wrong password', async ({ page }) => {
	const loginPage = new LoginPage(page)
	await loginPage.goto()
	await loginPage.login('tomsmith', 'Pass123')
	await loginPage.expectErrorText('Your password is invalid!')
})

// ==== rework:

test.describe.parallel('Login page tests', () => {
	let loginPage

	test.beforeEach(async ({ page }) => {
		loginPage = new LoginPage(page)
		await loginPage.goto()
	})

	test('E2E login', async () => {
		await loginPage.login('tomsmith', 'SuperSecretPassword!')
		await loginPage.expectSecure()
	})

	test('Wrong password', async () => {
		await loginPage.login('tomsmith', 'Pass123')
		await loginPage.expectErrorText('Your password is invalid!')
	})
})