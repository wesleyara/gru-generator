
const { read } = require('fs');
const puppeteer = require('puppeteer');
var readlineSync = require('readline-sync');
const replaceAll = require('string.prototype.replaceall');
replaceAll.shim();

console.log("Seja bem vindo ao GRU generator, responda algumas perguntas para gerarmos seu boleto!")

var unidadeGestora = parseInt(readlineSync.question(`Unidade Gestora: `)) 
var vencimento = parseInt(readlineSync.question(`Para que data o vencimento? (ex: ddmmaaaa): `))
var cpf = parseInt(readlineSync.question(`Digite seu CPF (somente numeros): `))
var nomeContribuinte = readlineSync.question(`Digite o nome do contribuinte: `)
var valorPrincipal = readlineSync.question(`Digite o valor principal e total (ex: 5000 para R$50,00): `)


async function GRUbot() {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('http://consulta.tesouro.fazenda.gov.br/gru_novosite/gru_simples.asp');

    await page.waitForTimeout(5000)
    await page.focus('#codigo_favorecido')
    await page.waitForTimeout(1000)
    page.keyboard.type(`${unidadeGestora}`)
    await page.waitForTimeout(1000)
    const inputElement = await page.$('#nome_favorecido');
    await inputElement.click();

    await page.waitForTimeout(1000)

    await page.select('#gestao', '15233**7788')

    await page.waitForTimeout(1000)

    await page.select('#codigo_recolhimento', '28832-2')

    await page.waitForTimeout(1000)

    const inputElement1 = await page.$('#image1');
    await inputElement1.click();

    await page.waitForTimeout(3000)

    await page.focus('#referencia')
    await page.waitForTimeout(1000)
    page.keyboard.type(`15309830330435`)

    await page.waitForTimeout(1000)

    await page.focus('#vencimento')
    await page.waitForTimeout(1000)
    page.keyboard.type(`${vencimento}`)

    await page.waitForTimeout(1000)

    await page.focus('#cnpj_cpf')
    await page.waitForTimeout(1000)
    page.keyboard.type(`${cpf}`)

    await page.waitForTimeout(1000)

    await page.focus('#nome_contribuinte')
    await page.waitForTimeout(1000)
    page.keyboard.type(`${nomeContribuinte}`)

    await page.waitForTimeout(1000)

    await page.focus('#valorPrincipal')
    await page.waitForTimeout(1000)
    page.keyboard.type(`${valorPrincipal}`)

    await page.waitForTimeout(1000)

    await page.focus('#valorTotal')
    await page.waitForTimeout(1000)
    page.keyboard.type(`${valorPrincipal}`)

    await page.waitForTimeout(1000)

    await page.select('#boleto', '4')
    
    await page.waitForTimeout(1000)

    const inputElement3 = await page.$('#image1');
    await inputElement3.click();

    await page.waitForTimeout(5000)

    await browser.close();
}

GRUbot();