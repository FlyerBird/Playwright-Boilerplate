import { Page } from "@playwright/test";
import { CommonLocators } from '../../fixture/barrilFile';
import * as data from './common.data';  

export class CommonActions {
    readonly page: Page;
    readonly commonLocators: CommonLocators;

    constructor(page: Page, commonLocators: CommonLocators) {
        this.page = page;
        this.commonLocators = commonLocators;
    }

    async openBurgerMenu() {
        await this.commonLocators.burguerMenuLocator.click();
    }

    async logout() {
        await this.openBurgerMenu();  
        await this.commonLocators.logoutButtonLocator.click();
    }

    async navigateToProductDetails() {
        await this.commonLocators.productItemLocator.click();
        await this.page.waitForURL(data.INVENTORY_PAGE_URL + data.ITEM_ID);
    }

    async addAllItemsToCart() {
        const productElements = await this.commonLocators.inventoryItemsLocator.all();
        let itemsAddedToCart = 0;

        for (const product of productElements) {
            const addToCartButton = product.locator(this.commonLocators.addToCartLocator);
            await addToCartButton.click();
            itemsAddedToCart++;
        } 
        
        return itemsAddedToCart; 
    }

    async getBurgerMenuContents() {
        await this.openBurgerMenu();
        return this.page.locator('div.bm-menu-wrap').textContent();
    }
}
