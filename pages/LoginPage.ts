import { Page, test, expect, Locator } from '@playwright/test'
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    private readonly userNameField: Locator;
    private readonly passwordField: Locator;
    private readonly submitButton: Locator;
    private readonly userNameFieldValidationMessage: Locator;
    private readonly passwordFieldValidationMessage: Locator;


    constructor(page: Page) {
        super(page);
        this.userNameField = this.page.getByRole('textbox', { name: /username/i });
        this.passwordField = this.page.getByRole('textbox', { name: /password/i });
        this.submitButton = this.page.getByRole('button', { name: /submit/i })
        this.userNameFieldValidationMessage = this.page.getByText(/Your username is invalid!/i).first();
        this.passwordFieldValidationMessage = this.page.getByText(/Your password is invalid!/i).first();

    }

    async navigateToURL() {
        await this.goto("https://practicetestautomation.com/practice-test-login/");
    }

    async loginWithValidDetails(username: string, password: string) {
        await this.fill(this.userNameField, username.trim());
        await this.fill(this.passwordField, password.trim());
        await this.click(this.submitButton);
    }

    async isUserLoggedIn(): Promise<boolean> {
        const fetchURL: string = this.page.url();
        console.log(`Fetched URL is ${fetchURL}`);
        let isLoggedIn: boolean = fetchURL.includes("/logged-in-successfully/");
        if (isLoggedIn) {
            console.log(`User is logged in correctly with credentials`);
        }
        else {
            console.log(`User is not logged in with credentials`);
        }
        return isLoggedIn;
    }

    async verifyIncorrectUserNameMessage(message: string) {
        await expect(this.userNameFieldValidationMessage).toBeVisible();
        await expect(this.userNameFieldValidationMessage).toHaveText(message.trim())
        console.log("Incorrect username field validation message shown correctly")
    }

    async verifyIncorrectPasswordValidationMessage(message: string) {
        await expect(this.passwordFieldValidationMessage).toBeVisible();
        await expect(this.passwordFieldValidationMessage).toHaveText(message.trim())
        console.log("Incorrect password field validation message shown correctly")
    }
}