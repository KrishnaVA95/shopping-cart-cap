using { db.models } from '../../../db/models';

service PurchaseOrderItemsManagementService {
    entity PurchaseOrderItems as projection on models.PurchaseOrderItems;
}