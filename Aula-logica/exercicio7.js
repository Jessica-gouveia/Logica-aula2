// 7 - Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

let num1 = 50

let num2 = 30

if (num1 > num2) {
    console.log(`${num1} maior que ${num2}.`)
} else if (num2 > num1) {
    console.log(`${num2} maior que ${num1}.`)
} else if (num1 === num2) {
    console.log("Os números são iguais")
}