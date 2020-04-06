const express = require('express')
const routes = express.Router()
const connection = require('./database/conection');

const loginController = require('./controllers/loginController');
const cadastroController = require('./controllers/cadastroController');

//cadastro
routes.post('/cadastroController', cadastroController.create);

routes.get('/login',(request, response) =>
{
    return response.json({
        usuario: 'teste1',
        senha: 'senhaas'
    })
})



module.exports = routes;