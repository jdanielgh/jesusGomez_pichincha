import { DataSource, Repository } from "typeorm";
import { IdOrganization } from "../../../organization/application/domain/idOrganization";
import { Organization } from "../../../organization/application/domain/Organization";
import { OrganizationRepository } from "../../../organization/application/ports/output/OrganizationRepository";
import { Logger } from "../../models/Logger";
import { OrganizationDBO } from "../../typeOrmData/entity/OrganizationDBO";

export class SqlOrganizationRepository implements OrganizationRepository {

    #logger: Logger;
    #dataSource: Repository<OrganizationDBO>;

    constructor(dependencies: {logger: Logger, dataSource: DataSource}) {
        this.#logger = dependencies.logger;
        this.#dataSource = dependencies.dataSource.getRepository(OrganizationDBO);;
    }    

    async store(organization: Organization): Promise<Organization> {
        this.#logger.log('Executing SqlOrganizationRepository');
        const organizationDBO = OrganizationDBO.fromDomain(organization)
        await this.#dataSource.save(organizationDBO);
        this.#logger.log(`Created organization with id ${organizationDBO.getIdOrganization}`);
        return organization;
    };

    async get(key?: IdOrganization): Promise<Organization[]> {
        this.#logger.log('Executing SqlOrganizationRepository');
        const organizationsDBO = !!key
            ? await this.#dataSource.findBy({idOrganization: key?.getValue})
            : await this.#dataSource.find();
        return organizationsDBO.map( (organization) => organization.toDomain());
    };

    async delete(key: IdOrganization): Promise<boolean> {
        this.#logger.log('Executing SqlOrganizationRepository');
        const result = await this.#dataSource.delete(key.getValue);
        return result.affected === 1;
    };

    async update(key: IdOrganization, organization: Organization): Promise<boolean> {
        this.#logger.log('Executing SqlOrganizationRepository');
        const organizationDBO = OrganizationDBO.fromDomain(organization);
        const result = await this.#dataSource.update(key.getValue, organizationDBO);
        return result.affected === 1;
    };

}