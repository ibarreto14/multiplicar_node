const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch( comando ){
	case 'listar':
		//console.log('listar');
		listarTabla(argv.base, argv.limite)
			.then( tabla => console.log(`${ tabla }`))
			.catch( e => console.log(e) );
	break;

	case 'crear':
		//console.log('crear');
		crearArchivo(argv.base, argv.limite)
		 	.then( archivo => console.log(`Archivo creado: `, colors.green( archivo )))
		 	.catch( e => console.log(e) );
	break;

	default:
		console.log('Comando no reconocido');
	break;
}

/*let parametro = argv[2];
let base      = parametro.split('=')[1];
*/