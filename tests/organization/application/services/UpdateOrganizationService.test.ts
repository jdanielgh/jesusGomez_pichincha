import { OrganizationDTO } from "../../../../src/infraestructure/models/OrganizationDTO";
import { UpdateOrganizationService } from "../../../../src/organization/application/services/UpdateOrganizationService";
import { MockOrganizationRepository } from "../../../mocks/adapters/OrganizationRepository.mock";
import { organizationMock } from "../../../mocks/domain/Organization.mock";
import { MockLogger } from "../../../mocks/services/Logger.mock"

describe('UpdateOrganizationService', () => {
    let mockLogger: MockLogger;
    let mockOrganizationRepository: MockOrganizationRepository;
    let updateOrganizationUseCase: UpdateOrganizationService;
    
    beforeEach( () => {
        mockLogger = new MockLogger();
        mockOrganizationRepository = new MockOrganizationRepository();
        updateOrganizationUseCase = new UpdateOrganizationService({logger: mockLogger, organizationRepository: mockOrganizationRepository});
    });

    test('When the method get in repository return a value, should be call the update method in a repository and return the value updated', async () => {
        const key = 1;
        const organization = Object.create(organizationMock);
        const organizationDTO = OrganizationDTO.fromDomain(organization);
        const spyLogger = jest.spyOn(mockLogger, 'log');
        const spyOnRepositoryGet = jest.spyOn(mockOrganizationRepository, 'get').mockImplementation( () => Promise.resolve([organization]));
        const spyOnRepositoryUpdate = jest.spyOn(mockOrganizationRepository, 'update').mockImplementation( () => Promise.resolve(organization)) 

        const result = await updateOrganizationUseCase.execute({key, organizationDTO});

        expect(spyLogger).toHaveBeenCalled();
        expect(spyOnRepositoryGet).toHaveBeenCalled();
        expect(spyOnRepositoryUpdate).toHaveBeenCalled();
        expect(result).toEqual(organizationDTO);
    })

    test('When the method get in repository does not return a value, should not be call the update method and should throw a typeError', async () => {
        const key = 1;
        const organization = Object.create(organizationMock);
        const organizationDTO = OrganizationDTO.fromDomain(organization);
        const spyLogger = jest.spyOn(mockLogger, 'log');
        const spyOnRepositoryGet = jest.spyOn(mockOrganizationRepository, 'get').mockImplementation( () => Promise.resolve([]));
        const spyOnRepositoryUpdate = jest.spyOn(mockOrganizationRepository, 'update');

        try {
            await updateOrganizationUseCase.execute({key, organizationDTO});
        } catch (error: any) {
            expect(spyLogger).toHaveBeenCalled();
            expect(spyOnRepositoryGet).toHaveBeenCalled();
            expect(spyOnRepositoryUpdate).not.toHaveBeenCalled();
            expect(error.message).toBe(`Id of organization ${key} does not exist`);
        }
    })
})
