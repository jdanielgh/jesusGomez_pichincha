import { Logger } from "../../../src/infraestructure/models/Logger";

export class MockLogger implements Logger {
    log(message: string): void {  };

}