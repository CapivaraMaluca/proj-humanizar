const connection = require('../database/conection');

module.exports = {
    async create(request, response){
    // acessando corpo da requisição
    const {cpf ,
        nome,
        dataNascimento,
        email,
        especialidade,
        nomeSocial,
        horaDisponibilidade
    } = request.body;

    await connection('voluntario').insert({
        cpf ,
        nome,
        dataNascimento,
        email,
        especialidade,
        nomeSocial,
        horaDisponibilidade
    })
    //aqui serve pra retornar alguma coisa
    return response.json({})

    }
};