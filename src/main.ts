import { AppDataSource } from "./infraestructure/configurations/datasource";
import express  from 'express';
import organizationRoute from './infraestructure/routes/OrganizationRouter';
import { scopePerRequest } from "awilix-express";
import container from "./infraestructure/configurations/container";
import dotenv from "dotenv"
import morgan from 'morgan';
import TribeRoute from "./infraestructure/routes/TribeRouter";

dotenv.config()

const app = express();
const PORT = process.env.PORT ? process.env.PORT : 3000;
app.use(express.json());
app.use(scopePerRequest(container))
app.use(morgan('combined'));

// routes
app.use('/organization', organizationRoute());
app.use('/tribe', TribeRoute());


AppDataSource.initialize()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch( (error: any) => {
        console.log(error);
    })
