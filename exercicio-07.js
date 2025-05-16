// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')()

let numeroMacas = Number(prompt("Digite o número de maças compradas: "))

if (!isNaN(numeroMacas)) {
    const total = numeroMacas < 6 ? 0.30 * numeroMacas : 0.25 * numeroMacas
    console.log(`O valor total da compra é ${total.toFixed(2)}`)
} else {
    console.log("Número inválido.")
}
