using { ProductsManagementService } from '..';

annotate ProductsManagementService.Products with @( 
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
                Value: title,
                Label: 'Nome'
            },
            {
                $Type: 'UI.DataField',
                Value: price,
                Label: 'Preço'
            },
            {
                $Type: 'UI.DataField',
                Value: description,
                Label: 'Descrição'
            },
            {
                $Type: 'UI.DataField',
                Value: category,
                Label: 'Categoria'
            },
            // Botão add item 
            {
                $Type : 'UI.DataFieldForAction',
                Action: 'ProductsManagementService.addItem',
                Label : 'Add item'
            },
        ],
        // Botão add item no detalhe do produto
        Identification    : [{
        $Type : 'UI.DataFieldForAction',
        Action: 'ProductsManagementService.addItem',
        Label : 'Add item'
        },

        ],
        // Criando Página do produto
        Facets : [{
        ID    : 'product',
        $Type : 'UI.CollectionFacet',
        Label : 'Informações Gerais',
        Facets: [{
            $Type : 'UI.ReferenceFacet',
            Label : 'Produtos',
            Target: '@UI.FieldGroup#product'
        }]
        }],

        FieldGroup #product: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Value: id,
                Label: 'ID'
            },
            {
                $Type: 'UI.DataField',
                Value: title,
                Label: 'Nome'
            },
            {
                $Type: 'UI.DataField',
                Value: category,
                Label: 'Categoria'
            },
            {
                $Type: 'UI.DataField',
                Value: description,
                Label: 'Descrição'
            },
            {
                $Type: 'UI.DataField',
                Value: price,
                Label: 'Preço'
            }
        ]
    },
    }
){}