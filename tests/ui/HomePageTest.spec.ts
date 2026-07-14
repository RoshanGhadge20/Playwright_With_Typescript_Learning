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

test("Working with date picker 1", async ({ homePage }) => {
    await homePage.navigateToURL();
    await homePage.handlingDatePicker1(new Date("2026-04-01"));
})

test("Working with date picker 2", async ({ homePage }) => {
    await homePage.navigateToURL();
    await homePage.handlingDatePicker2("Jan", "2024", 4)
});

test("Checking validation message for date picker 3", async ({ homePage }) => {
    await homePage.navigateToURL();
    await homePage.checkingValidationMessageForDateField3();
});

test("Checking date range in date picker 3", async ({ homePage }) => {
    await homePage.navigateToURL();
    await homePage.checkRangeBetweenDates("2025-02-02", "2026-05-02");
});

test("Working with upload file details section", async ({ homePage }) => {
    await homePage.navigateToURL();
    await homePage.uploadSingleFile("test-data/SampleTest.pdf");
});

test("Working with upload multiple details section", async ({ homePage }) => {
    await homePage.navigateToURL();
    await homePage.uploadMultipleFile("test-data/SampleTest.pdf");
})

test("Working subscribed to section", async ({ homePage }) => {
    await homePage.navigateToURL();
    await homePage.handlingSubscribeToSection();
})

test("Working with static table", async ({ homePage }) => {
    await homePage.navigateToURL();
    await homePage.workingWithStaticWebTable();
})