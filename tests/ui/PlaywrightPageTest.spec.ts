import { PlaywrightPage } from "../../pages/playwrightPage";
import { BasePage } from "../../pages";
import { test } from './../../fixtures/page.fixture'


test.describe('Working on playwright page', async () => {


    test("Working with playwright getByRole Locators", async ({ playwrightPage }) => {
        playwrightPage.testgetByRole();
    })
});
