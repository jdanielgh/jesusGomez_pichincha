import { Logger } from "../../../../src/infraestructure/models/Logger";
import { OrganizationDTO } from "../../../../src/infraestructure/models/OrganizationDTO";
import { Organization } from "../../../../src/organization/application/domain/Organization";
import { CreateOrganizationUseCase } from "../../../../src/organization/application/ports/input/OrganizationUseCases";
import { CreateOrganizationService } from "../../../../src/organization/application/services/CreateOrganizationService";
import { MockOrganizationRepository } from "../../../mocks/adapters/OrganizationRepository.mock";
import { MockLogger } from "../../../mocks/services/Logger.mock";

describe('CreateOrganizationService', () => {

    let mockOrganizationRepository: MockOrganizationRepository;
    let createOrganizationUseCase: CreateOrganizationUseCase;
    let mockLogger: Logger;

    beforeEach(() => {
        jest.clearAllMocks();
        mockOrganizationRepository = new MockOrganizationRepository();
        mockLogger = new MockLogger();
        createOrganizationUseCase = new CreateOrganizationService({logger: mockLogger, organizationRepository: mockOrganizationRepository});
    });

    test('When the parameter OrganizationDTO is valid, should be call the store method in a repository and return the value saved', async () => {
        const organizationDTOMock: OrganizationDTO = new OrganizationDTO(1, 'Test', 1);
        const organizationMock: Organization = organizationDTOMock.toDomain();
        const spyOnRepository = jest.spyOn(mockOrganizationRepository, 'store').mockImplementation(() => Promise.resolve(organizationMock));
        const spyOnLogger = jest.spyOn(mockLogger, 'log');

        const result = await createOrganizationUseCase.execute(organizationDTOMock);

        expect(spyOnLogger).toHaveBeenCalledWith('Executing CreateOrganizationService');
        expect(spyOnRepository).toHaveBeenCalledWith(organizationMock);
        expect(result).toEqual(organizationDTOMock);

    })
});
