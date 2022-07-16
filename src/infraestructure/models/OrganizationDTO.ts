import { IdOrganization } from "../../organization/application/domain/idOrganization";
import { NameOrganization } from "../../organization/application/domain/NameOrganization";
import { Organization } from "../../organization/application/domain/Organization";
import { StatusOrganization } from "../../organization/application/domain/StatusOrganization";

export class OrganizationDTO {
    private id: number;
    private name: string;
    private status: number;

    constructor(id: number, name: string, status: number) {
        this.id = id;
        this.name = name;
        this.status = status;
    }

    toDomain(): Organization {
        return new Organization(
            new IdOrganization(this.id),
            new NameOrganization(this.name),
            new StatusOrganization(this.status)
        );
    }

    static fromDomain(organization: Organization): OrganizationDTO {
        return new OrganizationDTO(
            organization.getId.getValue,
            organization.getName.getValue,
            organization.getStatus.getValue);
    }

    get getId(): number {
        return this.id;
    }

    get getName(): string {
        return this.name;
    }

    get getStatus(): number {
        return this.status;
    }

    set setId(id: number) {
        this.id = id;
    }

    set setName(name: string) {
        this.name = name;
    }

    set setStatus(status: number) {
        this.status = status;
    }
}

