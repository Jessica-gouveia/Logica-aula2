// 4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

let kmRodados = 150

let diasAlugados = 5

const precoCarro = diasAlugados * 60

const precoKm = kmRodados * 0.15

let precoTotal = precoCarro + precoKm

console.log(`Preço total: R$ ${precoTotal} reais`)

