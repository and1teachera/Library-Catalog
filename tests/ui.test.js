const {expect, test} = require('@playwright/test');

const baseUrl = 'http://localhost:3000/';
const loginSelector = '#guest > a:nth-child(1)';

test('Verify all books link is visible', async ({ page }) => {
  await page.goto(baseUrl);
  await page.waitForSelector('#site-header > nav > section > a');

  const allBooksLink = await page.$('#site-header > nav > section > a');
  const isAllBooksVisible = await allBooksLink.isVisible();
  expect(isAllBooksVisible).toBeTruthy();
});


test('Verify login button is visible', async ({ page }) => {
  await page.goto(baseUrl);
  await page.waitForSelector('#site-header > nav > section > a');

  const loginButton = await page.$(loginSelector);
  const isLoginButtonVisible = await loginButton.isVisible();
  expect(isLoginButtonVisible).toBeTruthy();
});


test('Verify register button is visible', async ({ page }) => {
  await page.goto(baseUrl);
  await page.waitForSelector('#site-header > nav > section > a');

  const registerButton = await page.$('#guest > a:nth-child(2)');
  const isRegisterButtonVisible = await registerButton.isVisible();
  expect(isRegisterButtonVisible).toBeTruthy();
});


test('Verify all books link is visible after a login', async ({ page }) => {
  await page.goto(baseUrl);
  await page.waitForSelector('#site-header > nav > section > a');
  await page.click(loginSelector);
  await page.fill('#email', 'peter@abv.bg');
  await page.fill('#password', '123456');
  await page.click('#login-form > fieldset > input');

  const logout = await page.$('#logoutBtn');
  const isLogoutButtonVisible = await logout.isVisible();
  expect(isLogoutButtonVisible).toBeTruthy();

  const allBooksLink = await page.$('#site-header > nav > section > a');
  const isAllBooksVisible = await allBooksLink.isVisible();
  expect(isAllBooksVisible).toBeTruthy();

});