/*let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (COMPARAR O numeroUm e a stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (COMPARAR O numeroTrinta e a stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (COMPARAR O numeroDez e a stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}
*/


let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

//condicional 1
if (numeroUm === stringUm && numeroUm == stringUm){
    console.log('As variáveis numeroUm e stringUm tem o mesmo valor e mesmo tipo')
} else if (numeroUm != stringUm){
    console.log('As variáveis numeroUm e stringUm não tem o mesmo valor e nem o mesmo tipo')
} else {
    console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
}

//condicional 2
if(numeroTrinta == stringTrinta && numeroTrinta === stringTrinta){
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else if (numeroTrinta !== stringTrinta && numeroTrinta == stringTrinta){
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor, mas tipos diferentes')
} else {
    console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo valor e nem o mesmo tipo')
}


//condicional 3
if (numeroDez == stringDez && numeroDez !== stringDez){
    console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else if (numeroDez != stringDez && numeroDez === stringDez){
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor e nem o mesmo tipo')
} 