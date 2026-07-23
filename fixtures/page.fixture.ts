import { test as base, expect, Locator } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { BasePage } from '../pages/BasePage';
import { HomePage } from '../pages/HomePage';
import { ENV } from '../config/envHelper';

type pageFixture = {
    loginPage: LoginPage;
    homePage: HomePage;
}

export const test = base.extend<pageFixture>(
    {
        // Login page 
        loginPage: async ({ page }, use) => {
            await page.goto(ENV.BASEURL, { waitUntil: 'networkidle' })
            await use(new LoginPage(page));
        },

        // Home Page 
        homePage: async ({ page }, use) => {
            await page.goto("https://testautomationpractice.blogspot.com/", { waitUntil: 'networkidle' });
            await use(new HomePage(page));
        },
    }
)
