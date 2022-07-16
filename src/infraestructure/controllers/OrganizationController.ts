import { CreateOrganizationUseCase } from "../../organization/application/ports/input/OrganizationUseCases";
import express from 'express';
import { Logger } from "../models/Logger";

export class OrganizationController {

    #logger: Logger;
    #createOrganizationUseCase: CreateOrganizationUseCase;
    test = ''

    constructor(createOrganizationUseCase: CreateOrganizationUseCase, logger: Logger) {  
        this.#logger = logger;
        this.#createOrganizationUseCase = createOrganizationUseCase;                
    }

    createOrganization(req: express.Request, res: express.Response): express.Response {
        console.log('Text');
        console.log(this.test);
        console.log(this.#createOrganizationUseCase);
        
        this.#logger.log('Executing creation on controller');
        this.#createOrganizationUseCase.execute(req.body);
        return res.send('');
    }
}
