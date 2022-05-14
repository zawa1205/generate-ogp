const fs = require('fs/promises');
const puppeteer = require('puppeteer');
const path = require('path');

const runPuppeteer = function() {
    (async () => {
        const html = __dirname + '/index.html'
        const buffer = await fs.readFile(html)

        const browser = await puppeteer.launch({ headless: false, })
        const page = (await browser.pages())[0]
        await page.goto(`data:text/html;base64,${buffer.toString("base64")}`)

        const outPath = path.resolve(__dirname, '../img/example.png')
        await page.screenshot({path: outPath})

        await browser.close();
    })();
}
runPuppeteer()