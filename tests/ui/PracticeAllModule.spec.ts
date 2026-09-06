import { test } from '../../fixtures/page.fixture'



test.describe("Practicing all individual of modules in playwright", async () => {


    test("Practicing the common actions", async ({ practiceAllModules }) => {
        await practiceAllModules.PerformCommonActions();
    })
});