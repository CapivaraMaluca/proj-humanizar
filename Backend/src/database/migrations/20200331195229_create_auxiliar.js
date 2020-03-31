
exports.up = function(knex) {
  return knex.schema.createTable('auxiliar', function (table) {
      table.int('cpfAuxiliar').primary();
      table.varchar('nome').notNullable();
      table.date('dataNascimento').notNullable();
      table.varchar('sexo').notNullable();
      table.varchar('email').notNullable();
      table.int('senha').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('auxiliar');
};
