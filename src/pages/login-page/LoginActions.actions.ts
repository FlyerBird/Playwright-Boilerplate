import { type Page } from '@playwright/test';
import { LoginLocators } from '../../fixture/barrilFile';
import * as data from './login.data'; 

export class LoginActions {
  readonly page: Page;
  readonly loginLocators: LoginLocators;

  constructor(page: Page, loginLocators: LoginLocators) {
    this.page = page;
    this.loginLocators = loginLocators;
  }

  async performLogin(): Promise<void> {
    await this.page.goto(data.LOGIN_PAGE_URL);
    await this.loginLocators.usernameLocator.fill(data.USER_TRAINING);
    await this.loginLocators.passwordLocator.fill(data.PASS);
    await this.loginLocators.loginButtonLocator.click();
  }

  async performLoginWithWrongData(): Promise<void> {
    await this.page.goto(data.LOGIN_PAGE_URL);
    await this.loginLocators.usernameLocator.fill('incorrect_username');
    await this.loginLocators.passwordLocator.fill('incorrect_password');
    await this.loginLocators.loginButtonLocator.click();
  }

  async performLoginWithEmptyData(): Promise<void> {
    await this.page.goto(data.LOGIN_PAGE_URL);
    await this.loginLocators.usernameLocator.fill('');
    await this.loginLocators.passwordLocator.fill('');
    await this.loginLocators.loginButtonLocator.click();
  }
}
