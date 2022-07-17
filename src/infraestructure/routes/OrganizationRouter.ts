import express from 'express';
import { CreateOrganizationUseCase, DeleteOrganizationUseCase, QueryOrganizationUseCase } from '../../organization/application/ports/input/OrganizationUseCases';
import container from '../configurations/container';
import { OrganizationDTO } from '../models/OrganizationDTO';

export default function OrganizationRouter(): express.Router {
    const Router = express.Router();
    const createOrganizationUseCase = (container.resolve('createOrganizationUseCase') as CreateOrganizationUseCase);
    const queryOrganizationUseCase = (container.resolve('queryOrganizationUseCase') as QueryOrganizationUseCase);
    const deleteOrganizationUseCase = (container.resolve('deleteOrganizationUseCase') as DeleteOrganizationUseCase);

    Router.post('/', async (req: express.Request, res: express.Response) => {
        try {
            const organizationDTO = new OrganizationDTO(req.body.id, req.body.name, req.body.status);
            const organization = await createOrganizationUseCase.execute(organizationDTO);
            res.status(201).json(organization);
        } catch (error: any) {
            if (error instanceof TypeError) {
                res.status(400).send({message: error.message}); 
            } else {
                res.status(500).send({message: 'Error saving data'});
            }
        }
        
    });

    Router.get('/', async (req: express.Request, res: express.Response) => {
        try {
            const organizations = await queryOrganizationUseCase.execute(undefined);
            if (!!organizations && organizations.length > 0) {
                res.status(200).json(organizations);
            } else {
                res.status(204).send('');
            }
        } catch (error: any) {
            if (error instanceof TypeError) {
                res.status(400).send({message: error.message}); 
            } else {
                res.status(500).send({message: 'Error querying data'});
            }
        }
    });

    Router.delete('/:id', async (req: express.Request, res: express.Response) => {
        try {
            const { id } = req.params;
            const result = await deleteOrganizationUseCase.execute(parseInt(id));
            res.status(200).json(result);
        } catch (error: any) {
            if (error instanceof TypeError) {
                res.status(400).send({message: error.message}); 
            } else {
                res.status(500).send({message: 'Error deleting data'});
            }
        }
    });

    return Router;
};


