var express = require('express');
var sessionstore = require('sessionstore');
var app = express();


app.enable('trust proxy');
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({
secret: 'Super Secret Password',
proxy: true,
key: 'session.sid',
cookie: {secure: true},

//NEVER use in-memory store for production!
store: sessionstore.createSessionStore()

}));

app.get('/', function(req, res){
  res.send('This is a Node.js app running on port 3000, with NginX as a SSL proxy.');
 
});

app.listen(3000);



