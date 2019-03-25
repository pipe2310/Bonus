const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser')
require('./helpers');

const directoriopublico = path.join(__dirname, '../public')
const directoiopartial= path.join(__dirname, '../partials')
app.use(express.static(directoriopublico));
hbs.registerPartials(directoiopartial);
app.use(bodyParser.urlencoded({extended:false}));


app.set('view engine','hbs');

app.get('/',(req,res)=>{
	res.render('index',{
	});
});

app.post('/calculos7',(req,res)=>{
	console.log(req.query);
	res.render('calculos7',{
		id: parseInt(req.body.id),
		cedula: parseInt(req.body.cedula),
		nombre: req.body.nombre
	});
});

app.get('*',(req,res)=>{
	res.render('error',{
		estudiante: 'error'
	})
})

app.listen(3000,()=>{
console.log('escuchando en el puerto 3000')

});