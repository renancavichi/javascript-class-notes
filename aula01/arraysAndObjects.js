const idades = [] //array vazio
const nomes = ['Renan', 'João', 'Pedro'] 


const carro = {} //objeto vazio
const pessoa = {
    nome: 'Camila',
    idade: 18
}
console.log(pessoa.nome)

const valores = ['Renan', 18, pessoa, ['gol', 'palio', 'uno']]

console.log(typeof nomes)
console.log(typeof pessoa)

console.log(valores[2].nome) // objeto dentro de array
console.log(valores[3][0]) // array dentro de array

console.log(valores.length) // tamanho do array
valores.push('Caragua') // adiciona um elemento no final do array
valores.pop() // remove o último elemento do array
console.log(valores) // tamanho do array


const novoArray1 = ['renan', 'jose', 'priscila']
const novoArray2 = ['car', 10, 25]

// const resultado = [...novoArray1, 'teste', 'novo']
const resultado = [...novoArray1, ...novoArray2]
console.log(resultado)


const user = {
    nome: 'Camila',
    idade: 18,
    nome: 'Renan'
}

const end = {}
end.cidade = 'Caragua'
end.estado = 'SP'

user.altura = 1.70 // adiciona uma nova propriedade ao objeto
delete user.idade // remove uma propriedade do objeto

console.log(user)

const juntarObjetos = {...user, ...end} // juntar dois objetos

console.log(juntarObjetos)

juntarObjetos.cidade = 'São Paulo'

console.log(juntarObjetos)

const novoOutraCidade = {
    ...juntarObjetos,
    cidade: 'São Paulo'
} // cria um novo objeto com as propriedades do outro alterando a cidade caso exista

console.log(novoOutraCidade)