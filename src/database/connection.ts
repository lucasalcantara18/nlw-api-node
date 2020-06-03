import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',//informa o cliente do banco
    connection: {//especifica a conexão com o banco.
        filename: path.resolve(__dirname, 'database.sqlite'),//__dirname retorna o caminho do doretorio database
    },
    useNullAsDefault:true
});

export default connection;//dessa forma a conexão com o banco esta completa.