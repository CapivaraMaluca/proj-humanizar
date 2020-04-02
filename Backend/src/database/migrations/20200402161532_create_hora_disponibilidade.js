
exports.up = function(knex) {
  
    return knex.schema.createTable('hora_disponibilidade', function (table) {
        table.integer('id_hora_disponibilidade').primary();
        table.time('hora_inicial_disponibilidade').notNullable();
        table.time('hora_final_disponibilidade').notNullable();
        //
        table.integer('id_disponibilidade_fk').notNullable();
        table.foreign('id_disponibilidade_fk').references('id_disponibilidade').inTable('disponibilidade');
        })

};
exports.down = function(knex) {
   return knex.schema.dropTable('disponibilidade');
};
