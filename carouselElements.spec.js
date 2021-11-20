const { test, expect } = require('@playwright/test');
const assert = require('assert')

test('How many elements in carousel', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/#');

	const carouselItemsSelector = '.carousel-inner .carousel-item'
	const visibleItems = await page.$$(carouselItemsSelector)
	assert.equal(visibleItems.length, 3)
});