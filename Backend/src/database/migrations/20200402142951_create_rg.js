
exports.up = function(knex) {
    return knex.schema.createTable('rg', function(table) {
        table.integer('rgVoluntario').primary();
        table.varchar('orgaoExp').notNullable();

        table.integer('auxiliar_cpfAulixiar').notNullable();
        table.foreign('auxiliar_cpfAulixiar').references('cpf').inTable('auxiliar')

        table.integer('volutario_cpfVoluntario').notNullable();
        table.foreign('volutario_cpfVoluntario').references('cpf').inTable('volutario');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('rg');
};
