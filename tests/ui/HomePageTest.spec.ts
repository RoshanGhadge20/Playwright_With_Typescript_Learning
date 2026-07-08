import { test } from './../../fixtures/page.fixture'
import { HomePage } from '../../pages/HomePage'
import { homedir } from 'node:os';

test("Verifying the page section title of the", async ({ homePage }) => {
    await homePage.navigateToURL();
    await homePage.verifyTitleOfGUISection();
})

test("Fill Basic details into Data entry form", async ({ homePage }) => {
    await homePage.navigateToURL();
    await homePage.fillBasicDetails("Roshan Ghadge", "roshanghadge20@gmail.com", 8767002000n, "Nerul Navi Mumbai");
});