import { CreateOrganizationService } from "../../organization/application/services/CreateOrganizationService";
import { SqlOrganizationRepository } from "../adapters/output/SqlOrganizationRepository";
import { ConsoleLogger } from "../services/console-logger";
import { AppDataSource } from "./datasource";
import * as awilix from 'awilix';
import { QueryOrganizationService } from "../../organization/application/services/QueryOrganizationService";
import { DeleteOrganizationService } from "../../organization/application/services/DeleteOrganizationService";
import { UpdateOrganizationService } from "../../organization/application/services/UpdateOrganizationService";
import { GatewayVerificationAPI } from "../adapters/output/GatewayVerificationAPI";
import axios from "axios";
import { SqlTribeRepository } from "../adapters/output/SqlTribeRepository";
import { SqlRepositoryRepository } from "../adapters/output/SqlRepositoryRepository";
import { GetAllRepositoriesByTribeService } from "../../tribe/application/services/GetAllRepositoriesByTribeService";

const container = awilix.createContainer();

container.register({
    logger: awilix.asClass(ConsoleLogger),
    dataSource: awilix.asValue(AppDataSource),
    axios: awilix.asValue(axios),
    organizationRepository: awilix.asClass(SqlOrganizationRepository),
    tribeRepository: awilix.asClass(SqlTribeRepository),
    repositoryRepository: awilix.asClass(SqlRepositoryRepository),
    gatewayVerification: awilix.asClass(GatewayVerificationAPI),
    createOrganizationUseCase: awilix.asClass(CreateOrganizationService),
    queryOrganizationUseCase: awilix.asClass(QueryOrganizationService),
    deleteOrganizationUseCase: awilix.asClass(DeleteOrganizationService),
    updateOrganizationUseCase: awilix.asClass(UpdateOrganizationService),
    getAllRepositoriesByTribeUseCase: awilix.asClass(GetAllRepositoriesByTribeService)
});

export default container;
