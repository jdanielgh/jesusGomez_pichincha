import { AppDataSource } from "./infraestructure/configurations/datasource";
import express  from 'express';
import organizationRoute from './infraestructure/routes/OrganizationRouter';
import { scopePerRequest } from "awilix-express";
import container from "./infraestructure/configurations/container";

console.log(process.env.DATABASE_URL);

const app = express();
app.use(express.json());
app.use(scopePerRequest(container))

// routes
app.use('/organization', organizationRoute());


AppDataSource.initialize()
    .then(() => {
        app.listen(3000, () => {
            console.log("El servidor está inicializado en el puerto 3000");
        });
        // const organizationRepository = AppDataSource.getRepository(OrganizationDBO);
        // const organizationData = new OrganizationDBO(1, 'Test', 1);
        // await organizationRepository.save(organizationData);
        // console.log(`Created organization with id ${organizationData.getIdOrganization}`);
        

        // const valueforFind = await organizationRepository.find({where: { idOrganization: 1 }});
        // valueforFind.forEach( (or) => console.log(`Value found ${or.idOrganization} ${or.getName}`));
        
    })
    .catch( (error: any) => {
        console.log(error);
    })
