
exports.up = function(knex) {
    return knex.schema.createTable('cadastro', function(table) {
        table.integer('idCadastro').primary();
        table.integer('hora').notNullable();
        table.varchar('dia').notNullable();
        table.integer('ano').notNullable();

        table.integer('auxiliar_cpfAuxiliar').notNullable();
        table.foreign('auxiliar_cpfAuxiliar').references('cpf').inTable('auxiliar');

        table.integer('volutario_cpfVoluntario').notNullable();
        table.foreign('volutario_cpfVoluntario').references('cpf').inTable('volutario');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cadastro');
};
