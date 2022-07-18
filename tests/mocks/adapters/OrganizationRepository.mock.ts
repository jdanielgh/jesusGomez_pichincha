import { IdOrganization } from "../../../src/organization/application/domain/idOrganization";
import { Organization } from "../../../src/organization/application/domain/Organization";
import { OrganizationRepository } from "../../../src/organization/application/ports/output/OrganizationRepository";

export class MockOrganizationRepository implements OrganizationRepository {
    store(domain: Organization): Promise<Organization> {
        throw new Error("Method not implemented.");
    };
    get(key?: IdOrganization | undefined): Promise<Organization[]> {
        throw new Error("Method not implemented.");
    };
    delete(key: IdOrganization): Promise<boolean> {
        throw new Error("Method not implemented.");
    };
    update(key: IdOrganization, domain: Organization): Promise<boolean> {
        throw new Error("Method not implemented.");
    };
    
}