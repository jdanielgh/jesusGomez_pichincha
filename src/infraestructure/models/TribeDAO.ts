import { BugsMetric } from "../../metric/application/domain/BugsMetric";
import { CodeSmellsMetric } from "../../metric/application/domain/CodeSmellsMetric";
import { CoverageMetric } from "../../metric/application/domain/CoverageMetric";
import { HotspotMetric } from "../../metric/application/domain/HotspotMetric";
import { IdRepositoryMetric } from "../../metric/application/domain/IdRepositoryMetric";
import { Metric } from "../../metric/application/domain/Metric";
import { VulnerabilitiesMetric } from "../../metric/application/domain/VulnerabilitiesMetric";
import { CreateTimeRepository } from "../../repository/application/domain/CreateTimeRepository";
import { IdRepository } from "../../repository/application/domain/IdRepository";
import { NameRepository } from "../../repository/application/domain/NameRepository";
import { Repository } from "../../repository/application/domain/Repository";
import { StateRepository } from "../../repository/application/domain/StateRepository";
import { StatusRepository } from "../../repository/application/domain/StatusRepository";
import { StateRepositoryType, StatusRepositoryType } from "../../shared/types/repository.type";
import { IdTribe } from "../../tribe/application/domain/IdTribe";
import { NameTribe } from "../../tribe/application/domain/NameTribe";
import { StatusTribe } from "../../tribe/application/domain/StatusTribe";
import { Tribe } from "../../tribe/application/domain/Tribe";

export interface TribeQueryResult {
    id_tribe:           string;
    tribe_name:         string;
    tribe_status:       string;
    name_organization:  string;
    repository_name:    string;
    create_time:        Date;
    repository_state:   string;
    respository_status: string;
    id_repository:      string;
    bugs:               string;
    vulnerabilities:    string;
    hotspot:            string;
    code_smells:        string;
    coverage:           number;
}


export class TribeDAO {
    id_tribe:           string;
    tribe_name:         string;
    tribe_status:       string;
    name_organization:  string;
    repository_name:    string;
    create_time:        Date;
    repository_state:   string;
    respository_status: string;
    id_repository:      string;
    bugs:               string;
    vulnerabilities:    string;
    hotspot:            string;
    code_smells:        string;
    coverage:           number;

    constructor(args: TribeQueryResult) {
            this.id_tribe = args.id_tribe;
            this.tribe_name = args.tribe_name;
            this.tribe_status = args.tribe_status;
            this.repository_name = args.repository_name;
            this.create_time = args.create_time;
            this.repository_state = args.repository_state;
            this.respository_status = args.respository_status;
            this.id_repository = args.id_repository;
            this.bugs = args.bugs;
            this.vulnerabilities = args.vulnerabilities;
            this.hotspot = args.hotspot;
            this.code_smells = args.code_smells;
            this.coverage = args.coverage;
            this.name_organization = args.name_organization;
    }

    toTribeDomain(repositories: Repository[]): Tribe {
        return  new Tribe(
            new IdTribe(parseInt(this.id_tribe)),
            new NameTribe(this.tribe_name),
            new StatusTribe(parseInt(this.tribe_status)),
            repositories
        );        
    }

    toRepositoryDomain(): Repository {
        const metric = this.toMetricDomain();
        return new Repository(
            new IdRepository(parseInt(this.id_repository)),
            new NameRepository(this.repository_name),
            new StateRepository((this.repository_state as StateRepositoryType)),
            new CreateTimeRepository(this.create_time),
            new StatusRepository((this.respository_status as StatusRepositoryType)),
            metric
        );
    }
    
    toMetricDomain(): Metric {
        return new Metric(
            new IdRepositoryMetric(parseInt(this.id_repository)),
            new CoverageMetric(this.coverage),
            new BugsMetric(parseInt(this.bugs)),
            new VulnerabilitiesMetric(parseInt(this.vulnerabilities)),
            new HotspotMetric(parseInt(this.hotspot)),
            new CodeSmellsMetric(parseInt(this.code_smells))
        );
    }

    static fromQueryResult(tribeDAOI: TribeQueryResult): TribeDAO {
        return new TribeDAO(tribeDAOI);
    }
}
