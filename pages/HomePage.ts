import { Page, test, expect, Locator, BrowserContext, Request, APIResponse } from '@playwright/test'
import { BasePage } from '../pages/BasePage';
import { validationMessage, roles } from '../config/enum';
import { Footer } from './components/Footer';
import { execPath } from 'node:process';
import { request } from 'node:http';
import { URL, Url } from 'node:url';
import { asyncWrapProviders } from 'node:async_hooks';
import * as allure from "allure-js-commons";
import { ContentType } from "allure-js-commons";
import { url } from 'node:inspector';

export class HomePage extends BasePage {

    // Reading the components
    readonly footer: Footer;


    // HomePage section 
    private readonly sections: Locator;

    // Data Entry Form Locators
    private readonly dataEntryFormTitle: Locator;
    private readonly nameField: Locator;
    private readonly emailField: Locator;
    private readonly phoneField: Locator;
    private readonly addressField: Locator;
    private readonly maleRadioButton: Locator;
    private readonly sundayDay: Locator;
    private readonly countryDropdown: Locator;
    private readonly countryDropdownOptions: Locator;
    private readonly colorsField: Locator;
    private readonly colorFieldOptions: Locator;
    private readonly sortedListField: Locator;
    private readonly sortedListFieldOptions: Locator;

    // File Upload Section
    private readonly uploadSingleFileSection: Locator;
    private readonly uploadMultipleFileSection: Locator;

    // Date picker fields
    private readonly datePicker1Field: Locator;
    private readonly datePicker2Field: Locator;
    private readonly datePickerUI: Locator;
    private readonly datePickerMonthSelection: Locator;
    private readonly datePickerYearSelection: Locator;
    private readonly datePicker3SubmitButton: Locator;
    private readonly datePicker3ValidationMessage: Locator;
    private readonly datePicker3StartDate: Locator;
    private readonly datePicker3EndDate: Locator;
    private readonly dateRangeMessage: Locator;

    // Subscribe to section
    private readonly subscribeToPostSection: Locator;
    private readonly staticWebTableHeading: Locator;

    // Web Tables Data
    private readonly staticWebTableData: Locator;
    private readonly dynamicWebTableHeading: Locator;
    private readonly dynamicWebTableData: Locator;

    // Search Field section
    private readonly searchInputField: Locator;
    private readonly searchButton: Locator;
    private readonly searchResultSection: Locator;
    private readonly searchResults: Locator;

    // Pagination table section
    private readonly paginationCount: Locator;
    private readonly tableHeadings: Locator;
    private readonly tableData: Locator;
    private readonly dynamicButtonField: Locator;

    // Alerts and Popups Section
    private readonly simpleAlert: Locator;
    private readonly confirmationAlert: Locator;
    private readonly promptAlert: Locator;
    private readonly newTab: Locator;
    private readonly popupWindow: Locator;
    private readonly promptMessage: Locator;

    // Mouse Hover Sectin 
    private readonly pointMeButton: Locator;
    private readonly suggestedOptions: Locator;

    // Double click section 
    private readonly doubleClickButton: Locator;
    private readonly field2: Locator;

    // Drag and Drop Section
    private readonly dragSection: Locator;
    private readonly dropSection: Locator;

    // Slider section
    private readonly sliderRange: Locator;
    private readonly sliderPriceRange: Locator;
    private readonly leftSlider: Locator;
    private readonly rightSlider: Locator;

    // SVG Section
    private readonly svgContainer: Locator;
    private readonly svgContainerCircle: Locator
    private readonly svgContainerRect: Locator
    private readonly svgContainerPolygon: Locator

    // Scrolling dropdown section
    private readonly dropdownField: Locator;
    private readonly dropdownSection: Locator;
    private readonly firstdropdownOption: Locator;

    // Mobile link section
    private readonly mobileLabelSection: Locator;
    private readonly mobileLabels: Locator;

    // Laptop Link Section 
    private readonly laptopLinkSection: Locator;
    private readonly laptoplinks: Locator;

    // Broken Links Section
    private readonly brokenLinkSection: Locator;
    private readonly brokenLinks: Locator;

    // Visitors Section
    private readonly visitorSection: Locator;
    private readonly visitorCount: Locator;

    // Form Section 
    private readonly section1Field: Locator;
    private readonly section1SubmitButton: Locator;
    private readonly section2Field: Locator;
    private readonly section2SubmitButton: Locator;
    private readonly section3Field: Locator;
    private readonly section3SubmitButton: Locator;
    private readonly footerSection: Locator;
    private readonly footerSectionLink: Locator;



