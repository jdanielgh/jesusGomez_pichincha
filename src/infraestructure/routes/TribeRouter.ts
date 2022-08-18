import express from 'express';
import { RepositoryRepository } from '../../repository/application/ports/output/RepositoryRepository';
import { IdTribe } from '../../tribe/application/domain/IdTribe';
import { GetAllRepositoriesByTribeUseCase } from '../../tribe/application/ports/input/GetAllRepositoriesByTribeUseCase';
import { TribeRepository } from '../../tribe/application/ports/output/TribeRepositoy';
import container from '../configurations/container';

export default function TribeRoute(): express.Router {
    const Router = express.Router();
    const getAllRepositoriesByTribeUseCase = (container.resolve('getAllRepositoriesByTribeUseCase') as GetAllRepositoriesByTribeUseCase);


    Router.get('/:id', async (req: express.Request, res: express.Response) => {
        const { id } = req.params;
        console.log(id);
        
        const result = await getAllRepositoriesByTribeUseCase.execute(parseInt(id));
        res.json(result);
    });

    return Router;
}
