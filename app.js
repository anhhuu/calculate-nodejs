const path = require('path');
const express = require('express');

const exphbs = require('express-handlebars');

const app = express();

const port = process.env.PORT || 3000;

const calculationRouter = require('./routes/calculation');
const siteRouter = require('./routes/site');

//app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


app.engine('hbs', exphbs({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', siteRouter);
app.use('/calc', calculationRouter);

app.use('/', function(req, res, next) {
    res.render('home');
})

app.listen(port, () => {
    console.info('calculator is listening at http://localhost:${port}');
})