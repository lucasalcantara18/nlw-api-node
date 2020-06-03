import Knex from 'knex';

export async function up(knex: Knex) {//Realizar alterações no banco
    return knex.schema.createTable('itens', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}


export async function down(knex:Knex) {//corrigir um erro, voltar atrás.
    return knex.schema.dropTable('itens')
}