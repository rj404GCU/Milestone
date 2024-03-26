import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import productsRouter from './products/products.routes';
import logger from './middleware/logger.middleware';
import cors from 'cors';
import helmet from 'helmet';

//use enviroment variables and tell it where to find env file
dotenv.config({ path: "../src/.env"});

const app = express();
const port = process.env.PORT;

//npm install cors
//enables allcors request
app.use(cors());

//Parse JSON bodies
app.use(express.json());

//Parse URL encoded bodies
app.use(express.urlencoded({ extended: true}));

//npm install helmet
//adding set of security middleware
app.use(helmet());

console.log('MY_SQL_DB_HOST : ', process.env.MY_SQL_DB_HOST);

// Access and print environment variables
//console.log('MY_SQL_DB_DATABASE:', process.env.MY_SQL_DB_DATABASE);
//console.log('MY_SQL_DB_USER:', process.env.MY_SQL_DB_USER);
//console.log('MY_SQL_DB_PASSWORD:', process.env.MY_SQL_DB_PASSWORD);

if(process.env.NODE_ENV == 'development'){
    //add logger middleware
    app.use(logger);
    console.log(process.env.GREETING + 'in dev mode')
}

//Application routes
//root route
app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Welcome to the Store API</h1>')
});

//routes are passed via an array to the express application
//Turns in Express application by registering routers with app.use
app.use('/', [productsRouter]);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});


