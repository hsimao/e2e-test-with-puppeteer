export default class TopBar {
	async isTopBarDisplayed() {
		await page.waitForSelector('.brand')
		await page.waitForSelector('#signin_button')
	}

	async clickSingInButton() {
		await page.click('#signin_button')
	}
}
