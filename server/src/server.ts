import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path'
import { errors } from 'celebrate'


const app = express();

app.use(cors());
// Por padrão o express não sabe que estamos utilizando-o para criar uma API REST
app.use(express.json()); // Reconhece formato JSON
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);