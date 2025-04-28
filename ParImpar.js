const prompt = require('prompt-sync')({})

let n1 = Number(prompt('Digite um número: ')) // String convertida para número.

if (isNaN(n1)){  // Vai verifica se o núemro digitado é um número 
  console.log('O valor digitado esta incorreto.')
} else if (n1 % 2 == 0 ){
  console.log(`O número ${n1} é PAR`)
}else {
  console.log('O núemro é Impar ')
}