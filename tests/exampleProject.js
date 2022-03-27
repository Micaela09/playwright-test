// En este ejemplo, no escribire codigo sino que lo hare con npx playwright codegen https://order.devo.picthrive.com/b082501d-00aa-4c82-b25e-b5b9f3df4069/
//Para ejecutar solo esta clase node .\exampleProject.js

const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    channel: 'chrome', 
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://order.devo.picthrive.com/b082501d-00aa-4c82-b25e-b5b9f3df4069/
  await page.goto('https://order.devo.picthrive.com/b082501d-00aa-4c82-b25e-b5b9f3df4069/');

  // Click app-video div:has-text("favorite_outline")
  await page.click('app-video div:has-text("favorite_outline")');
  // assert.equal(page.url(), 'https://order.devo.picthrive.com/b082501d-00aa-4c82-b25e-b5b9f3df4069/video/b082501d-00aa-4c82-b25e-b5b9f3df4069.7f799800-557e-4b5d-9766-749d811f2b4d');

  // Click a:has-text("high_quality Stream Original")
  const [page1] = await Promise.all([
    page.waitForEvent('popup')
   // page.click('a:has-text("high_quality Stream Original")')
  ]);

  // ---------------------
  await context.close();
  await browser.close();
})();