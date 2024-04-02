using { db.models } from '../../../db/models';

@requires: 'authenticated-user'
service PurchaseOrderItemsManagementService {
    entity PurchaseOrderItems as projection on models.PurchaseOrderItems;
    entity Products as projection on models.Products;
    
    action addCart();
}