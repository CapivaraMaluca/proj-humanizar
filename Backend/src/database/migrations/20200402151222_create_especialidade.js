
exports.up = function(knex) {

    return knex.schema.createTable('especialidade', function (table) {
        table.integer('id_especialidade').primary();
        table.varchar('especialidade').notNullable();
        table.time('hora_Disponibilidade_inicia').notNullable();
        table.time('hora_Disponibilidade_final').notNullable();
        table.varchar('dias_disponibilidade').notNullable();
        
        table.integer('voluntario_cpf_voluntario').notNullable();
        //chave estrangeira
        table.foreign('voluntario_cpf_voluntario').references('cpf').inTable('voluntario');
        })
};
exports.down = function(knex) {
    return knex.schema.dropTable('especialidade');
};
