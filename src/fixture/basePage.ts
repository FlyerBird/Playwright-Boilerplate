import { test as base } from '@playwright/test';
import { LoginLocators, LoginActions, LoginAssertions, CommonLocators, CommonActions, CommonAssertions } from './barrilFile';

export const test = base.extend<{
    loginLocators: LoginLocators;
    loginActions: LoginActions;
    loginAssertions: LoginAssertions;
    commonLocators: CommonLocators;
    commonActions: CommonActions;
    commonAssertions: CommonAssertions;
    
  }>({
    loginLocators: async ({ page }, use) => {
      await use(new LoginLocators(page));
    },
    loginActions: async ({ page, loginLocators }, use) => {
        await use(new LoginActions(page, loginLocators));
      },
    loginAssertions: async ({ page, loginLocators }, use) => {
        await use(new LoginAssertions(page, loginLocators));
      },
    commonLocators: async ({ page }, use) => {
        await use(new CommonLocators(page));
      },
    commonActions: async ({ page, commonLocators }, use) => {  
        await use(new CommonActions(page, commonLocators));
      },
    commonAssertions: async ({ page, commonLocators }, use) => {  
        await use(new CommonAssertions(page, commonLocators));
      },
    });

export { expect } from '@playwright/test';
