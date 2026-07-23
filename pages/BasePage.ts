import { test, expect, Locator, Page } from '@playwright/test'

export abstract class BasePage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto(URL: string): Promise<void> {
        await this.page.goto(URL, { waitUntil: 'networkidle' });
    }

    async click(locator: Locator): Promise<void> {
        await locator.waitFor({ state: 'visible', timeout: 6000 });
        await locator.click();
    }

    async fill(locator: Locator, value: string): Promise<void> {
        await locator.waitFor({ state: 'visible', timeout: 6000 });
        await locator.fill(value.toString());
    }


}