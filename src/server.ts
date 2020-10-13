import express from 'express';
import './database/connection';
import routes from './routes';
import { join } from 'path';

const app = express();
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));

app.listen(3333);
