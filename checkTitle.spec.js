const { test, expect } = require('@playwright/test');
const assert = require('assert')

test('Check title', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/#');

  assert.equal(await page.innerText('title'), 'STORE')
});
