import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config/config';
import routeAPI from './api/v1/routes/index';
//Declarar la variable app asignandole a express
const app = express();

//JJRO: Establece al conexion a la BD
import {mongoose} from './config/database.config';
//Settings
app.set('port', config.PORT);
//Middlewares generales
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//routes
const api = config.API_URL;
app.get(`${api}`, (req,res)=>{
    res.send(
        `<h1>RESTful running in root</h1> <p> eCommerce: <b>${api}/api-docs</b> for more information.</p>`
    );
})
app.get('/JJRO', (req,res)=>{
    res.send(
        `<h1>RESTful running in DrFIC</h1> <p> eCommerce: <b>${api}/api-docs</b> for more information.</p>`
    );
})

routeAPI(app);

export default app;