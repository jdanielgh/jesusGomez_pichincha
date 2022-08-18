import { VerificationType } from "../../../../shared/types/repository.type";

export interface GatewayVerification {
    getRepositoryValidation(): Promise<VerificationType>; 
}