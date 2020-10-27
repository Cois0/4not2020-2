var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const db = require('./config/database')
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dbName = process.env.DB_NAME

db(`mongodb+srv://coiso:Nuk3m3s3npa1@cluster0.qx3sz.gcp.mongodb.net/lavanderia?retryWrites=true&w=majority`)

var app = express();

//Habilita a chamada do back-end a partir de um servidor distinto

const cors = require('cors')
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const cliente = require('./routes/cliente')
app.use('/cliente', cliente)

const lavador = require('./routes/lavador')
app.use('/lavador', lavador)

const entregador = require('./routes/entregador')
app.use('/entregador', entregador)

const pedido = require('./routes/pedido')
app.use('/pedido', pedido)

const maquina_lavar = require('./routes/maquina_lavar')
app.use('/maquina_lavar', maquina_lavar)

const prancha_passar = require('./routes/prancha_passar')
app.use('/prancha_passar', prancha_passar)


module.exports = app;
