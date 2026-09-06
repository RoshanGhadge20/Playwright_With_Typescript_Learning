import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class PracticeAllModules extends BasePage {
    // private readonly page: Page;

    private readonly nameField;
    private readonly countryDropdown;







    constructor(page: Page) {
        super(page);
        // this.page = page;
        this.nameField = this.page.getByPlaceholder('Enter Name');
        this.countryDropdown = this.page.locator('select#country');
    }


    async PerformCommonActions() {
        await this.nameField.fill('Roshan Ghadge');
        await this.countryDropdown.selectOption({ label: 'India' });
    }

    async handlingDialogAlerts() {

    }

}