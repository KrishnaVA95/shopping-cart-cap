import '../configuration/module-alias';
import { Request, Service } from '@sap/cds/apis/services';
import { db } from '@/common/entities/db/models';
import cds from '@sap/cds'
// import { Products } from '../../../db/models';

export default (service: Service) => {
    service.after(['CREATE', 'READ', 'UPDATE'], 'PurchaseOrderItems', async ( results: db.models.PurchaseOrderItems[], request: Request)=>{

        
        for(const current of results ){

            const productQuery = SELECT.one.from(db.models.Entity.Products).where({
                id:  current.product_id
            })
            const product = await cds.run(productQuery)

            product ? current.price = current.quantity * product.price : current.price = null;
        }
        results.forEach((current) => {
        })
    })
}