import { test, Page, expect, Locator } from '@playwright/test'
import { BasePage } from '../pages';


export class HandleFileDownload extends BasePage {
    constructor(page: Page) {
        super(page)
    }


    async HandleDownloadFile(downloadFileIcon: Locator) {
        // handling download file scenario
        const [downloadFile] = await Promise.all
            ([
                this.page.waitForEvent('download'),
                downloadFileIcon.click()
            ])
        console.log(downloadFile.suggestedFilename());
        let path = downloadFile.path(); // Provides the temp file path
        console.log(downloadFile.saveAs('/test-date/downloadedPdf.pdf')); // Saves the file to mentioned location
    }
}