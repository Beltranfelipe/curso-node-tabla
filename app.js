const {crearArchivo}=require('./helpers/multiplicar')
const argv=require('./config/yargs')



console.clear();


// console.log(argv);
// console.log('la base: yargs ',argv.base);

// const base=3;
// const [,,arg3='base=5'] = process.argv;
// const [,base=5]=arg3.split('=');
// console.log(base);

crearArchivo(argv.b,argv.list,argv.h)
.then(nombreArchivo => console.log(nombreArchivo,'creado'))
.catch(err => console.log(err));
