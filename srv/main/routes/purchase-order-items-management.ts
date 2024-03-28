import '../configuration/module-alias';
import { Request, Service } from '@sap/cds/apis/services';
import { db } from '@/common/entities/db/models';
import cds from '@sap/cds'

export default (service: Service) => {
    service.after(['READ'], 'PurchaseOrderItems', async ( results: db.models.PurchaseOrderItems[], request: Request)=>{
        console.log(results)
        for(const current of results){
            const productQuery = SELECT.one.from(db.models.Entity.Products).where({
                id:  current.product_id
            })
            const product = await cds.run(productQuery)
            product ? current.price = current.quantity * product.price : current.price = null;
        }
    })

    service.before(['CREATE'], 'PurchaseOrderItems', async (  request: Request)=>{
        const purchaseOrderItems = Array.isArray(request.data) ? request.data : [request.data];
        for(const current of purchaseOrderItems){
            const productQuery = SELECT.one.from(db.models.Entity.Products).where({
                id:  current.product_id
            })
            const product = await cds.run(productQuery)
            product ? current.price = current.quantity * product.price : current.price = null;
        }
    })

    service.before('READ', 'PurchaseOrderItems', (request: Request)=>{
        if (!request.user.is('ROLE_DUMMY_ADMIN')) {
            return request.reject(403, 'Não autorizado')
        }
    })
}