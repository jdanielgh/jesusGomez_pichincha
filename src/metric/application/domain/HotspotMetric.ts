export class HotspotMetric {
    private readonly value: number;

    constructor(value: number) {
        if(!value && value === null) throw new TypeError('Hotspot of metric can not be null');
        this.value = value;
    }

    get getValue(): number {
        return this.value;
    }
}
