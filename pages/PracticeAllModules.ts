import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class PracticeAllModules extends BasePage {
    // private readonly page: Page;

    private readonly nameField;
    private readonly countryDropdown;

    private readonly confirmationAlert;
    private readonly promptDialog;

    private readonly newTab;

    private readonly downlaodSection;



    constructor(page: Page) {
        super(page);
        // this.page = page;
        this.nameField = this.page.getByPlaceholder('Enter Name');
        this.countryDropdown = this.page.locator('select#country');
        this.confirmationAlert = this.page.getByText('Confirmation Alert');
        this.promptDialog = this.page.getByText('Prompt Alert');
        this.newTab = this.page.getByText('New Tab');
        this.downlaodSection = this.page.getByText('Downlaod Button');
    }


    async PerformCommonActions() {
        await this.nameField.fill('Roshan Ghadge');
        await this.countryDropdown.selectOption({ label: 'India' });
    }

    async handlingDialogAlerts() {
        this.page.once('dialog', async (dialog) => {
            console.log(await dialog.type() === 'confirm');
            console.log(await dialog.accept());
        }
        );
        await this.confirmationAlert.click();
    }

    async handlingPromptDialog() {
        this.page.on('dialog', async (dialog) => {
            console.log(await dialog.type());
            if (dialog.type() === 'prompt') {
                await dialog.accept("My name is roshan Ghadge");
            }
        });
        await this.promptDialog.click();
    }

    async handlingNewTabSection() {
        const [newTab] = await Promise.all(
            [
                console.log('Hello'),
                await this.page.context().waitForEvent('page'),
                this.newTab.click()
            ]
        );
        // await newTab.waitForLoadState();
        console.log('Handled the new tab');
        // await newTab.close();
        await this.page.bringToFront();
    }

    async handlingDownloadSection() {
        const [downloadFile] = await Promise.all([
            await this.page.waitForEvent('download'),
            await this.downlaodSection.click(),
        ]);

        // await this.downlaodSection.waitFor();
        console.log(downloadFile.suggestedFilename());
        const path = await downloadFile.path();
        await downloadFile.saveAs('test/DownloadedFileSave.pdf')
    }


}