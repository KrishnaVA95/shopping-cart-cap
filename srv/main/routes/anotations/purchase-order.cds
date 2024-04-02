using { PurchaseOrderManagementService } from '..';


annotate PurchaseOrderManagementService.PurchaseOrders with @( 
    UI:{
        LineItem : [
            {
                $Type: 'UI.DataField',
                Value: id,
                Label: 'ID da ordem de compra',
                ![@UI.Importance]: #High,
                ![@HTML5.CssDefaults]: {
                    $Type: 'HTML5.CssDefaultsType',
                    width: '20%'
                }
            },
            {
                $Type: 'UI.DataField',
                Value: user_id,
                Label: 'Usuario da compra'
            },
        ],
        SelectionFields  : [
            user_id
        ],
        // Criando Página do pedido de compra
        Facets : [{
        ID    : 'purchaseOrder',
        $Type : 'UI.CollectionFacet',
        Label : 'Ordem de Compra',
        Facets: [{
            $Type : 'UI.ReferenceFacet',
            Label : 'PurchaseOrder',
            Target: '@UI.FieldGroup#purchaseOrder'
        },]
        },
        {
            ID: 'item',
            $Type: 'UI.ReferenceFacet',
            Label: 'Itens',
            // Target: 'items/@UI.LineItem',
            Target: '@UI.LineItem',
        }
        ],

        FieldGroup #purchaseOrder: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Value: id,
                Label: 'ID'
            },
            {
                $Type: 'UI.DataField',
                Value: user_id,
                Label: 'Id do Usuário'
            },
            {
                $Type: 'UI.DataField',
                Value: createdAt,
                Label: 'Emitido em'
            },
        ]
        },
    }
){
    user @( 
        title: 'Usuarios do sistema',
        Common: {
            ValueList : {
                $Type : 'Common.ValueListType',
                CollectionPath : 'Users',
                Parameters: [
                    {
                        $Type: 'Common.ValueListParameterInOut',
                        ValueListProperty: 'id',
                        LocalDataProperty: 'user_id',
                        ![@HTML5.CssDefaults]: {
                            $Type: 'HTML5.CssDefaultsType',
                            width: '20%'
                        }
                    },
                    {
                        $Type: 'Common.ValueListParameterDisplayOnly',
                        ValueListProperty: 'userName',
                        ![@HTML5.CssDefaults]: {
                            $Type: 'HTML5.CssDefaultsType',
                            width: '20%'
                        }
                    },
                    {
                        $Type: 'Common.ValueListParameterDisplayOnly',
                        ValueListProperty: 'email',
                        ![@HTML5.CssDefaults]: {
                            $Type: 'HTML5.CssDefaultsType',
                            width: '20%'
                        }
                    },
                    {
                        $Type: 'Common.ValueListParameterDisplayOnly',
                        ValueListProperty: 'firstName',
                        ![@HTML5.CssDefaults]: {
                            $Type: 'HTML5.CssDefaultsType',
                            width: '20%'
                        }
                    },
                    {
                        $Type: 'Common.ValueListParameterDisplayOnly',
                        ValueListProperty: 'lastName',
                        ![@HTML5.CssDefaults]: {
                            $Type: 'HTML5.CssDefaultsType',
                            width: '20%'
                        }
                    },
                ]
            },
        }
    )
}