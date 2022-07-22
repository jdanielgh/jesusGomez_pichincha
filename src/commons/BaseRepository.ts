export interface BaseRepository<Domain, Key> {
    store(domain: Domain): Promise<Domain>;
    get(key?: Key): Promise<Domain[]>;
    delete(key: Key): Promise<boolean>;
    update(key: Key, domain: Domain): Promise<boolean>;
}
