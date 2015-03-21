var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname));

var bodyParser = require('body-parser');
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// custom 404 page
app.use(function(req, res){
        res.type('text/plain');
        res.status(404);
        res.send('404 - Not Found');
});

// custom 500 page
app.use(function(err, req, res, next){
        console.error(err.stack);
        res.type('text/plain');
        res.status(500);
        res.send('500 - Server Error');
});


app.listen(app.get('port'), function(){
  console.log( 'Express started' +
    app.get('port') + '; with base directory'+__dirname+ 'press Ctrl-C to terminate.' );
});