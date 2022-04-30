const puppeteer = require('puppeteer');

test('launch Chromium instance w/ UI and keep opened', async () => {
  const browser = await puppeteer.launch({ headless: false });
});

test('start new tab in Chromium browser in test env', async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
});

test('open url in Chromium browser in test env', async () => {
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
});

test('get text node from DOM element in Chromium browser in test env', async () => {
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  await page.goto('http://localhost:3000');

  const text = await page.$eval('a.brand-logo', el => el.innerHTML);
  expect(text).toEqual('>>> TESTED VALUE <<<');
});