import { test } from '../../src/fixture/basePage';
import * as data from '../../src/pages/login-page/login.data';

test('Login with correct data', async ({ loginActions, loginAssertions }) => {
  await loginActions.performLogin();
  await loginAssertions.verifySuccessfulLogin(data.LOGIN_PAGE_URL + 'inventory.html');
});

test('Login with wrong data', async ({ loginActions, loginAssertions }) => {
  await loginActions.performLoginWithWrongData();
  await loginAssertions.verifyLoginFailure();
});

test('Login with empty data', async ({ loginActions, loginAssertions }) => {
  await loginActions.performLoginWithEmptyData();
  await loginAssertions.verifyFieldsAreRequired();
});
