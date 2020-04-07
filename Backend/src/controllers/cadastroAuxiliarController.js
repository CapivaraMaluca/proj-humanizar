const connection = require('../database/conection');
module.exports = {
    async create(request, response){
    // acessando corpo da requisição
    const {cpfAuxiliar ,
        nome,
        dataNascimento,
        sexo,
        email,
        senha
    } = request.body;
    await connection('auxiliar').insert({
        cpfAuxiliar ,
        nome,
        dataNascimento,
        sexo,
        email,
        senha
    })
    //aqui serve pra retornar alguma coisa
    return response.json({})

    }
};