    constructor(page: Page) {
        super(page);

        // Reading components > composition 
        this.footer = new Footer(page);


        // Homepage section elements
        this.sections = this.page.locator("css=div#PageList2 div.widget-content ul li a");

        // Data Entry Form Locators
        this.dataEntryFormTitle = this.page.getByText("Data Entry Form");
        this.nameField = this.page.getByPlaceholder("Enter Name");
        this.emailField = this.page.getByPlaceholder("Enter Email");
        this.phoneField = this.page.getByPlaceholder("Enter Phone");
        this.addressField = this.page.locator("textarea#textarea");
        this.maleRadioButton = this.page.getByRole('radio', { name: 'male' }).first();
        this.sundayDay = this.page.getByRole('checkbox', { name: 'Sunday' }).first();
        this.countryDropdown = this.page.locator("css=select#country");
        this.countryDropdownOptions = this.page.locator("css=select#country option");
        this.colorsField = this.page.locator("css=select#colors");
        this.colorFieldOptions = this.page.locator("css=select#colors option");
        this.sortedListField = this.page.locator("css=select#animals");
        this.sortedListFieldOptions = this.page.locator("css=select#animals option");
        this.uploadSingleFileSection = this.page.locator("css=input#singleFileInput");
        this.uploadMultipleFileSection = this.page.locator("css=input#multipleFilesInput");

        // Date picker UI 1 element field
        this.datePicker1Field = this.page.locator("css=input#datepicker");

        // Date Picker 2 UI elements
        this.datePicker2Field = this.page.locator("css=input#txtDate");
        this.datePickerUI = this.page.locator("css=div#ui-datepicker-div");
        this.datePickerMonthSelection = this.page.locator("css=select.ui-datepicker-month");
        this.datePickerYearSelection = this.page.locator("css=select.ui-datepicker-year");

        // Date Picker 3 UI elements
        this.datePicker3SubmitButton = this.page.locator("css=button.submit-btn");
        this.datePicker3ValidationMessage = this.page.locator("css=div#result");
        this.datePicker3StartDate = this.page.locator("css=input#start-date");
        this.datePicker3EndDate = this.page.locator("css=input#end-date")
        this.dateRangeMessage = this.page.locator("css=div#result");

        // Subscribe to section
        this.subscribeToPostSection = this.page.getByText("Posts (Atom)", { exact: false });

        // Static Web Table details
        this.staticWebTableHeading = this.page.locator("css=div.widget-content table[name='BookTable'] tbody tr th");
        this.staticWebTableData = this.page.locator("css=div.widget-content table[name='BookTable'] tbody tr td");

        // Dynamic Web Table Handling
        this.dynamicWebTableHeading = this.page.locator("css=table#taskTable thead tr  th");
        this.dynamicWebTableData = this.page.locator("css=table#taskTable tbody tr  td");

        // Working with Pagination Table
        this.paginationCount = this.page.locator("css=.pagination#pagination li");
        this.tableHeadings = this.page.locator("css=#productTable thead tr th");
        this.tableData = this.page.locator("css=#productTable tbody tr td");

        // Search Wikipedia section
        this.searchInputField = this.page.locator("css=#Wikipedia1_wikipedia-search-input");
        this.searchButton = this.page.locator("css=input.wikipedia-search-button").and(page.locator("input[type = 'submit']"));
        this.searchResultSection = this.page.locator("css=.wikipedia-search-results#Wikipedia1_wikipedia-search-results");
        this.searchResults = this.page.locator("css=.wikipedia-search-results#Wikipedia1_wikipedia-search-results div a");

        // Dynamic Button 
        this.dynamicButtonField = this.page.getByRole('button', { name: /st/i });

        // Alerts and Popup section 
        this.simpleAlert = this.page.locator("css=button#alertBtn");
        this.confirmationAlert = this.page.locator("css=button#confirmBtn");
        this.promptAlert = this.page.locator("css=button#promptBtn");
        this.promptMessage = this.page.locator("p#demo");
        this.newTab = this.page.getByText("New Tab");
        this.popupWindow = this.page.getByRole('button', { name: 'Popup Windows' })

        // mouse hover section
        this.pointMeButton = this.page.locator("css=div.dropdown>button.dropbtn");
        this.suggestedOptions = this.page.locator("css=div.dropdown-content a");

        // Double click section
        this.doubleClickButton = this.page.locator("button:text('Copy Text')");
        this.field2 = this.page.locator("css=#field2");

        // Drag and drop section
        this.dragSection = this.page.locator("css=div#draggable");
        this.dropSection = this.page.locator("css=div#droppable");

        // Working with slider section
        this.sliderRange = this.page.locator("css=div#slider-range");
        this.sliderPriceRange = this.page.locator("input#amount");
        this.leftSlider = this.page.locator("css=div#slider-range span").first();
        this.rightSlider = this.page.locator("xpath=//div[@id='slider - range']/span[2]");

        // SVG Container
        this.svgContainer = this.page.locator("css=div.svg-container");
        this.svgContainerCircle = this.page.locator("css=div.svg-container svg circle");
        this.svgContainerRect = this.page.locator("css=div.svg-container svg rect");
        this.svgContainerPolygon = this.page.locator("css=div.svg-container svg polygon");

        // Scrolling dropdown section
        this.dropdownField = this.page.locator("css=input#comboBox");
        this.dropdownSection = this.page.locator("css=div#dropdown");
        this.firstdropdownOption = this.page.locator("css=div#dropdown div").first();

        // Mobile Label Section 
        this.mobileLabelSection = this.page.locator("css=div#mobiles h4");
        this.mobileLabels = this.page.locator("css=div#mobiles label");

        // Laptop label section
        this.laptopLinkSection = this.page.locator("css=div#laptops h4");
        this.laptoplinks = this.page.locator("css=div#laptops a");

        // Broken Link Section 
        this.brokenLinkSection = this.page.locator("css=#broken-links h4");
        this.brokenLinks = this.page.locator("css=#broken-links a");

        // Visitors Section
        this.visitorSection = this.page.getByText('Visitors');
        this.visitorCount = this.page.locator('css=span#Stats1_totalCount');

        // Form Section 
        this.section1Field = this.page.locator('#input1');
        this.section1SubmitButton = this.page.locator('button#btn1');
        this.section2Field = this.page.locator('#input2');
        this.section2SubmitButton = this.page.locator('button#btn2');
        this.section3Field = this.page.locator('#input3');
        this.section3SubmitButton = this.page.locator('button#btn3');
        this.footerSection = this.page.locator('#PageList1');
        this.footerSectionLink = this.page.locator('div#PageList1 div.widget-content  ul li a');

    }


