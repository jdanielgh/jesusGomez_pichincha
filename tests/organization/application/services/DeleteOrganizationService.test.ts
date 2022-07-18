import { OrganizationDTO } from "../../../../src/infraestructure/models/OrganizationDTO";
import { IdOrganization } from "../../../../src/organization/application/domain/idOrganization";
import { Organization } from "../../../../src/organization/application/domain/Organization";
import { DeleteOrganizationUseCase } from "../../../../src/organization/application/ports/input/OrganizationUseCases";
import { DeleteOrganizationService } from "../../../../src/organization/application/services/DeleteOrganizationService";
import { MockOrganizationRepository } from "../../../mocks/adapters/OrganizationRepository.mock";
import { idOrganizationMock, organizationMock } from "../../../mocks/domain/Organization.mock";
import { MockLogger } from "../../../mocks/services/Logger.mock";

describe('DeleteOrganizationService', () => {
    let mockOrganizationRepository: MockOrganizationRepository;
    let mockLogger: MockLogger;
    let deleteOrganizationUsecase: DeleteOrganizationUseCase;

    beforeEach(() => {
        mockOrganizationRepository = new MockOrganizationRepository();
        mockLogger = new MockLogger();
        deleteOrganizationUsecase = new DeleteOrganizationService({logger: mockLogger, organizationRepository: mockOrganizationRepository});
    });

    test('When the parameter OrganizationDTO is valid, should be call the store method in a repository and return de value saved', async () => {
        const key: IdOrganization = Object.create(idOrganizationMock);
        const organization: Organization = Object.create(organizationMock);
        const spyLogger = jest.spyOn(mockLogger, 'log');
        const spyOnRepositoryGet = jest.spyOn(mockOrganizationRepository, 'get').mockImplementation(() => Promise.resolve([organization]));
        const spyOnRepositoryDelete = jest.spyOn(mockOrganizationRepository, 'delete').mockImplementation(() => Promise.resolve(true));

        const result = await deleteOrganizationUsecase.execute(key.getValue);

        expect(spyLogger).toHaveBeenCalledWith('Executing DeleteOrganizationService');
        expect(spyOnRepositoryGet).toHaveBeenCalled();
        expect(spyOnRepositoryDelete).toHaveBeenCalled();
        expect(result).toEqual(OrganizationDTO.fromDomain(organization));
    });

        test('When the method get in repository return a value, should be call the delete method in a repository and return the value deleted', async () => {
        const key: IdOrganization = Object.create(idOrganizationMock);
        const organization: Organization = Object.create(organizationMock);
        const spyLogger = jest.spyOn(mockLogger, 'log');
        const spyOnRepositoryGet = jest.spyOn(mockOrganizationRepository, 'get').mockImplementation(() => Promise.resolve([organization]));
        const spyOnRepositoryDelete = jest.spyOn(mockOrganizationRepository, 'delete').mockImplementation(() => Promise.resolve(true));

        const result = await deleteOrganizationUsecase.execute(key.getValue);

        expect(spyLogger).toHaveBeenCalledWith('Executing DeleteOrganizationService');
        expect(spyOnRepositoryGet).toHaveBeenCalled();
        expect(spyOnRepositoryDelete).toHaveBeenCalled();
        expect(result).toEqual(OrganizationDTO.fromDomain(organization));
    });

    test('When the method get in repository does not return a value, should not be call the delete method in a repository and should be return a typeError exception', async () => {
        const key: IdOrganization = Object.create(idOrganizationMock);
        const spyLogger = jest.spyOn(mockLogger, 'log');
        const spyOnRepositoryGet = jest.spyOn(mockOrganizationRepository, 'get').mockImplementation(() => Promise.resolve([]));
        const spyOnRepositoryDelete = jest.spyOn(mockOrganizationRepository, 'delete');

        try {

            await deleteOrganizationUsecase.execute(key.getValue);

        } catch (error: any) {
            expect(spyLogger).toHaveBeenCalledWith('Executing DeleteOrganizationService');
            expect(spyOnRepositoryGet).toHaveBeenCalled();
            expect(spyOnRepositoryDelete).not.toHaveBeenCalled();
            expect(error.message).toBe(`Id of organization ${key.getValue} does not exist`);
        }

    });
})
