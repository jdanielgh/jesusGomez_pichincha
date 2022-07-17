import { BaseRepository } from "../../../../commons/BaseRepository";
import { IdOrganization } from "../../domain/idOrganization";
import { Organization } from "../../domain/Organization";

export interface OrganizationRepository extends BaseRepository<Organization, IdOrganization> {

}