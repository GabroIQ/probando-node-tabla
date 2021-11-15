console.clear()
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs')
var colors = require('colors');

 



 crearArchivo( argv.b , argv.l , argv.h)
    .then( nombreArchivo => console.log( nombreArchivo , 'creada paaaaaaaa'.trap.red ) )
    .catch ( err => console.log(err))

