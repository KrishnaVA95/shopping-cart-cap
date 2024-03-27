using { managed } from '@sap/cds/common';
using { db.models } from '.';

namespace db.models;

entity PurchaseOrders: managed {
    key id: UUID;
    key user: Association to models.Users;
        items: Composition of many models.PurchaseOrderItems on items.purchaseOrder = $self;
}