import '../configuration/module-alias';
import { Request, Service } from '@sap/cds/apis/services';
import { db } from '@/common/entities/db/models';

export default (service: Service) => {
    service.after('READ', 'Users', (results: db.models.Users[], request: Request)=>{
        if (!request.user.is('ROLE_DUMMY_ADMIN')) {
            return request.reject(403, 'Não autorizado')
        }
    });

    service.before(['DELETE', 'UPDATE'], 'Users', async (request: Request) => {
        const isAdmin = request.user.is('ROLE_DUMMY_ADMIN');
        
        // Nota: Encontrar um unsuario com determinado id: ok.
        // Nota II: Qual ID eu preciso? Como eu sei o id do atual usuario logado? 
        // const userBeingModified = request.data.KEY.id; 
        // const userId = request.user.id;  // Funciona ???
        // const isHeHimself = 

        if (!isAdmin) {
            return request.reject(403, 'Não autorizado');
        }


    }); 
}