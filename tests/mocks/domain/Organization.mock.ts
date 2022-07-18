import { IdOrganization } from "../../../src/organization/application/domain/idOrganization";
import { NameOrganization } from "../../../src/organization/application/domain/NameOrganization";
import { Organization } from "../../../src/organization/application/domain/Organization";
import { StatusOrganization } from "../../../src/organization/application/domain/StatusOrganization";

export const idOrganizationMock = new IdOrganization(1);
export const nameOrganizationMock = new NameOrganization('test');
export const statusOrganizationMock = new StatusOrganization(1);
export const organizationMock = new Organization(idOrganizationMock, nameOrganizationMock, statusOrganizationMock);