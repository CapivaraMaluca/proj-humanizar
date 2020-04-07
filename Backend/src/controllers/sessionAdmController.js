const connection = require('../database/conection');

module.exports = {
    async create(request, response) {
        //campos preenchidos na hora do login
      const { nome, senha } = request.body;
  
      const adm = await connection('adm')
        .where('nome', nome)
        .where('senha', senha)
        .select('id')
        .first();
  
      if (!adm) {
        return response.status(400).json({ error: 'Adm não encontrado' });
      }
  
      return response.json(adm);
    }
  }
  