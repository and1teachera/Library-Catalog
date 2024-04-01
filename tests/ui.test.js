const {expect, test} = require('@playwright/test');


test('Verify all books link is visible', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.waitForSelector('#site-header > nav > section > a');

  const allBooksLink = await page.$('#site-header > nav > section > a');
  const isAllBooksVisible = await allBooksLink.isVisible();
  expect(isAllBooksVisible).toBeTruthy();
});


test('Verify login button is visible', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.waitForSelector('#site-header > nav > section > a');

  const loginButton = await page.$('#site-header > nav > section > a');
  const isLoginButtonVisible = await loginButton.isVisible();
  expect(isLoginButtonVisible).toBeTruthy();
});


test('Verify register button is visible', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.waitForSelector('#site-header > nav > section > a');

  const registerButton = await page.$('#guest > a:nth-child(2)');
  const isRegisterButtonVisible = await registerButton.isVisible();
  expect(isRegisterButtonVisible).toBeTruthy();
});