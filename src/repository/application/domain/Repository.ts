import { Metric } from "../../../metric/application/domain/Metric";
import { CreateTimeRepository } from "./CreateTimeRepository";
import { IdRepository } from "./IdRepository";
import { NameRepository } from "./NameRepository";
import { StateRepository } from "./StateRepository";
import { StatusRepository } from "./StatusRepository";

export class Repository {
    private readonly id: IdRepository;
    private readonly name: NameRepository;
    private readonly state: StateRepository;
    private readonly createTime: CreateTimeRepository;
    private readonly status: StatusRepository;
    private readonly metric?: Metric;

    constructor(id: IdRepository, name: NameRepository, state: StateRepository, createTime: CreateTimeRepository, status: StatusRepository, metric?: Metric) {
        this.id = id;
        this.name = name;
        this.state = state;
        this.createTime = createTime;
        this.status = status;
        this.metric = metric;
    }

    public getId(): IdRepository {
        return this.id;
    }

    public getName(): NameRepository {
        return this.name;
    }

    public getState(): StateRepository {
        return this.state;
    }


    public getCreateTime(): CreateTimeRepository {
        return this.createTime;
    }

    public getStatus(): StatusRepository {
        return this.status;
    }

    public getMetric(): Metric | undefined {
        return this.metric;
    }

}