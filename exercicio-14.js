// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require('prompt-sync')()

let num = Number(prompt("Digite um número: "))
let fatorial = 1

for (let i = 1; i <= num; i++) {
    fatorial *= i
}
console.log(fatorial)
