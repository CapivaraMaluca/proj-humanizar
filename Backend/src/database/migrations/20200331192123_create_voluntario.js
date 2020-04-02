
exports.up = function(knex) {
  return knex.schema.createTable('voluntario', function (table) {
      table.integer('cpf').primary();
      table.varchar('nome').notNullable();
      table.date('dataNascimento').notNullable();
      table.varchar('email').notNullable();
      table.varchar('nomeSocial').notNullable();
      table.varchar('especialidade').notNullable();
      table.integer('horaDisponibilidade').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('voluntario');
};
