using { db.models } from '../../../db/models';

service ProductsManagementService {
    entity Products as projection on models.Products order by title ASC;
    action addItem(quantity: Integer, purchaseOrder_id: String);
}