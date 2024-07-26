
const fs=require("fs");
const colors = require('colors');

const crearArchivo=async(base=5,list=true, hasta) => {

    try {
        
        console.log('================================================'.bgBrightBlue);
        console.log(`=========tabla del ${base}=============================`.america);
        console.log('================================================'.zebra);
            let salida='';
        for (let i = 1; i <= hasta; i++) {
        
        salida+=`${i}x${base}=${i*base}\n`;
            
        }
        if(list){
            console.log(salida.italic);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
            console.log(`El archivo tabla-${base}.txt fue creado correctamente!`);
            return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports={
    crearArchivo
}