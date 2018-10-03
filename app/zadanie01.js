//Twój kod

const express = require('express');
const app = express();

 app.get('/', (req, res) => {
	res.send('No data to add');
 });
 
 app.get('/:num1/:num2', (req, res) => {
	const sum = parseInt(req.params.num1) + parseInt(req.params.num2);
	res.send('Result: ' +sum);
 });
 
 app.listen(3000, () => {
	console.log('Serwer uruchomiony na porcie 3000');
 });