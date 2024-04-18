import { test } from '../../src/fixture/basePage';

test('Verify that after logging in, the burger menu contains expected sections', async ({ loginActions, commonLocators, commonAssertions }) => {
  await loginActions.performLogin();
  await commonLocators.burguerMenuLocator.click();
    
  await commonAssertions.verifyBurgerMenuSections();
})
