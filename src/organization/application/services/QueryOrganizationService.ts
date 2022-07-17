import { Logger } from "../../../infraestructure/models/Logger";
import { OrganizationDTO } from "../../../infraestructure/models/OrganizationDTO";
import { Organization } from "../domain/Organization";
import { QueryOrganizationUseCase } from "../ports/input/OrganizationUseCases";
import { OrganizationRepository } from "../ports/output/OrganizationRepository";

export class QueryOrganizationService implements QueryOrganizationUseCase {

    #logger: Logger;
    #organizationRepository: OrganizationRepository;
    
    constructor(dependencies: {logger: Logger, organizationRepository: OrganizationRepository}) {
        this.#logger = dependencies.logger;
        this.#organizationRepository = dependencies.organizationRepository;
    }

    async execute(input: number | undefined): Promise<OrganizationDTO[]> {
        this.#logger.log('Executing QueryOrganizationService');
        const organization = await this.#organizationRepository.get();
        return organization.map((organization: Organization) => {
            return OrganizationDTO.fromDomain(organization)})
    }

}