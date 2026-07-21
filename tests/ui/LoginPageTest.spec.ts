import { test } from '../../fixtures/page.fixture';
import { LoginPage } from '../../pages/'
import { env } from '../../config/global-setup';


test.describe("Login Flow", async () => {
    test('Check Login Functionality with valid credentials', async ({ loginPage }) => {
        await loginPage.navigateToURL();
        await loginPage.loginWithValidDetails(env.username, env.password);
        await loginPage.isUserLoggedIn();
    });

    test('Check Login Functionality with invalid username', async ({ loginPage }) => {
        await loginPage.navigateToURL();
        await loginPage.loginWithValidDetails("incorrectUser", env.password);
        await loginPage.isUserLoggedIn();
        await loginPage.verifyIncorrectUserNameMessage("Your username is invalid!");
    });

    test('Check Login Functionality with invalid password', async ({ loginPage }) => {
        await loginPage.navigateToURL();
        await loginPage.loginWithValidDetails(env.username, "incorrectPassword");
        await loginPage.isUserLoggedIn();
        await loginPage.verifyIncorrectPasswordValidationMessage("Your password is invalid!");
    });

});