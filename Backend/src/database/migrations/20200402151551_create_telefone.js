
exports.up = function(knex) {
    return knex.schema.createTable('telefone', function (table) {
        table.integer('id_telefone').primary();
        table.integer('telefone_Residencial');
        table.integer('telefone_Celular').notNullable();
        //
        table.integer('cpf_Auxiliar').notNullable();
        table.foreign('cpf_Auxiliar').references('cpfAuxiliar').inTable('auxiliar');
        //
        table.integer('voluntario_cpf_voluntario').notNullable();
        table.foreign('voluntario_cpf_voluntario').references('cpf').inTable('voluntario');
        })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('telefone');
};

