import express, { response } from 'express';
//Usando typescript as bibliotecas necessitam vir com as definições de tipo. Por isso é necessario instalar a definição de tipos: npm i @types/express.
import path from 'path';
import routes from './routes';
import cors from 'cors';
import { errors } from 'celebrate';
//cria a aplicação
const app = express();

//cors: o cors define na api quais endereçõs externos terão acesso.
app.use(cors());

app.use(express.json());
//Diz ao express que esta sendo usando json. é necessario.
app.use(routes);
//Diz ao express para usar o arquivo de rotas desacoplado. é necessario.

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

//lida como o back end ira retornar os erros ao front-end
app.use(errors());

app.listen(3333);
//porta onde será ouvido


