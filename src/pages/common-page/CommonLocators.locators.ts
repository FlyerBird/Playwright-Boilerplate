import { Locator, Page } from "@playwright/test";
import * as data from "./common.data";

export class CommonLocators {
    readonly page: Page;
    readonly inventoryItemsLocator: Locator;
    readonly addToCartLocator: Locator;
    readonly productNameLocator: Locator;
    readonly burguerMenuLocator: Locator;
    readonly logoutButtonLocator: Locator;
    readonly productPriceLocator: Locator;
    readonly productItemLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inventoryItemsLocator = page.locator('div.inventory_item');
        this.addToCartLocator = page.getByRole('button', {name: 'Add to cart'});
        this.productNameLocator = page.locator('div.inventory_item_name'); 
        this.burguerMenuLocator = page.getByRole('button', { name: 'Open Menu' });
        this.logoutButtonLocator = page.getByRole('link', { name: 'Logout' });
        this.productPriceLocator = page.getByTestId('inventory-item-price');
        this.productItemLocator =  page.locator(`#item_${data.ITEM_ID}_title_link`);
        }
    }
