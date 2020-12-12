const puppeteer = require('puppeteer');

(async () => {
  console.info(`>>> launch browser...`)
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1200,
    height: 1300,
  });
  console.info(`goto page...`)
  await page.goto('http://localhost:8000');
  await page.waitFor(1000)
  console.info(`Saving screenshot to screenshot.png`)
  await page.screenshot({path: 'screenshot.png'});

  await browser.close();
})();