using { db.models } from '../../../db/models';

@requires: 'authenticated-user'
service PurchaseOrderItemsManagementService {
    entity PurchaseOrderItems as projection on models.PurchaseOrderItems;
}