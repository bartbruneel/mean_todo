'use strict'

var express=require('express');

var app=express();

app.listen(3000, function() {

	app.use('/',express.static('public/angular-basics'));
	console.log(
		"The server is running on port 3000!"
		)
})