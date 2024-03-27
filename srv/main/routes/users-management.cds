using { db.models } from '../../../db/models';

service UsersManagementService {
    entity Users as projection on models.Users;
}