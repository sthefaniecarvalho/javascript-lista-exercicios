//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ìmpar 
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

// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, 
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle 
// if-else.

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

// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como 
// 'Aprovado', 'Recuperação', ou 'Reprovado' utilizando if-else-if


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

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. 
// Utilize switch-case para implementar a lógica de cada opção selecionada.

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

// 5 . Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

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

// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

let a = Number(prompt("Digite o valor do lado A do triângulo: "))
let b = Number(prompt("Digite o valor do lado B do triângulo: "))
let c = Number(prompt("Digite o valor do lado B do triângulo: "))

if (a < b + c && b < a + c && c < a + b) {
    if (a == b || a == c || b == c) {
        console.log("É um triângulo isósceles.")
    } else if (a != b && b != c) {
        console.log("É um triângulo escaleno.")
    } else if (a == b && b == c) {
        console.log("É um triângulo equilátero.")
    }
} else {
    console.log("Não é um triângulo.")
}

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

let numeroMacas = Number(prompt("Digite o número de maças compradas: "))

if (!isNaN(numeroMacas)) {
    const total = numeroMacas < 6 ? 0.30 * numeroMacas : 0.25 * numeroMacas
    console.log(`O valor total da compra é ${total.toFixed(2)}`)
} else {
    console.log("Número inválido.")
}

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.


let num1, num2
num1 = Number(prompt("Digite o primeiro número: "))

do {
    num2 = Number(prompt("Digite outro número diferente: "))
} while (num1 == num2)

if (num1 > num2) {
    console.log(num2)
    console.log(num1)
} else {
    console.log(num1)
    console.log(num2)
}

// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.

let counter = 10

for (counter <= 10; counter >= 1; counter--) {
    console.log(counter)
}

// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

let num

do {
    num = Number(prompt("Digite um número: "))

} while (isNaN(num))


for (let i = 1; i <= 10; i++) {
    console.log(`${i}. ${num}`)
}

// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

let val
let soma = 0

for (let i = 1; i <= 5; i++) {
    val = Number(prompt(`Digite o número ${i}: `))
    while (isNaN(val)) {
        val = Number(prompt(`Número inválido! Digite o número ${i}: `))
    }
    soma += val
}

console.log(`A soma total dos números é ${soma}.`)

// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//     10) utilizando um loop for.

let numero

do {
    numero = Number(prompt("Digite um número: "))
} while (isNaN(numero))

for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${numero} = ${numero * i}`)
}

// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

let valor
let count = 0
let total = 0
let media = 0

do {
    valor = Number(prompt("Digite um número: "))
    if (!isNaN(valor)) {
        total += valor
        if (valor != 0) {
            count++
        }
    }
} while (valor !== 0)

media = total / count

console.log(`A média dos números é ${media}.`)

// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

let n = Number(prompt("Digite um número: "))
let fatorial = 1

for (let i = 1; i <= n; i++) {
    fatorial *= i
}
console.log(fatorial)

// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let x = 0, y = 1, temp

console.log(x)
console.log(y)

for (let i = 3; i <= 10; i++) {
    temp = x + y
    console.log(temp)
    x = y
    y = temp
}
