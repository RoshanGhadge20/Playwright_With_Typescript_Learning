import { PlaywrightPage } from "../../pages/playwrightPage";
import { BasePage } from "../../pages";
import { test } from './../../fixtures/page.fixture'
import * as allure from "allure-js-commons";

test.describe('Working on playwright page', async () => {
    test.setTimeout(240000);

    allure.displayName(" Practice Test Authentication");
    allure.owner("Roshan Ghadge");
    allure.tags("Web interface", "Authentication", "GUI Handling");
    allure.severity("Major");


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
