import { test } from '../../src/fixture/basePage';

test('Add items into the Cart after logging in', async ({ commonLocators, commonAssertions, loginActions, commonActions }) => {
  await loginActions.performLogin();
  const itemsAdded = await commonActions.addAllItemsToCart();
  
  const totalItems = await commonLocators.inventoryItemsLocator.count();
  await commonAssertions.verifyItemsInCart(itemsAdded, totalItems);
});
