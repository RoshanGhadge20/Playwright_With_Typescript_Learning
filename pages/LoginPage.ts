import { Page, test, expect, Locator } from '@playwright/test'
import { BasePage } from './BasePage';



export class LoginPage extends BasePage {

    private readonly userNameField: Locator;
    private readonly passwordField: Locator;
    private readonly submitButton: Locator;

    constructor(page: Page) {
        super(page);
        this.userNameField = this.page.getByRole('textbox', { name: /username/i });
        this.passwordField = this.page.getByRole('textbox', { name: /password/i });
        this.submitButton = this.page.getByRole('button', { name: /submit/i })
    }

    async navigateToURL() {
        await this.goto("https://practicetestautomation.com/practice-test-login/");
    }

    async loginWithValidDetails(username: string, password: string) {
        await this.fill(this.userNameField, username);
        await this.fill(this.passwordField, password);
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
}