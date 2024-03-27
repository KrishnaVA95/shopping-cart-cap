import '../configuration/module-alias';
import { Request, Service } from '@sap/cds/apis/services';
import { db } from '@/common/entities/db/models';

// import { Products } from '../../../db/models';

export default (service: Service) => {
    service.after(['CREATE', 'READ', 'UPDATE'], 'PurchaseOrderItems', (results: db.models.PurchaseOrderItems[], request: Request)=>{

        results.forEach((current) => {
            // const product =  Products.findOne({ where: { id: current.product_id } });
            // product ? current.price = current.quantity * product.price : current.price = null;
            current.price = 50
        })
    })
}