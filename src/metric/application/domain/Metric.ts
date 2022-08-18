import { timeStamp } from "console";
import { BugsMetric } from "./BugsMetric";
import { CodeSmellsMetric } from "./CodeSmellsMetric";
import { CoverageMetric } from "./CoverageMetric";
import { HotspotMetric } from "./HotspotMetric";
import { IdRepositoryMetric } from "./IdRepositoryMetric";
import { VulnerabilitiesMetric } from "./VulnerabilitiesMetric";

export class Metric {
    private readonly idRepository: IdRepositoryMetric;
    private readonly coverage: CoverageMetric;
    private readonly bugs: BugsMetric;
    private readonly vulnerabilities: VulnerabilitiesMetric;
    private readonly hotspot: HotspotMetric;
    private readonly codeSmells: CodeSmellsMetric;

    constructor(idRepository: IdRepositoryMetric, coverage: CoverageMetric, bugs: BugsMetric, vulnerabilities: VulnerabilitiesMetric,
        hotspot: HotspotMetric, codeSmells: CodeSmellsMetric) {
            this.idRepository = idRepository;
            this.coverage = coverage;
            this.bugs = bugs;
            this.vulnerabilities = vulnerabilities;
            this.hotspot = hotspot;
            this.codeSmells = codeSmells;
    }

    get getIdRepository(): IdRepositoryMetric {
        return this.idRepository;
    }

    get getCoverage(): CoverageMetric {
        return this.coverage;
    }

    get getBugs(): BugsMetric {
        return this.bugs;
    }

    get getVulnerabilities(): VulnerabilitiesMetric {
        return this.vulnerabilities;
    }

    get getHotspot(): HotspotMetric {
        return this.hotspot;
    }

    get getCodeSmell(): CodeSmellsMetric {
        return this.codeSmells;
    }
    

}