// 10 -  Crie uma variavel que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

let anoNascimento = 1991

let maiorIdade = 2021 - anoNascimento

let idade = maiorIdade

if (idade >= 18) {
    console.log(`Parabéns você é maior de idade! Sua idade é: ${idade} anos.`)
} else if (idade <= 17) {
    console.log(`Você é menor de idade. Sua idade é: ${idade} anos.`)
}