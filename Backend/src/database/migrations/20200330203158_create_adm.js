
exports.up = function(knex) {
    return knex.schema.createTable('adm',function(table){
        table.increments();//chave primaria autoincrement
        table.string('nome').notNullable();
        table.string('senha').notNullable();
    });
    
};

exports.down = function(knex) {
  return knex.schema.dropTable('adm');
};
