import '../configuration/module-alias';
import { Request, Service } from '@sap/cds/apis/services';
import { db } from '@/common/entities/db/models';

export default (service: Service) => {
    // service.after(['CREATE', 'READ', 'UPDATE'], 'PurchaseOrders', async ( results: db.models.PurchaseOrders[], request: Request)=>{
    //     for(const current of results ){
    //         const productQuery = SELECT.one.from(db.models.Entity.Products).where({
    //             id:  current.product_id
    //         })
    //         const product = await cds.run(productQuery)
    //         product ? current.price = current.quantity * product.price : current.price = null;
    //     }
    // })

    // Nota esse serviço NÃO FAZ NADA 
    // service.after('READ', 'PurchaseOrders', (results: db.models.PurchaseOrders[], request: Request)=>{
    //     if (!request.user.is('ROLE_DUMMY_ADMIN')) {
    //         // retorne todas as ordens de compras de um usuario
    //         const userId = request.user.id

    //         //Este trecho extrai a cláusula 'where' da consulta SELECT presente na solicitação. A cláusula 'where' geralmente é usada para filtrar os resultados da consulta.
    //         const { where } = request.query.SELECT;
    //         //qui, é definida uma variável customWhere que parece estar preparando um filtro personalizado (WHERE) baseado no ID do usuário. Parece que está sendo construído um filtro para restringir os resultados com base no ID do usuário.
    //         // const customWhere = [{ ref: ['user_id'] },]
    //         const customWhere = {
    //             ...where,
    //             items: {
    //                 purchaseOrder: {
    //                     user_id: userId // Supondo que o campo que identifica o usuário em uma ordem de compra é 'user_id'
    //                 }
    //             }
    //         };
    //         request.query.SELECT.where = customWhere;
    //     }
    // })
}