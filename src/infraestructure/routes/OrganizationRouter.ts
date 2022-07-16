import express from 'express';
import { CreateOrganizationUseCase } from '../../organization/application/ports/input/OrganizationUseCases';
import container from '../configurations/container';
import { OrganizationDTO } from '../models/OrganizationDTO';

export default function OrganizationRouter() {
    const Router = express.Router();
    const createOrganization = (container.resolve('createOrganizationUseCase') as CreateOrganizationUseCase);
    Router.post('/', async (req: express.Request, res: express.Response) => {
        try {
            const organizationDTO = new OrganizationDTO(req.body.id, req.body.name, req.body.status);
            const organization = await createOrganization.execute(organizationDTO);
            res.status(201).json(organization);
        } catch (error: any) {
            console.log(error.message);
            if (error instanceof TypeError) {
                res.status(400).send({message: error.message}); 
            } else {
                res.status(500).send({message: 'Error saving data'});
            }
        }
        
    });
    return Router;
};


