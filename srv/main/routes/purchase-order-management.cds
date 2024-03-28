using { db.models } from '../../../db/models';

@requires: 'authenticated-user'
service PurchaseOrderManagementService {
    entity PurchaseOrders as projection on models.PurchaseOrders;
    entity Users as projection on models.Users;
    entity PurchaseOrdersItems as projection on models.PurchaseOrderItems;
}
