const puppeteer = require('puppeteer');
const { Buffer } = require('safe-buffer');
const Keygrip = require('keygrip');

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

function encryptData() {
  const id = 'userId-from-mongo-db'
  const sessionObject = {
      passport: {
          user: id
      }
  };
  const sessionString = Buffer.from(JSON.stringify(sessionObject) ).toString('base64');
  
  const keygrip = new Keygrip([sessionSecret]);
  const sessionSecret = '123123123';
  const sig = keygrip.sign('session=' + sessionString);
  return {sessionString, sig};
};

function emulateLogin(page) {
  const { sessionString, sig } = encryptData();
  await page.setCookie({ name: 'session', value: sessionString});
  await page.setCookie({ name: 'session.sig', value: sig});
  await page.goto('http://localhost:3000'); // way of refreshing page
};

test('find logout element by link', async () => {
  emulateLogin(page);
  
  await page.waitFor('a[href="/auth/logout"]'); // !!! test is NOT PASSED w/o this cause it's too fast !!!   // waiting required element
  const text = await page.$eval('a[href="/auth/logout"]', el => el.innerHTML);

  expect(text).toEqual('Logout');
});