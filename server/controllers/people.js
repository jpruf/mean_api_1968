var mongoose = require('mongoose');
var People = mongoose.model('People');

module.exports = {
	show_all: function(req,res){
		People.find({}, function(err,people){
		if(err){
			console.log('show_all error');
		}
		else{
			res.json(people)
		}
		})	
	},
	add: function(req,res){
		var new_person = new People({name: req.params.name})
		new_person.save(function(err, people){
			if (err){
				console.log('add error')
			}
			else {
				console.log('added person');
				res.json(people)
				// res.redirect('/show');
			}
		})
	},
	remove: function(req,res){
		console.log(req.params.name)
		People.remove({name: req.params.name}, function(err,people){
			res.redirect('/show');
		})
	},
	show: function(req,res){
		console.log(req.params.name);
		People.find({name: req.params.name}, function(err,people){
			if(err){
			console.log('show_all error');
		}
		else{
			res.redirect('/show');
		}
		})
	}
}