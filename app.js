const morgan = require('morgan');
const bodyparser = require('body-parser');
const express = require('express');
const app = express();
const routes = require('./routes');
const nunjucks = require('nunjucks');
// const io = require('socket.io');
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(express.static('/public'));
// app.set(‘views’, __dirname + ‘/public/views’);
// app.engine(‘html’, require(‘ejs’).renderFile);
// app.set('view engine', 'html');
// app.use('/', routes);


app.use(function(req, res){
    res.render('index.html')
})

const port = 3000;
app.listen(port, function(){console.log('Listening on',port)});

