import { test as base, expect, Locator } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { BasePage } from '../pages/BasePage';
import { HomePage } from '../pages/HomePage';
import { ENV } from '../config/envHelper';
import { parseEnv } from 'node:util';
import { PlaywrightPage } from '../pages/playwrightPage';

type pageFixture = {
    loginPage: LoginPage;
    homePage: HomePage;
    playwrightPage: PlaywrightPage;
}

export const test = base.extend<pageFixture>(
    {
        // Login page 
        loginPage: async ({ page, request }, use) => {
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

        // Playwiright page
        playwrightPage: async ({ page, request }, use) => {
            await page.goto(ENV.BASEURL_PLAYWRIGHTPAGE, { waitUntil: 'networkidle' });
            await use(new PlaywrightPage(page));
            await page.close();
        },
    }
)
