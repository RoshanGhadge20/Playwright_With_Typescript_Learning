import { test, expect, Page, Locator } from '@playwright/test'
import { BasePage } from '../pages';

export class HandleFileUpload extends BasePage {
    constructor(page: Page) {
        super(page);
    }


    async HandleFileUpload(fileUpload: Locator, fileToUpload: string) {
        await fileUpload.setInputFiles(fileToUpload);
    }

    async HandleMutipleFileUpload(fileUpload1: Locator, file1Upload: string, file2Upload: string) {
        await fileUpload1.setInputFiles([file1Upload, file2Upload]);
    }

    async FileUploadFromBufferMemory(fileUpload2: Locator) {
        await fileUpload2.setInputFiles(
            {
                name: 'avatar.png',
                mimeType: 'image/png',
                buffer: Buffer.from('fake-image-content'),
            }
        );

    }

}