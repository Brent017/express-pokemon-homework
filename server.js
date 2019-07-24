const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

const Pokemon = require('./models/pokemon');
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(express.static('public'));
// app.get('/pokemon', (req, res) => {
// 	res.send(Pokemon);
// });

// Index
app.get('/pokemon/', (req, res) => {
	console.log(Pokemon)
	res.render('index.ejs', {
		pokemon: Pokemon
	})
})

// New
app.get('/pokemon/new', (req, res) => {
	res.render('new.ejs');
});

// Show
app.get('/pokemon/:index', (req, res) => {
	// console.log(req.params, "req params");
	console.log('/pokemon/:index');
	res.render('show.ejs', {
		pokemon: Pokemon[req.params.index],
		index: req.params.index
	})
})

// Edit
app.get('/pokemon/:index/edit', (req, res) => {
	res.render('edit.ejs', {
		pokemon: Pokemon[req.params.index],
		index: req.params.index
	})
});

// Post
app.post('/pokemon', (req, res) => {
	Pokemon.push(req.body);
	res.redirect('/pokemon')
})

// Delete
app.delete('/pokemon/:index', (req, res) => {
	Pokemon.splice(req.params.index, 1);
	res.redirect('/pokemon');
})

// Update
app.put('/pokemon/:index', (req, res) => {
	Pokemon[req.params.index] = req.body, 
	res.redirect('/pokemon')
})

app.listen(3000, () =>{
	console.log('my server is up and running');
})