// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('prompt-sync')()

let num
let counter = 0
let total = 0
let media = 0

do {
    num = Number(prompt("Digite um número: "))
    if (!isNaN(num)) {
        total += num
        if (num != 0) {
            counter++
        }
    }
} while (num !== 0)

media = total / counter

console.log(`A média dos números é ${media}.`)