    async navigateToEachSections(): Promise<void> {
        console.info(`--- Test started ---- `);
        console.time('-- Total Execution Time ---');
        let sectionTitle: string;
        let countOfSections: number;
        let urlOfSection: string;
        let homePageURL: string;

        countOfSections = await test.step("Fetching the count of sections firstly: ", async (testInfo) => {
            await testInfo.attach('Each Section', {
                body: await this.page.screenshot({ fullPage: false }),
                contentType: 'image/png'
            });
            return await this.sections.count();
        });

        await test.step("Iterating through the each section and fetching the section title with link for each section: ", async () => {
            for (let i = 0; i < countOfSections; i++) {
                sectionTitle = (await this.sections.nth(i).textContent())!.trim();
                homePageURL = (await this.page.url())!;
                if (sectionTitle !== null) {
                    urlOfSection = (await this.sections.nth(i).getAttribute('href'))!;
                    await test.step(`Navigating to the url: ${urlOfSection}`, async (testInfo) => {
                        await this.page.goto(urlOfSection, { waitUntil: 'load' });
                        await testInfo.attach(`Section: ${sectionTitle} and URL: ${urlOfSection}`, {
                            body: await this.page.screenshot({ fullPage: true }),
                            contentType: 'image/png'
                        });
                    });
                    console.table(`Printing the sections title as:- ${sectionTitle} and URL:- ${urlOfSection}`);
                    await test.step("Again Navigating back to the homePage: ", async () => {
                        await this.page.goto(homePageURL, { waitUntil: 'networkidle' });
                    });
                }
                else {
                    console.error('Unable to fetch the URL of page');
                }
            }
        });
        console.info('--- Test Ended ---');
        console.timeEnd('-- Total Execution Time ---');

    }

    async verifyTitleOfGUISection(): Promise<void> {
        console.info(`--- Test started ---- `);
        console.time('-- Total Execution Time ---');
        await test.step("Fetching the text Content of page title", async () => {
            let sectionTitle = await this.dataEntryFormTitle.textContent();
            if (sectionTitle?.trim() && sectionTitle !== null) {
                if (sectionTitle.includes("Data Entry Form")) {
                    console.log(`Section title is as expected - ${sectionTitle}`);
                }
            }
            else {
                console.log(`Section title is not as per expected - ${sectionTitle}`);
            }
        });
        console.info('--- Test Ended ---');
        console.timeEnd('-- Total Execution Time ---');
    }

    async fillBasicDetails(name: string, email: string, phoneNumber: bigint, address: string): Promise<void> {
        console.info(`--- Test started ---- `);
        console.time('-- Total Execution Time ---');
        await test.step(`Started to fill the basic details into form`, async () => {
            await this.fill(this.nameField, name.trim());
            await this.fill(this.emailField, email.trim());
            await this.fill(this.phoneField, phoneNumber.toString());
            await this.fill(this.addressField, address);
        });
        await test.step(`selcting the other details`, async () => {
            await this.maleRadioButton.click();
            await this.sundayDay.click();
            const countryList = (await this.countryDropdownOptions.allTextContents())
                .map(option => option.trim());
            console.log(`All dropdown options are the - ${countryList}`);
            if (countryList.includes("India")) {
                await this.countryDropdown.selectOption({ value: 'india' });
                console.log("India country is selected from the dropdown");
            }
            else {
                console.log(`India country is not there into the dropdown options`)
            }
        });

        await test.step("selecting the color list from the dropdown", async () => {
            const colorsList = (await this.colorFieldOptions.allTextContents()).map(color => color.trim());
            console.log(`All colour options are the - ${colorsList}`);
            if (colorsList.includes("Red")) {
                await this.colorsField.selectOption(['Red', 'Blue', 'Yellow']);
            }
            else {
                console.log("Colors are not present");
            }
        });

        await test.step("Comparing the two lists", async () => {
            const originalList: string[] = (await this.sortedListField.allTextContents()).map(option => option.trim());
            const newSortedList: string[] = originalList.sort();
            await expect(originalList).toEqual(newSortedList);
            console.log("Now Original list and sorted list both are equals");
        });
        console.info('--- Test Ended ---');
        console.timeEnd('-- Total Execution Time ---');
    }

