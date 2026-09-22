import { Locator, Page, selectors } from "@playwright/test";

export class Footer {
    page: Page;
    private readonly footerSection: Locator;
    private readonly footerText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.footerSection = this.page.locator("css=div#footer-3");
        this.footerText = this.page.locator("css=#Attribution1 div.widget-content");
    }
    async footerSectionControl(): Promise<string> {
        let footerContent: string | null = await this.footerText.textContent();
        if (footerContent != null) {
            return footerContent;
        }
        else {
            console.log(`Text does not get fetched correctly`);
            return "";
        }
    }
}