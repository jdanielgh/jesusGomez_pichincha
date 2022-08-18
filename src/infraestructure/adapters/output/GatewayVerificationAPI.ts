import { Axios } from "axios";
import { GatewayVerification } from "../../../repository/application/ports/output/GatewayVerification";
import { VerificationType } from "../../../shared/types/repository.type";
import { Logger } from "../../models/Logger";

export class GatewayVerificationAPI implements GatewayVerification {

    #axios: Axios;
    #logger: Logger;

    constructor(dependencies: {axios: Axios, logger: Logger}) {
        this.#axios = dependencies.axios;
        this.#logger = dependencies.logger;
    }

    async getRepositoryValidation(): Promise<VerificationType> {
        this.#logger.log('Executing getRepositoryValidation');
        const url = process.env.URL_VALIDATION_API || 'localhost:4000';
        const { data } = await this.#axios.get( `${url}/validation`);
        console.log(data);
        return data;
    }
}
