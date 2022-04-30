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

test('navigation after click', async () => {
  await page.click('<css-selector>');
  const url = await page.url();

  expect(url).toMatch(/accounts\.google\.com/);
});