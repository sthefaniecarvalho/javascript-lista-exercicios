// Crie um programa que classifica a idade de uma pessoa em categorias (criança, 
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle 
// if-else.

const prompt = require('prompt-sync')()

let idade

do {
    idade = Number(prompt("Digite a idade: "))
} while (isNaN(idade))

if (idade > 0) {
    if (idade <= 11) {
        console.log("É uma criança.")
    } else if (idade >= 12 && idade < 18) {
        console.log("É um adolescente.")
    } else if (idade >= 18 && idade < 60) {
        console.log("É um adulto.")
    } else {
        console.log("É um idoso")
    }
} else {
    console.log("Digite uma idade válida")
}
