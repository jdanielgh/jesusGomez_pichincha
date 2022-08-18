import { NameOrganization } from "../../organization/application/domain/NameOrganization";
import { Repository } from "../../repository/application/domain/Repository";
import { VerificationType } from "../../shared/types/repository.type";
import { Tribe } from "../../tribe/application/domain/Tribe";

export class TribeRepositoryMetricDTO {
    id: string;
    name: string;
    tribe: string;
    organization: string;
    coverage: string;
    codeSmells: number;
    bugs: number;
    vulnerabilities: number;
    hotspots: number;
    verificationState: string;
    state: string;

    constructor(id: string, name: string, tribe: string, organization: string, coverage: string, codeSmells: number,
                bugs: number, vulnerabilities: number, hotspots: number, verificationState: string, state: string) {
       this.id = id;
       this.name = name; 
       this.tribe = tribe;
       this.organization = organization;
       this.coverage = coverage;
       this.codeSmells = codeSmells;
       this.bugs = bugs;
       this.vulnerabilities = vulnerabilities;
       this.hotspots = hotspots;
       this.verificationState = verificationState;
       this.state = state;
    }

    static fromDomain(tribe: Tribe, nameOrganization: NameOrganization, verificationData: VerificationType): (TribeRepositoryMetricDTO)[] | undefined {
        const nameOfTribe = tribe.getName.getValue;
        const data = tribe.getRepositories?.map((repository: Repository) => {
            if(!!repository.getMetric()) {
                const verificationState = verificationData.repositories.find( (verification) => verification.id === repository.getId().getValue);
                const metric = repository.getMetric()!;
                const verification = verificationState!;
                const verificationText = 'En espera';
                return new TribeRepositoryMetricDTO(
                    repository.getId().getValue.toString(),
                    repository.getName().getValue,
                    nameOfTribe,
                    nameOrganization.getValue,
                    `${metric.getCoverage.getValue * 100}%`,
                    metric.getCodeSmell.getValue,
                    metric.getBugs.getValue,
                    metric.getVulnerabilities.getValue,
                    metric.getHotspot.getValue,
                    verificationText, // create enum
                    repository.getState().getValue // change for enum
                    );
            }

        });
        return data && data && undefined;
    }
}