    async handlingDatePicker1(date: Date): Promise<void> {
        console.info(`--- Test started ---- `);
        console.time('-- Total Execution Time ---');
        await test.step("Filling the date directly with input tag for date picker 1", async () => {
            await this.fill(this.datePicker1Field, date.toString());
            console.log(`selected date from the datepicker 1 is ${date}`);
        });
        console.info('--- Test Ended ---');
        console.timeEnd('-- Total Execution Time ---');
    }

    async handlingDatePicker2(month: string, year: string, date: number): Promise<void> {
        console.info(`--- Test started ---- `);
        console.time('-- Total Execution Time ---');
        await test.step("Clicking on date picker 2 and waiting for UI", async () => {
            await this.datePicker2Field.click();
            await this.datePickerUI.waitFor({ state: 'visible', timeout: 6000 });
        });
        await test.step("Selecting the month, year and date from the calender UI", async () => {
            await this.datePickerMonthSelection.selectOption({ label: month });
            await this.datePickerYearSelection.selectOption({ value: year });
            await this.page.locator(`.ui-datepicker-calendar tbody td a:text-is("${date}")`).click();
            console.log("Date has been selected");
        });
        console.info('--- Test Ended ---');
        console.timeEnd('-- Total Execution Time ---');
    }

    async checkingValidationMessageForDateField3(): Promise<void> {
        console.info(`--- Test started ---- `);
        console.time('-- Total Execution Time ---');
        await test.step("Clicking on submit button of date picker 3", async () => {
            await this.datePicker3SubmitButton.click();
        });
        await test.step("Validating the date picker 3 validation message", async () => {
            await expect(this.datePicker3ValidationMessage).toBeVisible();
            console.log("Date Picker Validation Message 3 is visilbe completely");
        });
        console.info('--- Test Ended ---');
        console.timeEnd('-- Total Execution Time ---');
    }

    async checkRangeBetweenDates(startDate: string, endDate: string): Promise<void> {
        console.info(`--- Test started ---- `);
        console.time('-- Total Execution Time ---');
        await test.step("Filling the start and end date into fields", async () => {
            await this.datePicker3StartDate.fill(startDate.toString());
            await this.datePicker3EndDate.fill(endDate.toString());
        });
        await test.step("Clicking on submit button and checking message is visible", async () => {

            await this.datePicker3SubmitButton.click();
            await expect(this.dateRangeMessage).toBeVisible();
        });
        await test.step("Verifying the date range message and printing it into console", async () => {
            let message: string | null = await this.dateRangeMessage.textContent();
            if (message != null && message.trim() != "") {
                console.log(`${message}`);
            }
            else {
                console.log(`unable to fetch the date range`);
            }
        });
        console.info('--- Test Ended ---');
        console.timeEnd('-- Total Execution Time ---');
    }

    async uploadSingleFile(fileToUpload: string): Promise<void> {
        console.info(`--- Test started ---- `);
        console.time('-- Total Execution Time ---');
        await test.step("Uploading the single file", async () => {
            await this.uploadSingleFileSection.setInputFiles(fileToUpload);
        });
        console.info('--- Test Ended ---');
        console.timeEnd('-- Total Execution Time ---');
    }

    async uploadMultipleFile(fileToUpload: string): Promise<void> {
        console.info(`--- Test started ---- `);
        console.time('-- Total Execution Time ---');
        await test.step("Uploading the multiple same files", async () => {
            await this.uploadMultipleFileSection.setInputFiles([fileToUpload, fileToUpload, fileToUpload]);
        });
        console.info('--- Test Ended ---');
        console.timeEnd('-- Total Execution Time ---');
    }

    async handlingSubscribeToSection(): Promise<void> {
        console.info(`--- Test started ---- `);
        console.time('-- Total Execution Time ---');
        await test.step("Creating a new Page object and validating it with url", async () => {
            let parentPage = this.page;
            const [newPage] = await Promise.all([
                this.page.context().waitForEvent('page'),
                this.subscribeToPostSection.click(),
            ]);
            await newPage.waitForLoadState('networkidle');
            await expect(newPage).toHaveURL("https://testautomationpractice.blogspot.com/feeds/posts/default", { timeout: 6000 });
            await parentPage.bringToFront();
            console.log("Parent page is bringed to to front again");
        });
        console.info('--- Test Ended ---');
        console.timeEnd('-- Total Execution Time ---');
    }

    async workingWithStaticWebTable(): Promise<void> {
        console.info(`--- Test started ---- `);
        console.time('-- Total Execution Time ---');
        await test.step("Fetching the details of static table", async () => {
            let tableHeadingCount = await this.staticWebTableHeading.count();
            let tableDataCount = await this.staticWebTableData.count();
            for (let i = 0; i < tableDataCount; i++) {
                let tableHeading = await this.staticWebTableHeading.nth(i % tableHeadingCount).textContent();
                let tableData = await this.staticWebTableData.nth(i).textContent();
                console.log(`${tableHeading?.trim()} : ${tableData?.trim()}`);
                if ((i + 1) % tableHeadingCount === 0) {
                    console.log("====================");
                }
            }
        });
        console.info('--- Test Ended ---');
        console.timeEnd('-- Total Execution Time ---');
    }

