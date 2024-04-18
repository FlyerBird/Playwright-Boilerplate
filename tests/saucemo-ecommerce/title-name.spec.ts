import { test } from '../../src/fixture/basePage';

test('Check if the title of the Saucedemo website is "Swag Labs"', async ({ page, commonAssertions }) => {
  await page.goto('https://www.saucedemo.com/');
  
  await commonAssertions.verifyPageTitle("Swag Labs");
});
