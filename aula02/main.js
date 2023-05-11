const cars = ['gol', 'fusca', 'tesla']

console.log(cars)

// const firstCar = cars[0]
// const secondCar = cars[1]
// const thirdCar = cars[2]

const [firstCar, secondCar, thirdCar] = cars // Destructing
 
console.log(thirdCar)


const pessoa = {
    nome: 'Renan',
    idade: 39,
    cidade: 'Caragua'
}

console.log(pessoa)

const {nome, idade, cidade: city} = pessoa // Destructing
// cidade: city -> Tira a propriedade cidade de dentro do objeto e renomeia para city

console.log(city) 

const end = {
    rua: 'Dos Bobos',
    numero: 0,
    bairro: 'centro'
}

const user = {
    email: 'user@gmail.com',
    nameUser: 'José',
    ...end // copia/espalha as propriedades do end
}

console.log(user)

// Destructing
const {nameUser, rua} = user

console.log(`Olá ${nameUser}, sua rua é ${rua}`)

const filme = ['Lord of the Rings', 2000, 'Tolkien', 'Peter Jackson']

// Destructing
const [ , ,autor] = filme

//console.log(`O filme ${title} foi exibido no ano ${ano} e foi produzido por ${diretor}`)

console.log(`O autor do filme é ${autor}`)

/* ------- Funções ------ */

function soma(valor1, valor2) {
    return valor1 + valor2
}

// Arrow Function

const soma2 = (valor1, valor2) => valor1 + valor2



const sum = soma // uma variável pode se tornar uma função 
console.log(sum(20, 40))

const arrayCoisas = [10, 'Renan', sum]
console.log(arrayCoisas[2](30, 15)) //usando uma função dentro do array

const objCoisas = {
    idade: 10,
    nome: 'Renan',
    operacao: sum //defini uma propriedade como uma função
}
console.log(objCoisas.operacao(40, 15)) //usa a propriedade definida como função 

const h1 = document.querySelector('h1')
h1.innerHTML = 'Hi!'
//sub
function sub(valor1, valor2) {
    return valor1 - valor2
}

//mult
function mult(valor1, valor2) {
    return valor1 * valor2
}

//div
function div(valor1, valor2) {
    //return valor1 / valor2
    console.log(valor1/valor2)
}

console.log(soma(10, 5))
console.log(sub(10, 5))
console.log(mult(10, 5))
div(10, 5)

const calculadora = {
    sum: function (valor1, valor2) {
        return valor1 + valor2
    },
    sub: function (valor1, valor2) {
        return valor1 - valor2
    },
    mult: function (valor1, valor2) {
        return valor1 * valor2
    },
    div: function (valor1, valor2) {
        return valor1 / valor2
    }
}

const calc = {
    sum: (valor1, valor2) => valor1 + valor2,
    sub: (valor1, valor2) => valor1 - valor2,
    mult:(valor1, valor2) => valor1 * valor2,
    div: (valor1, valor2) => valor1 / valor2
}

const mostraDiv = function (valor1, valor2) {
    console.log(valor1 / valor2)
}

const mostraDiv2 = calculadora.div

mostraDiv(10,5)

console.log(calculadora.sum(10,5))
console.log(calculadora.sub(10,5))
console.log(calculadora.mult(10,5))
console.log(calculadora.div(10,5))
console.log(mostraDiv2(10,5))
console.log(calculadora.div)

// função arrow
const total = (v1, v2, v3) => {
    const soma = v1 + v2
    return soma * v3
}

console.log(total(2, 3, 10))

// criar uma função multiplicaTudo com 4 valores de entrada usando arrow function 
const multiplicaTudo = (v1, v2, v3, v4) => v1 * v2 * v3 * v4

/*
const multiplicaTudo = (v1, v2, v3, v4) => { 
    return v1  * v2 * v3 * v4
}
*/

console.log(multiplicaTudo(2, 3, 2, 5))


/* ------- Classes ------ */

class Car {
    constructor(name, year) {
      this.name = name
      this.year = year
    }
    showCar(){
        console.log(`O nome é ${this.name} ano ${this.year}`)
    }
    getName(){
        return this.name
    }
}

const car1 = new Car('Gol', 1987)

console.log(car1.name)
car1.showCar()

console.log(car1.getName())

// criar uma classe Calculadora com as 4 operações e dois valores

class Calculadora {
    constructor(v1, v2){
        this.v1 = v1
        this.v2 = v2
    }
    sum(){
        return this.v1 + this.v2
    }
    sub(){
        return this.v1 - this.v2
    }
    mult(){
        return this.v1 * this.v2
    }
    div(){
        return this.v1 / this.v2
    }
}

const calc5 = new Calculadora(10, 5)
console.log(calc5.sum())
console.log(calc5.sub())
console.log(calc5.mult())
console.log(calc5.div())