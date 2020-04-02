
exports.up = function(knex) {

    return knex.schema.createTable('especialidade', function (table) {
        table.integer('id_especialidade').primary();
        table.varchar('especialidade').notNullable();
        //
        table.integer('voluntario_cpf_voluntario').notNullable();
        table.foreign('voluntario_cpf_voluntario').references('cpf').inTable('voluntario');
        })
};
exports.down = function(knex) {
    return knex.schema.dropTable('especialidade');
};
