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

test('statement', async () => {
  await page.type('<css-selector>', 'My typed text');

  expect('123').toEqual('>>> TESTED VALUE <<<');
});