import axios from "axios";
import MockAdapter  from 'axios-mock-adapter'
import { GatewayVerificationAPI } from "../../../../src/infraestructure/adapters/output/GatewayVerificationAPI";
import { Logger } from "../../../../src/infraestructure/models/Logger";
import { MockLogger } from "../../../mocks/services/Logger.mock";

describe('GatewayVerificationAPI', () => {
    let gatewayVerificationAPI: GatewayVerificationAPI;
    let mockAxios: MockAdapter;
    let mockLogger: Logger;
    beforeEach(() => {
        mockAxios = new MockAdapter(axios);
        mockLogger = new MockLogger();
        gatewayVerificationAPI = new GatewayVerificationAPI({axios, logger: mockLogger});
    });

    test('When the method getRepositoryValidation is called, should return a answer API and show a log', async () => {
        const dataAnswer = {
            "repositories": [
                {
                    "id": 1,
                    "state": 604
                }]
        };
        const spyLogger = jest.spyOn(mockLogger, 'log');
        mockAxios.onGet('localhost:4000/validation').reply(200, dataAnswer);

        const result = await gatewayVerificationAPI.getRepositoryValidation();
        console.log(result);
        
        expect(spyLogger).toHaveBeenCalled();
        expect(result).toEqual(dataAnswer);
    });

})
