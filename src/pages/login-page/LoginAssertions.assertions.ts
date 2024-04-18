import { Page, expect } from '@playwright/test';
import { LoginLocators } from '../../fixture/barrilFile';

export class LoginAssertions {
    readonly page: Page;
    readonly loginLocators: LoginLocators;

    constructor(page: Page, loginLocators: LoginLocators) {
        this.page = page;
        this.loginLocators = loginLocators;
    }

    async verifySuccessfulLogin(expectedUrl: string) {
        await expect(this.page).toHaveURL(expectedUrl);
    }

    async verifyLoginFailure(expectedMessage: string = 'Epic sadface: Username and password do not match any user in this service') {
        await expect(this.loginLocators.errorMessageLocator).toContainText(expectedMessage);
    }

    async verifyFieldsAreRequired(expectedMessage: string = 'Epic sadface: Username is required') {
        await expect(this.loginLocators.errorMessageLocator).toContainText(expectedMessage);

    }
}
