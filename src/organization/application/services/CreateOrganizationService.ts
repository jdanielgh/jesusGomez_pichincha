import { Logger } from "../../../infraestructure/models/Logger";
import { OrganizationDTO } from "../../../infraestructure/models/OrganizationDTO";
import { Organization } from "../domain/Organization";
import { CreateOrganizationUseCase } from "../ports/input/OrganizationUseCases";
import { OrganizationRepository } from "../ports/output/OrganizationRepository";

export class CreateOrganizationService implements CreateOrganizationUseCase {

    #organizationRepositoy: OrganizationRepository;
    #logger: Logger;

    constructor(dependencies: { organizationRepository: OrganizationRepository, logger: Logger }) { 
        this.#organizationRepositoy = dependencies.organizationRepository;
        this.#logger = dependencies.logger;
    }

    async execute(organizationDTO: OrganizationDTO): Promise<OrganizationDTO> {
        this.#logger.log('Executing CreateOrganizationService');
        const organizationDomain = organizationDTO.toDomain();   
        const organizationSaved = await this.#organizationRepositoy.store(organizationDomain);
        return OrganizationDTO.fromDomain(organizationSaved);
    }
 
}