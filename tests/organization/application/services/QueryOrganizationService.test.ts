import { OrganizationDTO } from "../../../../src/infraestructure/models/OrganizationDTO";
import { QueryOrganizationUseCase } from "../../../../src/organization/application/ports/input/OrganizationUseCases";
import { QueryOrganizationService } from "../../../../src/organization/application/services/QueryOrganizationService";
import { MockOrganizationRepository } from "../../../mocks/adapters/OrganizationRepository.mock";
import { organizationMock } from "../../../mocks/domain/Organization.mock";
import { MockLogger } from "../../../mocks/services/Logger.mock"

describe('QueryOrganizationService', () => {
    let mockLogger: MockLogger;
    let mockOrganizationRepository: MockOrganizationRepository;
    let queryOrganizationUseCase: QueryOrganizationUseCase;

    beforeEach( () => {
        mockLogger = new MockLogger();
        mockOrganizationRepository = new MockOrganizationRepository();
        queryOrganizationUseCase = new QueryOrganizationService({logger: mockLogger, organizationRepository: mockOrganizationRepository});        
    });

    test('When the queryOrganizationUseCase.execute is called, should be call a get method in a repository and return el value queried', async () => {
        const organization = Object.create(organizationMock);
        const spyOnLogger = jest.spyOn(mockLogger, 'log');
        const spyOnRepositoryGet = jest.spyOn(mockOrganizationRepository, 'get').mockImplementation(() => Promise.resolve([organization]));

        const result = await queryOrganizationUseCase.execute(undefined);

        expect(spyOnLogger).toHaveBeenCalledWith('Executing QueryOrganizationService');
        expect(spyOnRepositoryGet).toHaveBeenCalled();
        expect(result).toEqual([OrganizationDTO.fromDomain(organization)]);
    })
})
