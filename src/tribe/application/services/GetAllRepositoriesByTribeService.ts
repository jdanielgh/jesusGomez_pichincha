import { Logger } from "../../../infraestructure/models/Logger";
import { TribeRepositoryMetricDTO } from "../../../infraestructure/models/TribeRepositoryMetricDTO";
import { GatewayVerification } from "../../../repository/application/ports/output/GatewayVerification";
import { IdTribe } from "../domain/IdTribe";
import { GetAllRepositoriesByTribeUseCase } from "../ports/input/GetAllRepositoriesByTribeUseCase";
import { TribeRepository } from "../ports/output/TribeRepositoy";

export class GetAllRepositoriesByTribeService implements GetAllRepositoriesByTribeUseCase {

    #logger: Logger;
    #tribeRepository: TribeRepository;
    #gatewayVerification: GatewayVerification;

    constructor(dependencies: {logger: Logger, tribeRepository: TribeRepository, gatewayVerification: GatewayVerification}) {
        this.#logger = dependencies.logger;
        this.#tribeRepository = dependencies.tribeRepository;
        this.#gatewayVerification = dependencies.gatewayVerification;
    }
    async execute(id: number): Promise<TribeRepositoryMetricDTO[] | undefined> {
        this.#logger.log('Executing GetAllRepositoriesByTribeService');
        const idTribe = new IdTribe(id);
        const tupleTribeNameOrganization = await this.#tribeRepository.getAllRepositoriesByTribe(idTribe);
        const verifications = await this.#gatewayVerification.getRepositoryValidation();

        return TribeRepositoryMetricDTO.fromDomain(tupleTribeNameOrganization[0], tupleTribeNameOrganization[1], verifications);
    }


}