
const puppeteer = require('puppeteer');
var readlineSync = require('readline-sync');
const replaceAll = require('string.prototype.replaceall');
replaceAll.shim();

// var unidadeGestora = parseInt(readlineSync.question(`Unidade Gestora: `)) 153098

async function GRUbot() {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('http://consulta.tesouro.fazenda.gov.br/gru_novosite/gru_simples.asp');

    await page.focus('#codigo_favorecido')
    await page.waitForTimeout(1000)
    page.keyboard.type(`153098`)
    await page.waitForTimeout(1000)
    const inputElement = await page.$('#nome_favorecido');
    await inputElement.click();

    await page.waitForTimeout(4000)

    await page.select('#gestao', '15233**7788')

    await page.waitForTimeout(4000)


    await browser.close();
}

GRUbot();