const fs = require('fs/promises');
const puppeteer = require('puppeteer');
const path = require('path');
const json = require('./title.json')

const runPuppeteer = function() {
    (async () => {
        // TODO: headless: trueだと画像が保存されない
        const browser = await puppeteer.launch({ headless: false, })
        const page = (await browser.pages())[0]
        page.setViewport({ width: 1200, height: 630 });
        page.goto(`file:${path.join(__dirname, 'index.html')}`)
        // 画像読み込み安定のため待機
        await page.waitForTimeout(1000)
        const title = json.title.replace(/　/g, '')
        const outPath = path.resolve(__dirname, '../img/' + title + '.png')
        await page.screenshot({path: outPath})

        await browser.close()
    })();
}
runPuppeteer()