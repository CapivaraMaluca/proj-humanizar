
exports.up = function(knex) {
    return knex.schema.createTable('notificacao', function(table) {
        table.integer('idNotificacao').primary();
        table.text('descricao').notNullable();
        table.date('data').notNullable();
        table.varchar('projeto').notNullable();

        table.integer('adm_idAdm').notNullable();
        table.foreign('adm_idAdm').references('id').inTable('adm');

        table.integer('volutario_cpfVoluntario').notNullable();
        table.foreign('volutario_cpfVoluntario').references('cpf').inTable('volutario');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('notificacao');
};
