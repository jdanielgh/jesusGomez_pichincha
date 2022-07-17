import { Logger } from "../../../infraestructure/models/Logger";
import { OrganizationDTO } from "../../../infraestructure/models/OrganizationDTO";
import { IdOrganization } from "../domain/idOrganization";
import { DeleteOrganizationUseCase } from "../ports/input/OrganizationUseCases";
import { OrganizationRepository } from "../ports/output/OrganizationRepository";

export class DeleteOrganizationService implements DeleteOrganizationUseCase {
    
    #logger: Logger;
    #OrganizationRepository: OrganizationRepository;

    constructor(dependencies: {logger: Logger, organizationRepository: OrganizationRepository}) {
        this.#logger = dependencies.logger;
        this.#OrganizationRepository = dependencies.organizationRepository;
    }

    async execute(key: number): Promise<OrganizationDTO> {
        this.#logger.log('Executing DeleteOrganizationService');
        const idOrganizacion = new IdOrganization(key);
        const organization = await this.#OrganizationRepository.get(idOrganizacion);
        if (!!organization && organization.length > 0 ) {
            const result = await this.#OrganizationRepository.delete(idOrganizacion);
            return OrganizationDTO.fromDomain(organization[0]);
        } else {
            throw TypeError(`Id of organization ${key} does not exist`);
        }
    }

}