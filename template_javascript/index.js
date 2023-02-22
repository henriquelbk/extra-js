/*
1)
    a) 10

    b) 10, 5 

2)  Para rodar a variável c deve ser declarada
    10, 10 ,10
   
3) horasDiariasTrabalho
   salarioDiario
*/

//4)

/*
let nome = prompt('Qual é o seu nome?')
let idade = Number(prompt('Qual é a sua idade?'))

console.log(typeof(nome))
console.log(typeof(idade))
console.log(`Olá ${nome},  você tem ${idade} anos.`)

// São undefined pois as variáveis não têm valores atribuídos
// String e number pois o prompt por padrão retorna strings e, no segundo caso, foi declarado o método 'Number'
*/

//5)
/*
const pergunta1 = 'Sim ou não?'
const pergunta2 = 'ein?'
const pergunta3 = 'mas é sim ou não?'
const resposta1 = prompt(pergunta1)
const resposta2 = prompt(pergunta2)
const resposta3 = prompt(pergunta3)

console.log(pergunta1, resposta1)
console.log(pergunta2, resposta2)
console.log(pergunta3, resposta3)
*/

//6)
/*
let cao = 'ainda'
let gato = 'messi'
let troca

troca = cao
cao = gato
gato = troca

console.log(`O novo valor de cao é: ${cao}`)
console.log(`O novo valor de gato é: ${gato}`)
*/

//7)
/*
const resposta4 = confirm('Você gostaria de ser reirecionado para o página da Labenu?')
console.log(resposta4)

//8)

const aviso = 'Você está na página da Labenu'
alert(aviso)

//9)

const nomeDoUsuario = 'kel'
let dataAtual = prompt(`Que dia é hoje, ${nomeDoUsuario}?`)
let ideiaDoDia = prompt(`Qual é a ideia de hoje, ${nomeDoUsuario}?`)

//10)

console.log(`Olá ${nomeDoUsuario} a sua ideia para o dia ${dataAtual} é ${ideiaDoDia}.`)
*/

// OPERADORES

/*
1)

a. false
b. false
c. true
d. boolean

2)

O retorno de um prompt é uma string, por isso a soma da problema.
Será impresso um erro.

3)

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)
*/

//1)
/*
const idade = prompt('Qual a sua idade?')
const idadeBf = prompt('Qual a idade do seu bf?')
const compara = Number(idade) > Number(idadeBf)
const diferenca = Number(idade) - Number(idadeBf)

console.log(`Sua idade é maior do que a do seu bf? ${compara}`)
console.log(`Qual é a diferença de idade entre você e seu bf? ${diferenca}`)
*/

//2)
/*
const par = Number(prompt('Insira um numero par'))
console.log(par % 2)

// Para números pares, o resto da divisão é sempre 0.
// Para números ímpares, o resto da divisão é sempre 1.
*/

//3)
/*
const idade = Number(prompt('Quantos anos tens?'))
const meses = idade * 12 
const dias = meses * 30
const horas = dias * 24

console.log(idade)
console.log(meses)
console.log(dias)
console.log(horas)
*/

//4)
/*
const numero1 = Number(prompt('Insira um número'))
const numero2 = Number(prompt('Insira outro número'))

console.log('O primeiro numero é maior que segundo?', numero1 > numero2)
console.log('O primeiro numero é igual ao segundo?', numero1 === numero2)
console.log('O primeiro numero é divisível pelo segundo?', numero1 % numero2 === 0)
console.log('O segundo numero é divisível pelo primeiro?', numero2 % numero1 === 0)
*/

// STRINGS

//1)

const nome = prompt('Qual o seu nome?')
const email = prompt('Qual o seu e-mail?')

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}`)

//2)

const senha = prompt('Digite sua senha')

console.log(senha.length)

//3)

const contemArroba = email.includes('@')

console.log(contemArroba)

//4)

const minusculas = nome.toLowerCase()

console.log(minusculas)

//5)

const labenu = email.replace('hotmail.com', 'labenu.com')

console.log(labenu)
