import { test, Page, expect, Locator } from '@playwright/test'
import { BasePage } from '../pages';


export class HandleMultipleTabsWindows extends BasePage {


    constructor(page: Page) {
        super(page);
    }


    async HandleMultipleTabs(newTab: Locator) {
        // Handling the multiple windows
        const parentPageURL = await this.page.url
        const [multipleTab] = await Promise.all([
            this.page.context().waitForEvent('page'),
            newTab.click()
        ]);
        await multipleTab.waitForLoadState('load');
        // await multipleTab.bringToFront();
        await this.page.bringToFront();

    }


}