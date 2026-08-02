import { test, expect, Locator, Page } from '@playwright/test'
import { url } from 'node:inspector';

export abstract class BasePage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto(URL: string): Promise<void> {
        await this.page.goto(URL, { waitUntil: 'networkidle' });
        console.log(`Navigated to ${URL} and waited until complete load`);
    }

    async click(locator: Locator): Promise<void> {
        await locator.waitFor({ state: 'visible', timeout: 6000 });
        await locator.click();
        console.log(`Clicked on element ${locator}`);
    }

    async fill(locator: Locator, value: string): Promise<void> {
        await locator.waitFor({ state: 'visible', timeout: 6000 });
        await locator.clear();
        await locator.fill(value.toString());
        console.log(`Filled the value into the field : ${locator} with value : ${value}`);
    }

    async dbclick(locator: Locator): Promise<void> {
        await locator.waitFor({ state: 'visible', timeout: 6000 });
        await locator.dblclick();
        console.log(`Performed the double click on the element ${locator}`);
    }

    async dragAndDrop(sourceLocator: Locator, destinationLocator: Locator): Promise<void> {
        await sourceLocator.waitFor({ state: 'visible', timeout: 6000 });
        await destinationLocator.waitFor({ state: 'visible', timeout: 6000 });
        await sourceLocator.dragTo(destinationLocator);
        console.log(`Performed the drag and drop to the element successfully`);
    }

    async getNumberOfElements(locator: Locator): Promise<number> {
        await locator.waitFor({ state: 'visible', timeout: 6000 });
        let numberOfElements = await locator.count();
        return numberOfElements;
    }




}