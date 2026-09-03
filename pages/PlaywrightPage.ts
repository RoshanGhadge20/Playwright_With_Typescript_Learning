import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class PlaywrightPage extends BasePage {

    // Get by Role Elements
    private readonly primaryActionButton;
    private readonly toggleButton;
    private readonly divButtonRole;
    private readonly userNameTextField;
    private readonly checkboxField;
    private readonly homeLink;
    private readonly productsLink;
    private readonly contactLink;

    // Get by Text Elements
    private readonly listItem1;
    private readonly listItem1WithLink;
    private readonly specialUniqueTextIdentifier;


    constructor(page: Page) {
        super(page);
        // get By Role Elements
        this.primaryActionButton = this.page.getByRole('button', { name: 'Primary Action' });
        this.toggleButton = this.page.getByRole('button', { name: 'Toggle Button' });
        this.divButtonRole = this.page.getByRole('button', {
            name: 'Div with button role'
        });
        this.userNameTextField = this.page.locator('input#username');
        this.checkboxField = this.page.locator("//input[@type='checkbox']")
        this.homeLink = this.page.locator('#role-locators').getByRole('link', { name: 'Home' });
        this.productsLink = this.page.locator('#role-locators').getByRole('link', { name: 'Products' });
        this.contactLink = this.page.locator('#role-locators').getByRole('link', { name: 'Contact' });

        // Get by text elements
        this.listItem1 = this.page.getByText("List item 1");
        this.listItem1WithLink = this.page.getByText('List item 2 with');
        this.specialUniqueTextIdentifier = this.page.getByText('Special: Unique text identifier');


    }


    async testgetByRole() {
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.primaryActionButton).toBeVisible({ timeout: 5000 });
        await this.primaryActionButton.click({ timeout: 5000 });
        await expect(this.toggleButton).toBeVisible({ timeout: 5000 });
        await this.toggleButton.click({ timeout: 5000 });
        await expect(this.divButtonRole).toBeVisible({ timeout: 5000 });
        await this.divButtonRole.click({ timeout: 5000 });
        await expect(this.userNameTextField).toBeVisible({ timeout: 5000 });
        await this.userNameTextField.fill('Roshan Ghadge');
        // await expect(this.checkboxField).toBeVisible({ timeout: 5000 });
        await this.checkboxField.click({ timeout: 5000 });
        await expect(this.homeLink).toBeVisible();
        await this.homeLink.click();
        await this.page.goBack();
        await expect(this.productsLink).toBeVisible();
        await this.productsLink.click();
        await this.page.goBack();
        await expect(this.contactLink).toBeVisible();
        await this.contactLink.click();
        await this.page.goBack();
    }

    async testgetByText() {
        await this.page.waitForLoadState('networkidle');
        await expect(this.listItem1).toBeVisible();
        await expect(this.listItem1WithLink).toBeVisible();
        await expect(this.specialUniqueTextIdentifier).toBeVisible();
    }
}