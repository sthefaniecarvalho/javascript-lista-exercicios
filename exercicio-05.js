// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require('prompt-sync')()

let peso = Number(prompt("Digite o peso: "))
let altura = Number(prompt("Digite a altura: "))

let imc = peso / (altura * altura);

console.log("IMC:", imc.toFixed(2));

if (imc < 18.5) {
    console.log("Categoria: Baixo peso");
} else if (imc >= 18.5 && imc < 24.9) {
    console.log("Categoria: Peso normal");
} else if (imc >= 25 && imc < 29.9) {
    console.log("Categoria: Sobrepeso");
} else {
    console.log("Categoria: Obesidade");
}
