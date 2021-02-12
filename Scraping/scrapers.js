const puppeteer = require('puppeteer')

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

const [el] = page.$x
}

scrapeProduct('https://internbytes.com/display-review?epochTime=1611606367492');