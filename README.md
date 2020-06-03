# nlw-api-node
API para o projeto de pontos de reciclagem

API Restfull responsavel pelas:

    -Regras de Negócio
    -Conexão com anco de dados
    -Conexão com serviços externos
    -Autenticação e autorização de usuarios
    -Criptografia e Segurança.

Comandos Executados.
npm init -y: para iniciar projeto.
npm i express: Micro srviço para lidar com rotas da aplicação.
npm i typescript: instalar o typescript.
npm i ts-node: binario para executar o typescript.
npx tsc--init: Inicia arquivo de configuração do typescript.
npm i ts-node-dev -D: Automatizar o servidor para atualizar ao acontecer mudanças.


//------------Rotas e Recursos-------------//

//Rota: Endereço da requisição
//Recurso: Entidade de destino no sistema

/** Tipos
 * GET: Buscar informação no back-end
 * POST: Criar informação no back-end
 * PUT: Atualizar informação no back-end
 * DELETE: Deletar informação no back-end
 */
//-----------------------------------------//

//-----------Tipos de Parâmetros-----------//
/**
 * Request Param: Parâmetro que vem junto com a rota e obrigatorio. ex-> http://localhost:3333/users/6
 * Query Param: Parâmetro que vem junto com a rota e geralmente opcionais para filtros, paginação. ex-> http://localhost:3333/users?search=l
 * Request Body: Parâmetros para criação e atualização de informações no back-end. A info vem na body da requisição
 */

 //** Exemplos de rotas  **//
<!-- 
 const users = [
    'Matheus',
    'Lucas',
    'Marcos',
    'João'
];

app.get('/users', (req, res) => {
    //req: Obtem os dados vindo do front
    //res: Manda novamente para o front a resposta.
    //função que cria uma rota pelo express: 1 argumento é a rota, 2 é a função a executar.
    const search = String(req.query.search);//forma de pegar os query param.
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
    //res.send('Hello World');
    //Manda a mensagem para o browser em forma de texto.
    return res.json(filteredUsers);
    //Retorna um JSON para o browser contendo uma lista de usuarios
});


app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id);//forma de pegar o request param
    return res.json(users[id]);
});

app.post('/users', (req, res) => {
    const user = req.body;
    console.log(user);
    return res.json(user);
    //importante ter o return para finalizar a execução no response.
}); -->

//---------------//