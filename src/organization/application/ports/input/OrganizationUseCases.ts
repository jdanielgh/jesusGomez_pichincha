import { UseCase } from "../../../../commons/UseCase";
import { OrganizationDTO } from "../../../../infraestructure/models/OrganizationDTO";

export interface CreateOrganizationUseCase extends UseCase<OrganizationDTO, OrganizationDTO> { }
export interface UpdateOrganizationUseCase extends UseCase<{organizationDTO: OrganizationDTO, key: number}, OrganizationDTO> { }
export interface QueryOrganizationUseCase extends UseCase<number | undefined, OrganizationDTO[]> { }
export interface DeleteOrganizationUseCase extends UseCase<number, OrganizationDTO> { }
