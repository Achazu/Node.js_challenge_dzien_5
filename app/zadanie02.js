//Twój kod

const express = require('express');
const app = express();
let name = '';

 app.get('/', (req, res) => {
	res.send('No data to show');
 });
 
 app.get('/name/set/:name', (req, res) => {
	name = req.params.name;
	res.send(`${name}`);
 });


 app.get('/name/show', (req, res) => {
	res.send(`${name}`);
 });


 app.get('/name/check', (req, res) => {
	name ? res.send('Saved') : res.send('Not saved');
 });
 
 
 app.listen(3000, () => {
	console.log('Serwer uruchomiony na porcie 3000');
 });