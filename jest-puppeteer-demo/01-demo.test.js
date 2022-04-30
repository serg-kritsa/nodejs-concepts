const puppeteer = require('puppeteer');

let browser, page;

beforeEach(async () => {
  browser = await puppeteer.launch({ 
    headless: false
  });

  page = await browser.newPage();
  await page.goto('http://localhost:3000');
});

afterEach(async () => {
  await browser.close();
});

test('text node from DOM element has correct content', async () => {
  const text = await page.$eval('<css-selector>', el => el.innerHTML);
  expect(text).toEqual('>>> TESTED VALUE <<<');
});