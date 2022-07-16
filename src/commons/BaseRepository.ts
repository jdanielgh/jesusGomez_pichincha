export interface BaseRepository<Domain, Key> {
    store: (domain: Domain) => Promise<Domain>;
    get: () => Promise<Domain[]>;
    delete: (key: Key) => Promise<boolean>;
    update: (key: Key) => Promise<boolean>;
}