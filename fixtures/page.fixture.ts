import { test as base, expect, Locator } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { BasePage } from '../pages/BasePage';
import { HomePage } from '../pages/HomePage';
import { ENV } from '../config/envHelper';
import { parseEnv } from 'node:util';

type pageFixture = {
    loginPage: LoginPage;
    homePage: HomePage;
}

export const test = base.extend<pageFixture>(
    {
        // Login page 
        loginPage: async ({ page }, use) => {
            await page.goto(ENV.BASEURL_LOGINPAGE, { waitUntil: 'networkidle' })
            await use(new LoginPage(page));
            await page.close();
        },

        // Home Page 
        homePage: async ({ page, request }, use) => {
            await page.goto(ENV.BASEURL_HOMEPAGE, { waitUntil: 'networkidle' });
            await use(new HomePage(page));
            await page.close();
        },
    }
)
