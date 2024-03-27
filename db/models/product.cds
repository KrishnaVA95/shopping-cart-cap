using { managed } from '@sap/cds/common';
using { db.models } from '.';

namespace db.models;

entity Products: managed {
    key id: UUID;
        title: String(30);
        price: Decimal(11,2);
        description: String(255);
        category: String(50);
        image: String(255);
        items: Composition of many models.PurchaseOrderItems on items.product = $self;
}