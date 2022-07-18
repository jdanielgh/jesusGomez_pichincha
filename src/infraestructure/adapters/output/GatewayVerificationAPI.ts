import { Axios } from "axios";
import { Logger } from "../../models/Logger";

export class GatewayVerificationAPI {

    #axios: Axios;
    #logger: Logger;

    constructor(dependencies: {axios: Axios, logger: Logger}) {
        this.#axios = dependencies.axios;
        this.#logger = dependencies.logger;
    }

    async getRepositoryValidation(): Promise<any> {
        this.#logger.log('Executing getRepositoryValidation');
        const url = process.env.URL_VALIDATION_API || 'localhost:4000';
        const { data } = await this.#axios.get( `${url}/validation`);
        return data;
    }
}
