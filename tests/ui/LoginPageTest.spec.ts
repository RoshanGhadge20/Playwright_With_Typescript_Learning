import { test } from '../../fixtures/page.fixture';
import { ENV } from '../../config/envHelper';


test.describe("Login Flow", async () => {
    test('Check Login Functionality with valid credentials', async ({ loginPage }) => {
        await loginPage.loginWithValidDetails(ENV.USERNAME, ENV.PASSWORD);
        await loginPage.isUserLoggedIn();
    });

    test('Check Login Functionality with invalid username', async ({ loginPage }) => {
        await loginPage.loginWithValidDetails("incorrectUser", ENV.PASSWORD);
        await loginPage.isUserLoggedIn();
        await loginPage.verifyIncorrectUserNameMessage("Your username is invalid!");
    });

    test('Check Login Functionality with invalid password', async ({ loginPage }) => {
        await loginPage.loginWithValidDetails(ENV.USERNAME, "incorrectPassword");
        await loginPage.isUserLoggedIn();
        await loginPage.verifyIncorrectPasswordValidationMessage("Your password is invalid!");
    });

});