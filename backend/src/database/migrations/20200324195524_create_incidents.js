
exports.up = function(knex) {
	return 	knex.schema.createTable('incidents', function(table) {
		table.increments(); //primary key com incremento
		table.string('title').notNullable();
		table.string('description').notNullable();
		table.decimal('value').notNullable();
		
		table.string('ong_id').notNullable(); //relacionamento bd

		table.foreign('ong_id').references('id').inTable('ongs');
});

};

exports.down = function(knex) { //se deu algum problema eu faço isso...
 return  knex.schema.dropTable('incidents');
};
