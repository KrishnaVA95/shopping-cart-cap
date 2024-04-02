using { UsersManagementService } from '..';

annotate UsersManagementService.Users with @( 
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
                Value: userName,
                Label: 'Nome de usuário'
            },
            {
                $Type: 'UI.DataField',
                Value: firstName,
                Label: 'Primeiro Nome'
            },
            {
                $Type: 'UI.DataField',
                Value: lastName,
                Label: 'Sobrenome'
            },
            {
                $Type: 'UI.DataField',
                Value: email,
                Label: 'Mail'
            },
        ],
    }
){}