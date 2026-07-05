import { test } from '../../fixtures/page.fixture';
import { LoginPage } from '../../pages/LoginPage'

test.describe("Login Flow", async () => {
    test('Check Login Functionality with valid credentials', async ({ loginPage }) => {
        await loginPage.navigateToURL();
        await loginPage.loginWithValidDetails("student", "Password123");
        await loginPage.isUserLoggedIn();
    });

    test('Check Login Functionality with invalid username', async ({ loginPage }) => {
        await loginPage.navigateToURL();
        await loginPage.loginWithValidDetails("incorrectUser", "Password123");
        await loginPage.isUserLoggedIn();
        await loginPage.verifyIncorrectUserNameMessage("Your username is invalid!");
    });

    test('Check Login Functionality with invalid password', async ({ loginPage }) => {
        await loginPage.navigateToURL();
        await loginPage.loginWithValidDetails("student", "incorrectPassword");
        await loginPage.isUserLoggedIn();
        await loginPage.verifyIncorrectPasswordValidationMessage("Your password is invalid!");
    });

});