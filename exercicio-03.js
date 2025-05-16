// Implemente um programa que recebe uma nota de 0 a 10 e classifica como 
// 'Aprovado', 'Recuperação', ou 'Reprovado' utilizando if-else-if

const prompt = require('prompt-sync')()

let nota

do {
    nota = Number(prompt("Digite a nota: "))
} while (isNaN(nota))

if (nota >= 0 && nota <= 10) {
    if (nota >= 6) {
        console.log("Aprovado!")
    } else if (nota < 6 && nota >= 3) {
        console.log("Recuperação.")
    } else if (nota < 3) {
        console.log("Reprovado!")
    }
} else {
    console.log("Nota inválida.")
}