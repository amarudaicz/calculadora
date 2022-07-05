const operacionesSuma = require('../sumar.js')
const operacionesDivison = require('./dividir.js')
const operacionesResta = require('./restar.js')
const operacionesMultiplicar = require('./multiplicar.js')



console.log(operacionesSuma.sumar(10,20))
console.log(operacionesResta.resta(10,20))
console.log(operacionesDivison.division(10,2))
console.log(operacionesMultiplicar.multiplicar(10,20))

