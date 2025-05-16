//Escreva um programa que recebe um número inteiro e verifica se ele é par ou ìmpar 
// utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')()

let number = Number(prompt("Digite um número: "))

if (isNaN(number)) {
    console.log("Isso não é um número válido.")
} else {
    if (number % 2 == 0) {
        console.log("O número é par.")
    } else {
        console.log("O número é ímpar.")
    }
}
