exports.up = function(knex) {
    return knex.schema.createTable('endereco', function (table) {
        table.integer('cep').primary();
        table.varchar('bairro').notNullable();
        table.varchar('rua').notNullable();
        table.varchar('num Residencia').notNullable();
        
        table.integer('voluntario_cpf_voluntario').notNullable();
        //chave estrangeira
        table.foreign('voluntario_cpf_voluntario').references('cpf').inTable('voluntario');
    })
};
exports.down = function(knex) {
    return knex.schema.dropTable('endereco');
    
};
