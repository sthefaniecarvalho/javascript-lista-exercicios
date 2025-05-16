// Crie um menu interativo no console que oferece ao usuário a escolha de três opções. 
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')()

console.log("----------Menu----------")
console.log("Escolher produto: ")
console.log("1- Arroz - R$20,00")
console.log("2- Feijão - R$5,00")
console.log("3- Macarrão - R$8,00")
console.log("------------------------")

let op
let quant
do {
    op = Number(prompt("Escolha uma opção: "))
    quant = Number(prompt("Escolha a quantidade: "))
} while (op < 1 || op > 3 || isNaN(op) == true || isNaN(quant) == true || quant < 1)


switch (op) {
    case 1:
        console.log(`Total: R$${(20 * quant).toFixed(2)}`)
        break
    case 2:
        console.log(`Total: R$${(5 * quant).toFixed(2)}`)
        break
    case 3:
        console.log(`Total: R$${(8 * quant).toFixed(2)}`)
        break
    default:
        console.log("Escolha uma opção válida.")
}

