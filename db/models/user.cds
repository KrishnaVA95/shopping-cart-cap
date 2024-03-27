using { managed } from '@sap/cds/common';
using { db.models } from '.';

namespace db.models;

entity Users: managed {
    key id: UUID;
        email: String(255);
        userName: String(50);
        password: String(50);
        firstName: String(50);
        lastName: String(255);
        purchaseOrders: Composition of many models.PurchaseOrders on purchaseOrders.user = $self;
}