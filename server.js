var express = require('express')
var app = express()
var port = process.env.PORT || 3000;

process.env.PWD = process.cwd();

app.set('views', path.join(process.env.PWD, 'public'));

app.use(express.static(path.join(process.env.PWD, 'public')));

app.listen(port, function(){
  console.log('App is listening on port: ' + port)
})