    async workingWithDynamicWebTable(): Promise<void> {
        console.info(`--- Test started ---- `);
        console.time('-- Total Execution Time ---');
        await test.step("fetching the details of table", async () => {
            let tableHeadingCount = await this.dynamicWebTableHeading.count();
            let tableDataCount = await this.dynamicWebTableData.count();
            for (let i = 0; i < tableDataCount; i++) {
                let tableHeading = await this.dynamicWebTableData.nth(i % tableHeadingCount).textContent();
                let tableData = await this.dynamicWebTableData.nth(i).textContent();
                console.log(`${tableHeading?.trim()} : ${tableData?.trim()}`);
                if ((i + 1) % tableHeadingCount === 0) {
                    console.log("====================");
                }
            }
        });
        console.info('--- Test Ended ---');
        console.timeEnd('-- Total Execution Time ---');
    }

    async workingWithPaginationWebTable(): Promise<void> {
        console.info(`--- Test started ---- `);
        console.time('-- Total Execution Time ---');
        let countOfLoops: number;
        test.step("Fetching the count of pagination and iterating through it", async () => {
            countOfLoops = await this.paginationCount.count();
            console.log(`Need to loop for ${countOfLoops} times for fetching the data`);
            const tbHeading: string[] = await this.tableHeadings.allTextContents();
            // tbHeading.forEach(heading => console.log(`All table headings are the ${heading}`));
            console.log(`${tbHeading.join(" | ")}`);
            for (let i = 0; i < countOfLoops; i++) {
                await this.paginationCount.nth(i).click();
                console.log(`Starting with Page ${i + 1} to retrieve the data`);
                const tbData: string[] = await this.tableData.allTextContents();
                // tbData.forEach(data => console.log(`Table data ${data}`));
                for (let j = 0; j < tbData.length; j += 4) {
                    console.log(`${tbData[j]} | ${tbData[j + 1]} | ${tbData[j + 2]} | ${tbData[j + 3]}`);
                }
                console.log(`===== ====== ===== ====`)
            }
        });
        console.info('--- Test Ended ---');
        console.timeEnd('-- Total Execution Time ---');
    }

    async workingWithSearchField(input: string): Promise<void> {
        console.info(`--- Test started ---- `);
        console.time('-- Total Execution Time ---');
        test.step(`Input to be entered into the field is ${input}`, async () => {
            console.log(`Input parameter is ${input}`);
        });
        test.step("Entering the search text into the search input field", async () => {
            await this.searchInputField.pressSequentially(input, { delay: 800 });
            await this.searchButton.click();
        });
        test.step("Verifying with the search results appears", async () => {
            await expect(this.searchResultSection).toBeVisible({ timeout: 6000 });
            await expect(this.searchResults.first()).toBeVisible();
        });
        test.step("Fetching the search result count and iterating through it", async () => {
            let countOfSearchResults = await this.searchResults.count();
            console.log(`Count of Search Result are ${countOfSearchResults}`);
            const searchResultsArray: string[] = await this.searchResults.allTextContents();
            searchResultsArray.forEach(result => {
                console.log(`Printing the all results ${result}`);
            });
        });
        console.info('--- Test Ended ---');
        console.timeEnd('-- Total Execution Time ---');
    }

    async workingWithDynamicButtonField(): Promise<void> {
        console.info(`--- Test started ---- `);
        console.time('-- Total Execution Time ---');
        test.step("Firstly verifying the initial state of the button again changing the state of button", async () => {
            let buttonState = await this.dynamicButtonField.textContent();
            console.log(`First Initiatl condition of the button is ${buttonState}`);
            if (buttonState == 'START') {
                await this.dynamicButtonField.click();
            }
            else {
                console.log(`Button state is not as expected to initial of stage currently its into the ${buttonState}`);
            }
            buttonState = await this.dynamicButtonField.textContent();
            console.log(`Second condition of the button is ${buttonState}`);
            await this.dynamicButtonField.click();
            buttonState = await this.dynamicButtonField.textContent();
            if (buttonState == 'START') {
                console.log(`Again set up the button as its original state`);
            }
            else {
                console.log(`Button is not yet into its initiatl setup stage`);
            }
        });
        console.info('--- Test Ended ---');
        console.timeEnd('-- Total Execution Time ---');
    }

