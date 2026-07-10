import { Page, test, expect, Locator } from '@playwright/test'
import { BasePage } from './BasePage';

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
    private readonly uploadSingleFileSection: Locator;
    private readonly uploadMultipleFileSection: Locator;


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

    }


    async navigateToURL() {
        await this.goto("https://testautomationpractice.blogspot.com/");
    }

    async verifyTitleOfGUISection() {
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


    async fillBasicDetails(name: string, email: string, phoneNumber: bigint, address: string) {
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

    async uploadSingleFile(fileToUpload: string) {
        await this.uploadSingleFileSection.setInputFiles(fileToUpload);
    }

    async uploadMultipleFile(fileToUpload: string) {
        await this.uploadMultipleFileSection.setInputFiles([fileToUpload, fileToUpload, fileToUpload]);
    }
}