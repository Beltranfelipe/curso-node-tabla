
const argv=require('yargs')
    .options('b',{
        alias:'base',
        type:'number',
        demandOption:true,
        description:'Base de la tabla de multiplicar'
    })
    .options('l',{
        alias:'list',
        type:'boolean',        
        default:false,
        description:'opcion para listar la tabla en el log'
    })
    .options('h',{
        alias:'hasta',
        type:'number',        
        default:10,
        description:'valor hasta cuando se debe hacer la multiplicacion'
    })
    .check((argv,options) => {
        if(isNaN(argv.base)){
            throw 'La base debe ser un número';
        }
        return true;
    })
    .argv;



    module.exports=argv;