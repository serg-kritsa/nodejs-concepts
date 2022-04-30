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
  const result = await page.evaluate(_x => {
    return Promise.resolve(2 + _x);  
  }, 2);

  expect(result).toEqual(2);
});

test('statement', async () => {
  const url = 'http://www.abc.com/a';

  const result = await this.page.evaluate(_url => {
    return fetch(_url, {
      method: 'GET',
      credentials: 'same-origin',
    }).then(res => res.json()); // Promise
  }, url);
  expect(result).toEqual(2);
});