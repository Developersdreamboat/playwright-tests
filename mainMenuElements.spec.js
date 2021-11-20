const { test, expect } = require('@playwright/test');
const assert = require('assert')
const firstElementText = 'Samsung galaxy s6'
test('Main Menu Elements Test', async ({ page }) => {
	await page.goto('https://www.demoblaze.com/index.html');
	const firstElementSelector = '#tbodyid > div:nth-child(1) > div > div > h4 > a'
	const firstElementActual = await page.innerText(firstElementSelector)
	assert.equal(firstElementActual, firstElementText)
});