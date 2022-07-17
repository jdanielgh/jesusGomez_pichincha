import { Logger } from "../../../infraestructure/models/Logger";
import { OrganizationDTO } from "../../../infraestructure/models/OrganizationDTO";
import { IdOrganization } from "../domain/idOrganization";
import { UpdateOrganizationUseCase } from "../ports/input/OrganizationUseCases";
import { OrganizationRepository } from "../ports/output/OrganizationRepository";

export class UpdateOrganizationService implements UpdateOrganizationUseCase {
    
    #logger: Logger;
    #organizationRepository: OrganizationRepository;

    constructor(dependecies: {logger: Logger, organizationRepository: OrganizationRepository}) {
        this.#logger = dependecies.logger;
        this.#organizationRepository = dependecies.organizationRepository
    }
    
    async execute(params: {organizationDTO: OrganizationDTO, key: number}): Promise<OrganizationDTO> {
       
        this.#logger.log('Executing UpdateOrganizationService');
        const idOrganization = new IdOrganization(params.key);
        
        const organizationDB = await this.#organizationRepository.get(idOrganization);
        if(!!organizationDB && organizationDB.length > 0 ) {
            const organization = params.organizationDTO.toDomain();
            const result = await this.#organizationRepository.update(idOrganization, organization);
            return params.organizationDTO;
        } else {
            throw TypeError(`Id of organization ${params.key} does not exist`);
        }
        
    }

}