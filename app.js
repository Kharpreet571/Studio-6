var express = require('express');
var app = express();
 
//ejs template
app.set('view engine','ejs');
 
app.use('/public', express.static('public'));
 
app.get('/', function (req, res){
	res.render("home");
	})
 
app.get('/lakes', function (req, res){
	res.render('lakes', {title: 'New Zealand Lakes'});
}); 

app.get('/beaches', function (req, res){
	res.render('beaches', {title: 'New Zealand Beaches'});
});
 
app.listen(process.env.port||3000);
console.log('Running at Port 3000');

