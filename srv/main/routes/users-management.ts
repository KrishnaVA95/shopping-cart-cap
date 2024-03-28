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
        // const userId = request.user.id; 
        const isAdmin = request.user.is('ROLE_DUMMY_ADMIN');
        // const userBeingModified = request.data.KEY.id; 

        if (!isAdmin) {
            // return request.reject(403, 'Não autorizado para realizar esta operação');
            // return request.user.purchaseOrders
        }
    }); 
}