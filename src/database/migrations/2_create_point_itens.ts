import Knex from 'knex';

export async function up(knex: Knex) {//Realizar alterações no banco
    return knex.schema.createTable('point_itens', table => {
        table.increments('id').primary();
        table.string('point_id').notNullable().references('id').inTable('points');
        table.string('iten_id').notNullable().references('id').inTable('itens');
    });
}


export async function down(knex:Knex) {//corrigir um erro, voltar atrás.
    return knex.schema.dropTable('point_itens')
}