    async workingWithAlerts(): Promise<void> {
        console.info(`--- Test started ---- `);
        console.time('-- Total Execution Time ---');
        // Handling simple dialog
        this.page.on('dialog', async (dialog) => {
            if (dialog.type() === 'alert') {
                console.log("This is an Alert");
                await dialog.accept();
            }
        });
        await this.simpleAlert.click();
        console.log(`simple alert is displayed and its accepted`);

        // Handling confirmation dialog
        this.page.once('dialog', async (dialog) => {
            if (dialog.type() === 'alert') {
                console.log(`this is the alert with messgage of :- ${dialog.message()}`);
            }
            await dialog.accept();
        });
        await this.confirmationAlert.click();
        console.log(`confirmation dialog is accepted`);


        // Handling prompt dialog
        this.page.once('dialog', async (dialog) => {
            if (dialog.type() === 'prompt') {
                console.log("This is an Prompt");
                console.log(`Prompt message is:-  ${dialog.message()}`);
                await dialog.accept("Roshan Ghadge");
            }
        });
        await this.promptAlert.click();
        await expect(this.promptMessage).toBeVisible();
        console.log(`Fetched text from the prompt alert is ${await this.promptMessage.textContent()}`);

        // Handling new tab
        const context = this.page.context();
        const newPagePromise = context.waitForEvent('page');
        await this.newTab.click();
        const newPage = await newPagePromise;
        await newPage.waitForLoadState();
        await expect(newPage).toHaveTitle("SDET-QA Blog");
        console.log("Title is fetched and validated correctly");
        await this.page.bringToFront();
        console.log("The main page is bringed to the front");

        // Handling popup window
        const newPopupWindowPromise = this.page.waitForEvent('popup');
        await this.popupWindow.click();
        const newPopup = await newPopupWindowPromise;
        await newPopup.waitForLoadState('networkidle');
        // await expect(newPopup).toHaveTitle("Selenium logo green");
        // console.log("Title is fetched from the popup and its validated correctly");
        await this.page.bringToFront();
        console.log("The main page is bringed to the front");
        console.info('--- Test Ended ---');
        console.timeEnd('-- Total Execution Time ---');
    }

    async workingWithMouseSection(): Promise<void> {
        console.info(`--- Test started ---- `);
        console.time('-- Total Execution Time ---');

        let suggestedOptionText: string[];

        await test.step("Firstly verifying the element is visible before hovering the mosue:", async (testInfo) => {
            await expect(this.pointMeButton).toBeVisible();
            await testInfo.attach('BEFORE HOVERING SCREENSHOT', {
                body: await this.page.screenshot({ fullPage: true }),
                contentType: 'image/png'
            });
        });

        await test.step("Hovering mouse over the element: ", async () => {
            await this.pointMeButton.hover();
        });

        await test.step("Asserting the count of options:", async () => {
            await expect(this.suggestedOptions).toHaveCount(2);
            console.log(`Count of options visibles are exact 2`);
        })

        await test.step('Fetching all the suggested options and iterating through it: ', async (testInfo) => {
            suggestedOptionText = await this.suggestedOptions.allTextContents();
            await testInfo.attach("AFTER HOVERING SCREENSHOT", {
                body: await this.page.screenshot({ fullPage: true }),
                contentType: 'image/png'
            });
            for (const suggestedOption of suggestedOptionText) {
                console.log(`Suggested Option is :- ${suggestedOption}`)
            };
        });
        console.info('--- Test Ended ---');
        console.timeEnd('-- Total Execution Time ---');
    }

    async workingWithDoubleClick(): Promise<void> {
        console.info(`--- Test started ---- `);
        console.time('-- Total Execution Time ---');

        let field2InputText: string;

        await test.step("Fetching the input value from the field2", async () => {
            field2InputText = await this.field2.inputValue();
            console.log(`Current value of the field2 input after double click ${field2InputText}`);
        });

        test.step("Now performing the double click on element:", async () => {
            console.log('Now performing the double click');
            await this.doubleClickButton.dblclick();
        });

        await test.step("Fetching the input value from the field2 again after double click:", async () => {
            field2InputText = await this.field2.inputValue();
            console.log(`Current value of the field2 input after double click ${field2InputText}`);
        });
        console.info('--- Test Ended ---');
        console.timeEnd('-- Total Execution Time ---');
    }

    async dragAndDrop(): Promise<void> {
        console.info(`--- Test started ---- `);
        console.time('-- Total Execution Time ---');
        await test.step("Performing drag-drop with playwright defautl method:", async () => {
            await this.dragSection.dragTo(this.dropSection);
            console.log("Item has been dragged and dropped successfully");
        });
        console.info('--- Test Ended ---');
        console.timeEnd('-- Total Execution Time ---');
    }

    async sliderBoard(): Promise<void> {
        console.info(`--- Test started ---- `);
        console.time('-- Total Execution Time ---');

        let initialPriceRange: string;
        let updatedValues: number[];

        await test.step("Fetching the initial of price range:", async () => {
            initialPriceRange = await this.sliderPriceRange.inputValue();
            console.log("Initial price range:", initialPriceRange);
        })

        await test.step("Moving the slider by using page.evaluate():", async () => {
            await this.page.evaluate(() => {
                const jq = (window as any).$;
                jq('#slider-range').slider('values', [150, 350]);
            });
        });

        await test.step("Fetching the updated values with page.evaluate():", async () => {
            updatedValues = await this.page.evaluate<number[]>(() => {
                const jq = (window as any).$;
                return jq('#slider-range').slider('values');
            });
            console.log("Updated values:", updatedValues);
        });
        console.info('--- Test Ended ---');
        console.timeEnd('-- Total Execution Time ---');
    }

