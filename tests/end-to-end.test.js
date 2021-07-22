import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import FeedbackPage from '../pages/FeedbackPage'
import TopBar from '../pages/components/TopBar'

import { username, password } from '../config'

describe('End To End Test', () => {
	let homePage, loginPage, feedbackPage, topBar

	beforeAll(async () => {
		homePage = new HomePage()
		loginPage = new LoginPage()
		feedbackPage = new FeedbackPage()
		topBar = new TopBar()
	})

	it('should load home page', async () => {
		await homePage.visit()
		await homePage.isNavbarDisplayed()
	})

	it('should submit feedback', async () => {
		await homePage.clickFeedbackLink()
		await feedbackPage.isFeedbackFormDisplayed()
		await feedbackPage.submitFeedback(
			'mars',
			'mars@gmail.com',
			'subject',
			'comment'
		)
	})

	it('shoud login to application', async () => {
		await homePage.visit()
		await topBar.isTopBarDisplayed()
		await topBar.clickSingInButton()
		await loginPage.isLoginFormDisplayed()
		await loginPage.login(username, password)

		// 詢問是否訪問不安全網頁, 點擊「進階」
		await page.waitForSelector('#details-button')
		await page.click('#details-button')
		// 點擊「前往」
		await page.waitForSelector('#proceed-link')
		await page.click('#proceed-link')
	})
})
