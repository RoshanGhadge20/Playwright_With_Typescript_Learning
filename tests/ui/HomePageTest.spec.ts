import { test } from './../../fixtures/page.fixture'
import { LoginPage, HomePage } from '../../pages';


test.describe("All HomePage Interaction Individual Tests", () => {
    test("Verifying the page section title of the", async ({ homePage }) => {
        await homePage.verifyTitleOfGUISection();
    })

    test("Fill Basic details into Data entry form", async ({ homePage }) => {
        await homePage.fillBasicDetails("Roshan Ghadge", "roshanghadge20@gmail.com", 8767002000n, "Nerul Navi Mumbai");
    });

    test("Working with date picker 1", async ({ homePage }) => {
        await homePage.handlingDatePicker1(new Date("2026-04-01"));
    })

    test("Working with date picker 2", async ({ homePage }) => {
        await homePage.handlingDatePicker2("Jan", "2024", 4)
    });

    test("Checking validation message for date picker 3", async ({ homePage }) => {
        await homePage.checkingValidationMessageForDateField3();
    });

    test("Checking date range in date picker 3", async ({ homePage }) => {
        await homePage.checkRangeBetweenDates("2025-02-02", "2026-05-02");
    });

    test("Working with upload file details section", async ({ homePage }) => {
        await homePage.uploadSingleFile("test-data/SampleTest.pdf");
    });

    test("Working with upload multiple details section", async ({ homePage }) => {
        await homePage.uploadMultipleFile("test-data/SampleTest.pdf");
    });

    test("Working subscribed to section", async ({ homePage }) => {
        await homePage.handlingSubscribeToSection();
    });

    test("Working with static table", async ({ homePage }) => {
        await homePage.workingWithStaticWebTable();
    });

    test("Working with dynamic table", async ({ homePage }) => {
        await homePage.workingWithDynamicWebTable();
    });


    test("Working with wikipedia search", async ({ homePage }) => {
        await homePage.workingWithSearchField("Roshan");
    });


    test("Working with pagination of table", async ({ homePage }) => {
        await homePage.workingWithPaginationWebTable();
    });


    test("Working with dynamic Button section", async ({ homePage }) => {
        await homePage.workingWithDynamicButtonField();
    });

    test("Working with all types of alerts", async ({ homePage }) => {
        await homePage.workingWithAlerts();
    });

    test("Working with mouse hover section and fetching the suggested options", async ({ homePage }) => {
        await homePage.workingWithMouseSection();
    });

    test("Working with double click section", async ({ homePage }) => {
        await homePage.workingWithDoubleClick();
    });

    test("Working with drag and drop section", async ({ homePage }) => {
        await homePage.dragAndDrop();
    });

    test("Working with slider section", async ({ homePage }) => {
        await homePage.sliderBoard();
    });

    test("Working with the SVG Section", async ({ homePage }) => {
        await homePage.svgSection();
    });

    test("Working with the Footer Section", async ({ homePage }) => {
        await homePage.handlignFooterSection();
    });

    test("Working with the scrolling dropdown Section", async ({ homePage }) => {
        await homePage.scrollingDropdownSection();
    });

    test("Working with the mobile label Section", async ({ homePage }) => {
        await homePage.mobileLabelsFunction();
    });

    test("Working with the laptop link Section", async ({ homePage }) => {
        await homePage.laptopLinkFunction();
    });

    test("Working with the broken link Section", async ({ homePage }) => {
        await homePage.brokenlinksSection();
    });

    test("Working with the visitors section", async ({ homePage }) => {
        await homePage.workingWithVisitorsSection();
    });

});
