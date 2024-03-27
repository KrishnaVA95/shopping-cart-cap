using { managed } from '@sap/cds/common';
using { db.models } from '.';

namespace db.models;

entity PurchaseOrderItems: managed {
    key id: UUID;
    key product: Association to models.Products;
    key purchaseOrder: Association to models.PurchaseOrders;
        quantity: Integer;
        price: Decimal(15,2);
}