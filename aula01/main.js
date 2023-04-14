//let e const são block scoped
let idade = null
let valor = 'fsdfsd'
const cidade = 'Caraguatatuba'

const novaAtual = 'São Paulo'
if(valor == 1){
    const cidade = 'SJC'
    if(idade == 18) {
        //const cidade = 'São Paulo'
        console.log(nome + ' tem ' + idade + ' anos e mora em ' + cidade)
    }
}

// valores falsos: 0, '', null, undefined, NaN, false
// valores verdadeiros: qualquer int não 0, 'string', {}, [], true
if(valor){
    console.log('Valor é igual a true: ' + typeof valor)
} else {
    console.log('Valor é false: ' + typeof valor)
}


var nome = 'Renan'


console.log(`${nome} tem ${idade} anos e mora em ${cidade}`)