const express = require('express')
const routes = express.Router()
const connection = require('./database/conection');

const sessionAdmController = require('./controllers/sessionAdmController');
const cadastroVoluntarioController = require('./controllers/cadastroVoluntarioController');
const cadastroAuxiliarController = require('./controllers/cadastroAuxiliarController');

//cadastro
routes.post('/cadastroVoluntarioController', cadastroVoluntarioController.create);

routes.post('/cadastroAuxiliarController', cadastroAuxiliarController.create);
//post pq esta criando uma sessão um login
routes.post('/sessionAdmController', sessionAdmController.create);

routes.get('/login',(request, response) =>
{
    return response.json({
        usuario: 'teste1',
        senha: 'senhaas'
    })
})



module.exports = routes;