using { db.models } from '../../../db/models';

service PurchaseOrderManagementService {
    entity PurchaseOrder as projection on models.PurchaseOrders;
}
