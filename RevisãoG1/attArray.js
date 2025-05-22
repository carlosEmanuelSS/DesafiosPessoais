const prompt = require('prompt-sync')({})
/* 
1) Objetivo: Crie um array chamado frutas contendo pelo menos 5 frutas. Em seguida:
    Adicione uma fruta ao final do array.
    Remova a primeira fruta do array.
    Exiba todas as frutas no console usando um loop for.

var frutas = ['banana', 'abacate', 'manga', 'melancia', 'maça']

console.log(`As frutas são: ${frutas.join(', ')}.`)

var add = prompt('Digite uma fruta para adcionar a lista: ')
frutas.push(add)
frutas.shift()

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
} 
*/
/*
 2) Crie um array com números de 1 a 20. Em seguida, utilize o método filter para criar um novo array contendo apenas os números pares. 
Exiba o novo array no console.
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const pares = num.filter((item) => {
    if (item % 2 == 0) {
        return (item)
    }
})
console.log(pares) 
*/
/*
 3) Crie um array com 5 números. Utilize o método reduce para calcular a soma de todos os números do array. Exiba o resultado no console.

const numeros = [23, 33, 4444, 12, 10]

const soma = numeros.reduce((acumulador, itens) => {
    const x = acumulador + itens
    return x
})
console.log(soma)
*/
/* 
4) Crie um array para colocar 7 nomes de pessoas. 
Utilize o método sort para ordenar os nomes em ordem alfabética. Exiba o array ordenado no console.

console.log('Olá, vamos listar os nomes !')
console.log('Digite os nomes abaixo:')

const  nomes = []

for (let i = 1; i <= 7; i++) {
    const nome = prompt(`Digite o ${i}° nome: `)
    nomes.push(nome)
}
nomes.sort()
for (let y = 0; y != nomes.length; y++){
    console.log(nomes[y])
} 
*/