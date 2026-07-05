import { Page, test, expect, Locator } from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'

test('Check Login Functionality', async ({ page }) => {
    const loginPageObj = new LoginPage(page);
    await loginPageObj.navigateToURL();
    await loginPageObj.loginWithValidDetails("student", "Password123");
    await loginPageObj.isUserLoggedIn();


})