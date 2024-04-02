using { PurchaseOrderItemsManagementService } from '..';

annotate PurchaseOrderItemsManagementService.PurchaseOrderItems with @( 
    UI:{
        LineItem : [
            {
                $Type: 'UI.DataField',
                Value: id,
                Label: 'ID',
                ![@UI.Importance]: #High,
                ![@HTML5.CssDefaults]: {
                    $Type: 'HTML5.CssDefaultsType',
                    width: '20%'
                }
            },
            {
                $Type: 'UI.DataField',
                Value: product_id,
                Label: 'Produto da compra'
            },
            {
                $Type: 'UI.DataField',
                Value: purchaseOrder_id,
                Label: 'Ordem de compra'
            },
            {
                $Type: 'UI.DataField',
                Value: purchaseOrder_user_id,
                Label: 'Usuario da Ordem de compra'
            },
            {
                $Type: 'UI.DataField',
                Value: quantity,
                Label: 'Quantidade'
            },
            {
                $Type: 'UI.DataField',
                Value: price,
                Label: 'Preço final do produto'
            },
        ],
        SelectionFields  : [
            product_id,
        ],
        Facets           : [{
        ID    : 'orderItems',
        $Type : 'UI.CollectionFacet',
        Label : 'Informações Gerais',
        Facets: [{
            $Type : 'UI.ReferenceFacet',
            Label : 'items',
            Target: '@UI.FieldGroup#items'
        }]
        },
        ],
        FieldGroup #items: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Value: id,
                Label: 'ID'
            },
            {
                $Type: 'UI.DataField',
                Value: product_id,
                Label: 'Id do produto'
            },
            {
                $Type: 'UI.DataField',
                Value: purchaseOrder_user_id,
                Label: 'Id do comprador (User)'
            },
            {
                $Type: 'UI.DataField',
                Value: purchaseOrder_id,
                Label: 'Ordem de compra'
            },
            {
                $Type: 'UI.DataField',
                Value: quantity,
                Label: 'Quantidade'
            },
            {
                $Type: 'UI.DataField',
                Value: price,
                Label: 'Preço'
            },
        ]
    },
    }
){
    product @( 
        title: 'Produtos do sistema',
        Common: {
            ValueList : {
                $Type : 'Common.ValueListType',
                CollectionPath : 'Products',
                Parameters: [
                    {
                        $Type: 'Common.ValueListParameterInOut',
                        ValueListProperty: 'id',
                        LocalDataProperty: 'product_id'
                    },
                    {
                        $Type: 'Common.ValueListParameterDisplayOnly',
                        ValueListProperty: 'title'
                    },
                    {
                        $Type: 'Common.ValueListParameterDisplayOnly',
                        ValueListProperty: 'price'
                    },
                    {
                        $Type: 'Common.ValueListParameterDisplayOnly',
                        ValueListProperty: 'description'
                    },
                    {
                        $Type: 'Common.ValueListParameterDisplayOnly',
                        ValueListProperty: 'category'
                    },
                ]
            },
        }
    )
}