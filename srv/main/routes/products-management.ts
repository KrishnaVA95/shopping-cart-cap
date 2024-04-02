import '../configuration/module-alias';
import { Request, Service, db } from '@sap/cds/apis/services';

export default (service: Service) => {

    service.before(['CREATE', 'UPDATE', 'DELETE'], 'Products', (request: Request)=>{
        if (!request.user.is('ROLE_DUMMY_ADMIN')) {
            return request.reject(403, 'Não autorizado')
        }
    })

    service.on('addItem', () => {
        console.log('Não FOIIIIII!!!!')
    })
}