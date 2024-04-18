import { Locator, Page } from "@playwright/test";

export class LoginLocators {
    readonly usernameLocator: Locator; 
    readonly passwordLocator: Locator; 
    readonly loginButtonLocator: Locator;
    readonly errorMessageLocator: Locator;

    constructor(page: Page) {
        this.usernameLocator = page.getByTestId('username');
        this.passwordLocator = page.getByTestId('password');
        this.loginButtonLocator = page.getByTestId('login-button');
        this.errorMessageLocator = page.getByTestId('error');
    }
}
