// arquivo com conexções não previstas no connection.ts
import path from 'path';


//utilizando module.exports pois o knex nao suporta a versão do typescript exports default
module.exports = {
    client: 'sqlite3',//informa o cliente do banco
    connection: {//especifica a conexão com o banco.
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
    },
    useNullAsDefault:true
};



