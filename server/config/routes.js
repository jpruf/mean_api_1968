var mongoose = require('mongoose');
var people = require('../controllers/people.js');

module.exports = function(app){
	// app.get('/', function(req,res){

	// })
	app.get('/show', function(req,res){
		people.show_all(req,res);
	})
	app.get('/new/:name', function(req,res){
		people.add(req,res);
	})
	app.post('/remove/:name', function(req,res){
		people.remove(req,res);
	})
	app.get('/:name', function(req,res){
		people.show(req,res);
	})
}