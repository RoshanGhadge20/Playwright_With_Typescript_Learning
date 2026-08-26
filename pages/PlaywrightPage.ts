import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class PlaywrightPage extends BasePage {

    private readonly primaryActionButton;
    private readonly toggleButton;
    private readonly divButtonRole;
    private readonly userNameTextField;
    private readonly checkboxField;

    constructor(page: Page) {
        super(page);
        // get By Role Elements
        this.primaryActionButton = this.page.getByRole('button', { name: 'Primary Action' });
        this.toggleButton = this.page.getByRole('button', { name: 'Toggle Button' });
        this.divButtonRole = this.page.getByRole('button', {
            name: 'Div with button role'
        });
        this.userNameTextField = this.page.getByRole('textbox').filter({ has: this.page.locator('input#username') });
        this.checkboxField = this.page.getByRole('checkbox', { name: 'Accept terms' });


    }


    async testgetByRole() {
        await expect(this.primaryActionButton).toBeVisible({ timeout: 5000 });
        await this.primaryActionButton.click({ timeout: 5000 });
        await expect(this.toggleButton).toBeVisible({ timeout: 5000 });
        await this.toggleButton.click({ timeout: 5000 });
        await expect(this.divButtonRole).toBeVisible({ timeout: 5000 });
        await this.divButtonRole.click({ timeout: 5000 });
        await expect(this.userNameTextField).toBeEnabled({ timeout: 5000 });
        await this.userNameTextField.type('Roshan Ghadge', { delay: 500 });
        await expect(this.checkboxField).toBeVisible({ timeout: 5000 });
        await this.checkboxField.click({ timeout: 5000 });
    }
}