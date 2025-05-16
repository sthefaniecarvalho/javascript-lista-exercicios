// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require('prompt-sync')()

let num
let soma = 0

for (let i = 1; i <= 5; i++) {
    num = Number(prompt(`Digite o número ${i}: `))
    while (isNaN(num)) {
        num = Number(prompt(`Número inválido! Digite o número ${i}: `))
    }
    soma += num
}

console.log(`A soma total dos números é ${soma}.`)
