export class CoverageMetric {
    private readonly value: number;

    constructor(value: number) {
        if(!value || value === null) throw new TypeError('Coverage of metric can not be null');
        if(value < 0 || value > 1) throw new TypeError('Coverage of metric must be between 0 and 100');
        this.value = value;
    }

    get getValue(): number {
        return this.value;
    }
}
