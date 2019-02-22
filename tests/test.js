const assert = require('assert')
const puppeteer = require('puppeteer')
const chai = require('chai');
const expect = chai.expect;

let browser;
let page;
let loc = __dirname;
let loc2 = loc.slice(0, -6)
console.log(loc);
url = 'file:' + loc2 + '/00/index.html';
console.log(url);

//preps a browser window
before(async () => {
  browser = await puppeteer.launch({args: ['--no-sandbox']})
  page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 800 })
})

//the actual tests
describe('Test site', () => {
  it('Test app', async () => {
     await page.goto(url);
     await page.click('#lngSel > div.btn-group.bootstrap-select.fit-width > button > span.filter-option.pull-left')
     await page.click('#lngSel > div.btn-group.bootstrap-select.fit-width.open > div > ul > li:nth-child(1) > a')
     await page.click('#aboutContinueOnline')
     await page.click('#acceptSurvey')
     await page.click('#conSel > div.btn-group.bootstrap-select.fit-width > button')
     await page.click('#conSel > div.btn-group.bootstrap-select.fit-width.dropup.open > div > ul > li:nth-child(68) > a')
     await page.click('#insContinue')
     await page.click('#sq_100 > div:nth-child(2) > fieldset > div:nth-child(2) > label > input[type="radio"]')
     await page.click('#sq_101i')
     await page.click('#sq_102i')
     await page.click('#sq_103i')
     await page.click('#sq_104i')
     await page.click('#sq_105i')
     await page.click('#sq_106i')
     await page.click('#sq_107i')
     await page.click('#sp_100 > div.panel-footer.card-footer > input')
  }).timeout(30000)
});

//close browser when done
after(async () => {
  await browser.close()
})

