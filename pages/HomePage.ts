import { Page, test, expect, Locator } from '@playwright/test'
import { BasePage } from './BasePage';

export class HomePage extends BasePage {

    // Data Entry Form Locators 
    private readonly dataEntryFormTitle: Locator;
    private readonly nameField: Locator;
    private readonly emailField: Locator;
    private readonly phoneField: Locator;

    constructor(page: Page) {
        super(page);
        // Data Entry Form Locators
        this.dataEntryFormTitle = this.page.getByText("Data Entry Form");
        this.nameField = this.page.getByPlaceholder("Enter Name");
        this.emailField = this.page.getByPlaceholder("Enter Email");
        this.phoneField = this.page.getByPlaceholder("Enter Phone");
    }


    async navigateToURL() {
        await this.goto("https://testautomationpractice.blogspot.com/");
    }

    async verifyTitleOfGUISection() {
        await test.step("Fetching the text Content of page title", async () => {
            let sectionTitle = await this.dataEntryFormTitle.textContent();
            if (sectionTitle?.trim() && sectionTitle !== null) {
                if (sectionTitle.includes("Data Entry Form")) {
                    console.log(`Section title is as expected - ${sectionTitle}`);
                }
            }
            else {
                console.log(`Section title is not as per expected - ${sectionTitle}`);
            }
        });
    }


    async fillBasicDetails(name: string, email: string, phoneNumber: bigint) {
        await test.step(`Started to fill the basic details into form`, async () => {
            await this.fill(this.nameField, name.trim());
            await this.fill(this.emailField, email.trim());
            await this.fill(this.phoneField, phoneNumber.toString());
        });
    }
}