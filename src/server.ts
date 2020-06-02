import express, { response } from 'express';
//Usando typescript as bibliotecas necessitam vir com as definições de tipo. Por isso é necessario instalar a definição de tipos: npm i @types/express.

const app = express();
//cria a aplicação


app.get('/users', (req, res) => {
    //req: Obtem os dados vindo do front
    //res: Manda novamente para o front a resposta.
    console.log("Listando usuarios");
    //função que cria uma rota pelo express: 1 argumento é a rota, 2 é a função a executar.

    //res.send('Hello World');
    //Manda a mensagem para o browser em forma de texto.
    res.json([
        'Matheus',
        'Lucas',
        'Marcos',
        'João'
    ]);
    //Retorna um JSON para o browser contendo uma lista de usuarios
});

app.listen(3333);
//porta onde será ouvido


