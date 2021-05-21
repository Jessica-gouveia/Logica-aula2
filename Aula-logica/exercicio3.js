// 3 - Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

let valorDaConta = 450

const valorDaGorjeta = valorDaConta * (10/100)

let valorTotalComTaxa = valorDaConta + valorDaGorjeta

console.log(`Valor total a ser pago: R$ ${valorTotalComTaxa} reais`)

console.log(`Valor da taxa do garçom: R$ ${valorDaGorjeta}`)

