const puppeteer = require("puppeteer");

async function scrapeProduct(url) {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);

        const [el] = await page.$x('//*[@id="productTitle"]');
        const txt = await el.getProperty('textContent');
        const srcTxt = await txt.jsonValue();

        console.log({ srcTxt });
    } catch (e) {
        console.log(e, "ERROR");
    }
}

scrapeProduct('https://www.amazon.com/Apple-2-7GHz-ME086LL-Desktop-Refurbished/dp/B00M4LWXI0/ref=sr_1_4?dchild=1&keywords=mac&qid=1613172133&sr=8-4');