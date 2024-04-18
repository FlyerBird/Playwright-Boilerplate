import { test } from '../../src/fixture/basePage';

test('Verify access to product details page from inventory page', async ({ loginActions, commonActions, commonLocators, commonAssertions }) => {
    await loginActions.performLogin();
    await commonActions.navigateToProductDetails();

    await commonAssertions.verifyProductDetails();
  });