    async svgSection(): Promise<void> {
        console.info(`--- Test started ---- `);
        console.time('-- Total Execution Time ---');

        let fillValueCircle: string | null;
        let fillValuePolygon: string | null;
        let fillValueRect: string | null;

        await test.step("Verifying that svg section is visible:", async () => {
            console.log("Working with svg section");
            await expect(this.svgContainerCircle).toBeVisible();
            const svgSectionScreenshot = await this.page.screenshot({ fullPage: true });
            await allure.attachment("SVG SECTION:", svgSectionScreenshot, ContentType.PNG);
        });

        await test.step("Fetching the svg circle fill attribute and printing it:", async () => {
            console.log("SVG Circle is visible");
            fillValueCircle = await this.svgContainerCircle.getAttribute('fill');
            console.log(`Fill Value of the SVG Circle is ${fillValueCircle}`);
        })

        await test.step("Fetching the svg polygon fill attribute and printing it:", async () => {
            await expect(this.svgContainerPolygon).toBeVisible();
            console.log("SVG Polygon is visible");
            fillValuePolygon = await this.svgContainerPolygon.getAttribute('fill');
            console.log(`Fill Value of the SVG Circle is ${fillValuePolygon}`);
        });

        await test.step("Fetching the svg Rect fill attribute and printing it:", async () => {
            await expect(this.svgContainerRect).toBeVisible();
            console.log("SVG Rect is visible");
            fillValueRect = await this.svgContainerRect.getAttribute('fill');
            console.log(`Fill Value of the SVG Circle is ${fillValueRect}`);
        });
        console.info('--- Test Ended ---');
        console.timeEnd('-- Total Execution Time ---');
    }

    async handlignFooterSection(): Promise<void> {
        console.info(`--- Test started ---- `);
        console.time('-- Total Execution Time ---');
        let footerText: string;
        footerText = await this.footer.footerSectionControl();
        await test.step("Fetching the footer text from the footerSectionContorl:", async () => {
            if (footerText !== undefined && footerText !== null) {
                console.log(`Footer text ${footerText}`);
            }
            else {
                console.log(`Unable to fetch the the details correctly`);
            }
        });
        console.info('--- Test Ended ---');
        console.timeEnd('-- Total Execution Time ---');
    }

    async scrollingDropdownSection(): Promise<void> {
        console.info(`--- Test started ---- `);
        console.time('-- Total Execution Time ---');
        let inputValues: string;

        await test.step("Clicking on the dropdown:", async () => {
            await this.click(this.dropdownField);
        });
        await test.step("verifying that dropdown option section is visible:", async () => {
            await expect(this.dropdownSection).toBeVisible();
            await expect(this.firstdropdownOption).toBeVisible();
        });
        await test.step("Selecting the first option shown from the dropdown", async () => {
            await this.firstdropdownOption.click();
        });
        await test.step("fetching the first selected input value from the dropdown", async () => {
            inputValues = await this.dropdownField.inputValue();
            console.log(`Input Value in the field is :- ${inputValues}`);
        });
        console.info('--- Test Ended ---');
        console.timeEnd('-- Total Execution Time ---');
    }

    async mobileLabelsFunction(): Promise<void> {
        console.info(`--- Test started ---- `);
        console.time('-- Total Execution Time ---');
        let sectionTitle: string;
        let fetchedMobileLabels: string[];

        sectionTitle = (await this.mobileLabelSection.innerText())!.trim();
        await test.step("fetched the section title and printing it: ", async () => {
            if (sectionTitle) {
                console.log(`SECTION :-  ${sectionTitle ?? "No Section title was found"}`)
            }
        });
        fetchedMobileLabels = await this.mobileLabels.allTextContents();
        await test.step("Fetched the all of mobile labels :", async () => {
            fetchedMobileLabels.forEach(label => {
                console.log(`Fetched mobile Labels :- ${label}`);
            });
            console.table(fetchedMobileLabels);
        });
        console.info('--- Test Ended ---');
        console.timeEnd('-- Total Execution Time ---');
    }

    async laptopLinkFunction(): Promise<void> {
        console.info(`--- Test started ---- `);
        console.time('-- Total Execution Time ---');
        let sectionTitle: string;
        let numberOfLaptopLabels: number;
        let fetchedLaptopLink: string | null;

        sectionTitle = (await this.laptopLinkSection.innerText())!.trim();
        await test.step("Fetched section title and printing it: ", async () => {
            if (sectionTitle) {
                console.log(`SECTION :- ${sectionTitle}`);
            }
        });
        numberOfLaptopLabels = await this.laptoplinks.count();
        await test.step("Fetched the number of laptop labels: ", async () => {
            console.log(`Number of laptop labels are ${numberOfLaptopLabels}`);
        })
        await test.step("Iterating through the all labels and fetching the response of it:", async () => {
            for (let i = 0; i < numberOfLaptopLabels; i++) {
                fetchedLaptopLink = await this.laptoplinks.nth(i).getAttribute("href");
                if (fetchedLaptopLink) {
                    const response: APIResponse = await this.page.request.get(fetchedLaptopLink);
                    console.log(`Response of ${fetchedLaptopLink} is ${response.status()}`);
                }
                else {
                    console.log('unable to fetch the URL and its response')
                }
            }
        });
        console.info('--- Test Ended ---');
        console.timeEnd('-- Total Execution Time ---');
    }

