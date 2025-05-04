// If/else, for, while
const prompt = require('prompt-sync')({})
var impar = 1
var par = 1
var p = 0
var i = 0
var n1 = 0
for (var x = 0; x < 5; x++) {

    var y = prompt('Digite um número: ')

    if (y % 2 == 0) {
        console.log('par')
        par++
        p++
    } else {
        console.log('impar')
        impar++
        i++
    }
}
while (n1 < 3) {
    console.log('Números PARES digitados ' + p + ', ' + 'Numeros IMPARES ' + i)
    n1++
}
if (par > impar) {
    console.log('Foram mais Pares Digitados ')
} else {
    console.log('Foram mais Impares digitados ')
}
