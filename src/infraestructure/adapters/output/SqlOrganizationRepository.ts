import { DataSource } from "typeorm";
import { Organization } from "../../../organization/application/domain/Organization";
import { OrganizationRepository } from "../../../organization/application/ports/output/OrganizationRepository";
import { Logger } from "../../models/Logger";
import { OrganizationDBO } from "../../typeOrmData/entity/OrganizationDBO";

export class SqlOrganizationRepository implements OrganizationRepository {

    #logger: Logger;
    #dataSource: DataSource;

    constructor(dependencies: {logger: Logger, dataSource: DataSource}) {
        this.#logger = dependencies.logger;
        this.#dataSource = dependencies.dataSource;
    }    

    async store(domain: Organization): Promise<Organization> {
        this.#logger.log('Executing SqlOrganizationRepository');
        this.#dataSource;

        const organizationRepository = this.#dataSource.getRepository(OrganizationDBO);
        const organizationData = new OrganizationDBO(1, 'Test', 1);
        await organizationRepository.save(organizationData);
        console.log(`Created organization with id ${organizationData.getIdOrganization}`);
        return domain;
    };

    get(): Promise<Organization[]> {
        throw new Error("Method not implemented.");
    };
    delete(key: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    };

    update(key: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    };

}