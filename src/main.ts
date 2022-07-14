import { AppDataSource } from "./datasource";
import { Organization } from "./entity/Organization";

console.log(process.env.DATABASE_URL);

AppDataSource.initialize()
    .then(
    async () => {
        const organizationRepository = AppDataSource.getRepository(Organization);
        const organizationData = new Organization(1, 'Test', 1);
        await organizationRepository.save(organizationData);
        console.log(`Created organization with id ${organizationData.getIdOrganization}`);
        

        const valueforFind = await organizationRepository.find({where: { idOrganization: 1 }});
        valueforFind.forEach( (or) => console.log(`Value found ${or.idOrganization} ${or.getName}`));
        
    })
    .catch( (error: any) => {
        console.log(error);
    })
