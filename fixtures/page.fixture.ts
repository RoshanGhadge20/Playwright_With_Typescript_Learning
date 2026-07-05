import { test as base, expect, Locator } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { BasePage } from '../pages/BasePage';

type pageFixture = {
    loginPage: LoginPage;
}

export const test = base.extend<pageFixture>(
    {
        loginPage: async ({ page }, use) => {
            await use(new LoginPage(page));
        },
    }
)