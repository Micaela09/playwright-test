// En este ejemplo, no escribire codigo sino que lo hare con npx playwright codegen wikipedia.org
//Para ejecutar solo esta clase node .\exampleHello.js

const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://www.wikipedia.org/
  await page.goto('https://www.wikipedia.org/');

  // Click text=English
  await page.click('text=English');
  // assert.equal(page.url(), 'https://en.wikipedia.org/wiki/Main_Page');

  // Click text=Hoodoo Mountain
  await page.click('text=Hoodoo Mountain');
  // assert.equal(page.url(), 'https://en.wikipedia.org/wiki/Hoodoo_Mountain');

  // ---------------------
  await context.close();
  await browser.close();
})();