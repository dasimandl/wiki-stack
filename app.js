const morgan = require('morgan');
const bodyparser = require('body-parser');
const express = require('express');
const app = express();
const routes = require('./routes');
const nunjucks = require('nunjucks');
const env = nunjucks.configure('views', {noCache: true});
const models = require('./models');
// const io = require('socket.io');
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(express.static('/public'));
app.set('views engine', 'html');
app.engine('html', nunjucks.render);
// app.engine(‘html’, require(‘ejs’).renderFile);
// app.set('view engine', 'html');
// app.use('/', routes);

app.use(routes);


const port = 3000;
models.db.sync({force: true}).then(()=>{
    app.listen(port, ()=>console.log(`http://localhost:${port} Listening on ${port}`))
});
