const express = require('express');

const app = express();

const Pokemon = require('./models/pokemon');

app.use(express.static('public'));
// app.get('/pokemon', (req, res) => {
// 	res.send(Pokemon);
// });

app.get('/pokemon/:index', (req, res) => {
	// console.log(req.params, "req params");
	// console.log('/pokemon/:index');
	res.render('show.ejs', {
		pokemon: Pokemon[req.params.index]
	})
})

app.get('/pokemon/', (req, res) => {
	console.log(Pokemon)
	res.render('index.ejs', {
		pokemon: Pokemon
	})
})


app.listen(3000, () =>{
	console.log('my server is up and running');
})