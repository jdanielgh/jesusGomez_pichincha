export class BugsMetric {
    private readonly value: number;

    constructor(value: number) {
        if(!value && value === null) throw new TypeError('Bugs of metric can not be null');
        this.value = value;
    }

    get getValue(): number {
        return this.value;
    }
}
