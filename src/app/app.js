import express from 'express';
import morgan from 'morgan';
import config from 'config';
import indexRoutes from './routes/index';

const app = express();


//middlewares
app.use(morgan(config.get('logger')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Routes
app.use(indexRoutes);

export default app;
