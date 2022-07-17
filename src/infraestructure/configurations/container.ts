import { CreateOrganizationService } from "../../organization/application/services/CreateOrganizationService";
import { SqlOrganizationRepository } from "../adapters/output/SqlOrganizationRepository";
import { ConsoleLogger } from "../services/console-logger";
import { AppDataSource } from "./datasource";
import * as awilix from 'awilix';
import { QueryOrganizationService } from "../../organization/application/services/QueryOrganizationService";
import { DeleteOrganizationService } from "../../organization/application/services/DeleteOrganizationService";

const container = awilix.createContainer();

container.register({
    logger: awilix.asClass(ConsoleLogger),
    dataSource: awilix.asValue(AppDataSource),
    organizationRepository: awilix.asClass(SqlOrganizationRepository),
    createOrganizationUseCase: awilix.asClass(CreateOrganizationService),
    queryOrganizationUseCase: awilix.asClass(QueryOrganizationService),
    deleteOrganizationUseCase: awilix.asClass(DeleteOrganizationService)
});

export default container;
