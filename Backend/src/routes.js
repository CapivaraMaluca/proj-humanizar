const express = require('express')
const routes = express.Router()
const connection = require('./database/conection');

const loginController = require('./controllers/loginController');
const cadastroController = require('./controllers/cadastroController');





module.exports = routes;