
exports.up = function(knex) {
  
    return knex.schema.createTable('disponibilidade', function (table) {
        table.integer('id_disponibilidade').primary();
        table.varchar('dia_disponibilidade').notNullable();
        //
        table.integer('id_especialidade_fk').notNullable();
        table.foreign('id_especialidade_fk').references('id_especialidade').inTable('especialidade');
        })

};

exports.down = function(knex) {
   return knex.schema.dropTable('disponibilidade');
};
