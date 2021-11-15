const fs = require('fs');
const crearArchivo = async (base = 5 , listar = false, hasta)=>{
    try {
        let salida = '';
        
        if (hasta) {
            for (let i = 1;  i < hasta ; i++) {
                salida += `${ base } x  ${ i } = ${i * base}\n`       
            }
        } else {
            for (let i = 1;  i < 11 ; i++) {
                salida += `${ base } x  ${ i } = ${i * base}\n`       
            }
        }
        

        if (listar) {
            console.log(salida)
        }
        
        fs.writeFileSync ( `./salida/tabla-${base}.txt`, salida )
            return 'creada papu'
        
    } catch (err) {
        throw err
    }
}

module.exports = {
    crearArchivo : crearArchivo
}


