const hbs = require('hbs');
const fs = require ('fs');

let cursos =[ {
Id: 101,
Nombre: 'Fundamentos de programacion en java',
Duracion: 60,
Valor: 200000

},
{

Id: 202,
Nombre: 'Fundamentos de programacion en C#',
Duracion: 50,
Valor: 250000
},

{

Id: 303,
Nombre: 'Fundamentos de programacion en C++',
Duracion: 40,
Valor: 275000

}];

hbs.registerHelper('verificar',(id,cedula,nombre)=>{
let mensaje;
let sw=false;
		cursos.forEach(mat=>{
			console.log(mat.Id);
			console.log(id);
			console.log('este'+mat.Id+'es igual a '+id)
		if(mat.Id==id && sw==false){
			mensaje= 'El estudiante ' +nombre+' identificado con cedula de ciudadania '+cedula+' se matriculo satisfactoriamente en el curso con identificador '+id+' nombrado '+mat.Nombre+' con una duracion de '+mat.Duracion+' horas y un valor de '+mat.Valor;	
		sw=true;
		}
		else{
			if(sw!=true)
			mensaje='Identificador de curso no encontrado';
		}
	})
return mensaje;
})
