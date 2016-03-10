//require
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.urlencoded());
require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

app.get('/', function(req,res){
	res.render('.client/index');
})

app.listen(8000, function(){
	console.log('on 8000');
})