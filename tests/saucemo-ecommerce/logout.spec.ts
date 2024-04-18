import { test } from '../../src/fixture/basePage';

  test('Verify successful logout redirects to the login page', async ({ loginActions, commonActions, commonAssertions }) => {
    await loginActions.performLogin();
    await commonActions.logout();
    
    await commonAssertions.verifyCurrentUrl();
    await commonAssertions.verifyElementNotVisible();
  });
