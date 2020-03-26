
exports.up = function(knex) { //o qu eeu quero que seja feito...
 return 	knex.schema.createTable('ongs', function(table) {
		table.string('id').primary();
		table.string('nome').notNullable();
		table.string('email').notNullable();
		table.string('whatsapp').notNullable();
		table.string('cidade').notNullable();
		table.string('uf', 2).notNullable();
	});
  
};

exports.down = function(knex) { //se deu algum problema eu faço isso...
 return  knex.schema.dropTable('ongs');
};
