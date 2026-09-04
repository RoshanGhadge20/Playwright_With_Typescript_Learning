import { PlaywrightPage } from "../../pages/playwrightPage";
import { BasePage } from "../../pages";
import { test } from './../../fixtures/page.fixture'


test.describe('Working on playwright page', async () => {


    test("Working with playwright getByRole Locators", async ({ playwrightPage }) => {
        playwrightPage.testgetByRole();
    });

    test("Working with playwright getByText Locators", async ({ playwrightPage }) => {
        playwrightPage.testgetByText();
    });

    test("Working with playwright getByLabel Locators", async ({ playwrightPage }) => {
        playwrightPage.testgetByLabel();
    });

});