    async brokenlinksSection(): Promise<void> {
        console.info(`--- Test started ---- `);
        console.time('-- Total Execution Time ---');
        let sectiontitle: string | null;
        let countofLinks: number;

        await test.step("Fetching the section title :", async () => {
            sectiontitle = await this.brokenLinkSection.textContent();
            if (sectiontitle) {
                console.log(`Broken link section ${sectiontitle}`);
            }
        });

        await test.step("Fetching the count of broken links and verifying status:", async () => {
            countofLinks = await this.brokenLinks.count();
            for (let i = 0; i < countofLinks; i++) {
                let link: string | null = await this.brokenLinks.nth(i).getAttribute('href');
                let text: string = (await this.brokenLinks.nth(i).textContent())!.trim();
                const expectedStatus: number = Number(text.match(/\d+/)?.[0]);
                if (link) {
                    const response = await this.page.request.get(link);
                    const actualStatus = await response.status();
                    await expect(actualStatus).toBe(expectedStatus);
                    console.log(`${expectedStatus} :- URL :- ${link} :- Status ${response.status()} Result :- ${actualStatus === expectedStatus ? "PASS ✅" : "FAIL ❌"} `);
                }
                else {
                    console.log(`No links found`);
                }
            }
        });
        console.info('--- Test Ended ---');
        console.timeEnd('-- Total Execution Time ---');
    }

    async workingWithVisitorsSection(): Promise<void> {
        console.info(`--- Test started ---- `);
        console.time('-- Total Execution Time ---');

        let visitorsCount: number;
        let updatedVisitorCount: number;

        await test.step("First Fetching the title of section and printing it ", async () => {
            let sectionTitle: string = (await this.visitorSection.textContent())!.trim();
            console.log(`Visitors Section Title :- ${sectionTitle}`);
        });
        await test.step("Fetching the count of visitors section : ", async () => {
            visitorsCount = Number(await this.visitorCount.textContent());
            const beforeScreenshot = await this.page.screenshot({ fullPage: true });
            await allure.attachment('Before Refresh', beforeScreenshot, ContentType.PNG);
        });
        await test.step("Reloading the page again: ", async () => {
            await this.page.reload();
            await this.page.waitForLoadState('networkidle');
        });
        await test.step("Fetching the updated visitors Count: ", async () => {
            updatedVisitorCount = Number(await this.visitorCount.textContent());
            const afterScreenshot = await this.page.screenshot({ fullPage: true });
            await allure.attachment('After Refresh', afterScreenshot, ContentType.PNG);
        });
        await test.step("Comparing the before and after page refresh count and printing it:", async () => {
            if (visitorsCount === updatedVisitorCount) {
                console.log(`Before and  After refreshing visitors count remains same :- ${visitorsCount}`);
            }
            else {
                console.log(`Before and After refreshing visitors count does not match. Before:- ${visitorsCount} & After:- ${updatedVisitorCount}`);
            }
        });
        console.info('--- Test Ended ---');
        console.timeEnd('-- Total Execution Time ---');
    }


    async workingWithFormSection(): Promise<void> {
        console.info(`--- Test started ---- `);
        console.time('-- Total Execution Time ---');

        let footerSectionTitle: string;
        let countOfLinks: number;

        await test.step("Working with the section 1", async () => {
            await expect(this.section1Field).toBeVisible();
            await this.section1Field.fill("Roshan Ghadge");
            await expect(this.section1SubmitButton).toBeEnabled();
            await this.section1SubmitButton.click();
        });

        await test.step("Working with the section 2", async () => {
            await expect(this.section2Field).toBeVisible();
            await this.section2Field.fill("Roshan Sanjay Ghadge");
            await expect(this.section2SubmitButton).toBeEnabled();
            await this.section2SubmitButton.click();
        });

        await test.step("Working with the section 3", async () => {
            await expect(this.section3Field).toBeVisible();
            await this.section3Field.fill("Ghadge");
            await expect(this.section3SubmitButton).toBeEnabled();
            await this.section3SubmitButton.click();
        });

        footerSectionTitle = (await this.footerSection.textContent())!.trim();
        console.log('Footer Section Title :', footerSectionTitle);
        countOfLinks = await this.footerSectionLink.count();

        for (let i = 0; i < countOfLinks; i++) {
            let label = await this.footerSectionLink.nth(i).textContent();
            let URL = (await this.footerSectionLink.nth(i).getAttribute('href'))!;
            console.log(`Footer Section ${label} and ${URL}`);
            let response = await this.page.request.get(URL);
            let status = await response.status();
            console.log(` Status of link ${status}`)
        }


        console.info('--- Test Ended ---');
        console.timeEnd('-- Total Execution Time ---');
    }


}






