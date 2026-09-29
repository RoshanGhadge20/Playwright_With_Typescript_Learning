import { test, expect, Locator, Page } from '@playwright/test'
import { BasePage } from '../pages';

export class HandlingAlertDialogs extends BasePage {
    // private readonly page: Page;

    constructor(page: Page) {
        super(page);
        // this.page = page;
    }



    async HandleConfirmationDialog(btnLocator: Locator) {
        // Handles the confirmation dialogs
        this.page.once('dialog', async (dialog) => {
            console.log(await dialog.type() === 'confirm');
            console.log(await dialog.message());
            console.log(await dialog.accept());
        });
        await btnLocator.click();
    }


    async HandlePromptDialog(btnLocator: Locator) {
        // Hangles the prompt dialogs
        this.page.once('dialog', async (dialog) => {
            console.log(await dialog.type() === 'prompt');
            await dialog.accept("Roshan Ghadge");
        });
        await btnLocator.click();
    }

    async HandleDialog(btnLocator: Locator) {
        // Handles the normal dialog
        this.page.once('dialog', async (dialog) => {
            await dialog.type() === 'message'
            await dialog.accept();
        })
        await btnLocator.click();
    }

}