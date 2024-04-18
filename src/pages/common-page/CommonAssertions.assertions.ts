import { Page, expect } from "@playwright/test";
import { LOGIN_PAGE_URL } from "../login-page/login.data";
import { CommonLocators } from '../../fixture/barrilFile';
import * as data from "./common.data";

export class CommonAssertions {
    readonly page: Page;
    readonly commonLocators: CommonLocators;

    constructor(page: Page, commonLocators: CommonLocators) {
        this.page = page;
        this.commonLocators = commonLocators;
    }

    async verifyPageTitle(expectedTitle: string) {
        const actualTitle = await this.page.title();
        await expect(actualTitle).toBe(expectedTitle);
    }

    async verifyCurrentUrl() {
        await expect(this.page).toHaveURL(LOGIN_PAGE_URL);
    }

    async verifyElementNotVisible() {
        await expect(this.commonLocators.burguerMenuLocator).not.toBeVisible();
    } 

    async verifyItemsInCart(actualCount: number, expectedCount: number) {
        await expect(actualCount).toBe(expectedCount); 
    }

    async verifyBurgerMenuSections() {
        for (const section of data.burguerSections) {
            await expect(this.page.locator('div.bm-menu-wrap')).toContainText(section);
        }
    }

    async verifyURL(productId: number) {
        await expect(this.page).toHaveURL(data.INVENTORY_PAGE_URL + productId);
    }

    async verifyAddToCartVisible() {
        await expect(this.commonLocators.addToCartLocator).toBeVisible();
    }

    async verifyProductDetails() {
        await expect(this.commonLocators.productPriceLocator).toBeVisible();
        await expect(this.commonLocators.productItemLocator).toBeTruthy();
        await expect(this.page).toHaveURL(data.INVENTORY_PAGE_URL + data.ITEM_ID);
    }
}
