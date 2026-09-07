import { test } from '../../fixtures/page.fixture'



test.describe("Practicing all individual of modules in playwright", async () => {


    test("Practicing the common actions", async ({ practiceAllModules }) => {
        await practiceAllModules.PerformCommonActions();
    });

    test("Practicing the confirmation dialog", async ({ practiceAllModules }) => {
        await practiceAllModules.handlingDialogAlerts();
    });

    test("Practicing the prompt dialog", async ({ practiceAllModules }) => {
        await practiceAllModules.handlingPromptDialog();
    });

    test("Practicing the new tab  section", async ({ practiceAllModules }) => {
        await practiceAllModules.handlingNewTabSection();
    });

    test("Practicing the download section", async ({ practiceAllModules }) => {
        await practiceAllModules.handlingDownloadSection();
    });
});