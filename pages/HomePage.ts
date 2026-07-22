import { Page, test, expect, Locator } from '@playwright/test'
import { BasePage } from '../pages';

export class HomePage extends BasePage {

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



    constructor(page: Page) {
        super(page);
        // Data Entry Form Locators
        this.dataEntryFormTitle = this.page.getByText("Data Entry Form");
        this.nameField = this.page.getByPlaceholder("Enter Name");
        this.emailField = this.page.getByPlaceholder("Enter Email");
        this.phoneField = this.page.getByPlaceholder("Enter Phone");
        this.addressField = this.page.locator("textarea#textarea");
        this.maleRadioButton = this.page.getByRole('radio', { name: 'male' }).first();
        this.sundayDay = this.page.getByRole('checkbox', { name: 'Sunday' }).first();
        this.countryDropdown = this.page.locator("select#country");
        this.countryDropdownOptions = this.page.locator("select#country option");
        this.colorsField = this.page.locator("select#colors");
        this.colorFieldOptions = this.page.locator("select#colors option");
        this.sortedListField = this.page.locator("select#animals");
        this.sortedListFieldOptions = this.page.locator("select#animals option");
        this.uploadSingleFileSection = this.page.locator("input#singleFileInput");
        this.uploadMultipleFileSection = this.page.locator("input#multipleFilesInput");

        // Date picker UI 1 element field
        this.datePicker1Field = this.page.locator("input#datepicker");

        // Date Picker 2 UI elements
        this.datePicker2Field = this.page.locator("input#txtDate");
        this.datePickerUI = this.page.locator("div#ui-datepicker-div");
        this.datePickerMonthSelection = this.page.locator("select.ui-datepicker-month");
        this.datePickerYearSelection = this.page.locator("select.ui-datepicker-year");

        // Date Picker 3 UI elements
        this.datePicker3SubmitButton = this.page.locator("button.submit-btn");
        this.datePicker3ValidationMessage = this.page.locator("div#result");
        this.datePicker3StartDate = this.page.locator("input#start-date");
        this.datePicker3EndDate = this.page.locator("input#end-date")
        this.dateRangeMessage = this.page.locator("div#result");

        // Subscribe to section
        this.subscribeToPostSection = this.page.getByText("Posts (Atom)", { exact: false });

        // Static Web Table details
        this.staticWebTableHeading = this.page.locator("div.widget-content table[name='BookTable'] tbody tr th");
        this.staticWebTableData = this.page.locator("div.widget-content table[name='BookTable'] tbody tr td");

        // Dynamic Web Table Handling
        this.dynamicWebTableHeading = this.page.locator("table#taskTable thead tr  th");
        this.dynamicWebTableData = this.page.locator("table#taskTable tbody tr  td");

        // Working with Pagination Table
        this.paginationCount = this.page.locator(".pagination#pagination li");
        this.tableHeadings = this.page.locator("#productTable thead tr th");
        this.tableData = this.page.locator("#productTable tbody tr td");

        // Search Wikipedia section
        this.searchInputField = this.page.locator("#Wikipedia1_wikipedia-search-input");
        this.searchButton = this.page.locator("input.wikipedia-search-button").and(page.locator("input[type = 'submit']"));
        this.searchResultSection = this.page.locator(".wikipedia-search-results#Wikipedia1_wikipedia-search-results");
        this.searchResults = this.page.locator(".wikipedia-search-results#Wikipedia1_wikipedia-search-results div a");

        // Dynamic Button 
        this.dynamicButtonField = this.page.getByRole('button', { name: /st/i });

        // Alerts and Popup section 
        this.simpleAlert = this.page.locator("button#alertBtn");
        this.confirmationAlert = this.page.locator("button#confirmBtn");
        this.promptAlert = this.page.locator("button#promptBtn");
        this.promptMessage = this.page.locator("p#demo");
        this.newTab = this.page.getByText("New Tab");
        this.popupWindow = this.page.getByRole('button', { name: 'Popup Windows' })

    }


    async verifyTitleOfGUISection(): Promise<void> {
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
    }

    async fillBasicDetails(name: string, email: string, phoneNumber: bigint, address: string): Promise<void {
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
    }

    async handlingDatePicker1(date: Date): Promise<void> {
        await test.step("Filling the date directly with input tag for date picker 1", async () => {
            await this.fill(this.datePicker1Field, date.toString());
            console.log(`selected date from the datepicker 1 is ${date}`);
        });
    }

    async handlingDatePicker2(month: string, year: string, date: number): Promise<void> {
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
    }

    async checkingValidationMessageForDateField3(): Promise<void> {
        await test.step("Clicking on submit button of date picker 3", async () => {
            await this.datePicker3SubmitButton.click();
        });
        await test.step("Validating the date picker 3 validation message", async () => {
            await expect(this.datePicker3ValidationMessage).toBeVisible();
            console.log("Date Picker Validation Message 3 is visilbe completely");
        });
    }

    async checkRangeBetweenDates(startDate: string, endDate: string): Promise<void> {
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
    }

    async uploadSingleFile(fileToUpload: string): Promise<void> {
        await test.step("Uploading the single file", async () => {
            await this.uploadSingleFileSection.setInputFiles(fileToUpload);
        });
    }

    async uploadMultipleFile(fileToUpload: string): Promise<void> {
        await test.step("Uploading the multiple same files", async () => {
            await this.uploadMultipleFileSection.setInputFiles([fileToUpload, fileToUpload, fileToUpload]);
        });
    }

    async handlingSubscribeToSection(): Promise<void> {
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
        })
    }

    async workingWithStaticWebTable(): Promise<void> {
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
    }

    async workingWithDynamicWebTable(): Promise<void> {
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
    }

    async workingWithPaginationWebTable(): Promise<void> {
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


    }

    async workingWithSearchField(input: string): Promise<void> {
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
    }

    async workingWithDynamicButtonField(): Promise<void> {
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
    }

    async workingWithAlerts(): Promise<void> {
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
    }





}



