//REQUIREDS
const fs = require('fs');
const colors = require('colors');

let listarTabla = ( base, limite ) => {

	console.log('============================='.green);
	console.log(`TABLA DE ${ base }`.green);
	console.log('============================='.green);

	return new Promise( (resolve, reject) => {
		if( !Number(base)){
		reject(`[${ base }] No es un número`);
		return;
		}

		if( !Number(limite)){
			reject(`[${ limite }] No es un número`);
			return;
		}

		let data = '';

		for (let i = 1; i <= limite; i++) {
			data += `${ base } x ${ i } = ${ base * i }\n`;
		}

		resolve( console.log(data) );
	});
}


let crearArchivo = (base, limite) => {

	return new Promise( (resolve, reject) => {

		if( !Number(base)){
			reject(`[${ base }] No es un número`);
			return;
		}

		if( !Number(limite)){
			reject(`[${ limite }] No es un número`);
			return;
		}

		let data = '';

		for (let i = 1; i <= limite; i++) {	
			data+= `${ base} x ${ i } = ${ base * i }\n`;
		}

		fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {

		  if (err)
		  	reject( err );
		  else
		  	resolve(`tabla-${ base }.txt`);
		});

	}); 
}

module.exports = {
	crearArchivo,
	listarTabla
}