using { db.models } from '../../../db/models';

service ProductsManagementService {
    entity Products as projection on models.Products;
}