export namespace db.models {
    export interface Products extends Managed {
        id: string;
        title: string;
        price: number;
        description: string;
        category: string;
        image: string;
        items: PurchaseOrderItems[];
    }

    export interface PurchaseOrderItems extends Managed {
        id: string;
        product?: Products;
        product_id?: string;
        purchaseOrder?: PurchaseOrders;
        purchaseOrder_id?: string;
        purchaseOrder_user?: unknown;
        quantity: number;
        price: number;
    }

    export interface PurchaseOrders extends Managed {
        id: string;
        user?: Users;
        user_id?: string;
        items: PurchaseOrderItems[];
    }

    export interface Users extends Managed {
        id: string;
        email: string;
        userName: string;
        password: string;
        firstName: string;
        lastName: string;
        purchaseOrders: PurchaseOrders[];
    }

    export enum Entity {
        Products = "db.models.Products",
        PurchaseOrderItems = "db.models.PurchaseOrderItems",
        PurchaseOrders = "db.models.PurchaseOrders",
        Users = "db.models.Users"
    }

    export enum SanitizedEntity {
        Products = "Products",
        PurchaseOrderItems = "PurchaseOrderItems",
        PurchaseOrders = "PurchaseOrders",
        Users = "Users"
    }
}

export namespace sap.common {
    export interface CodeList {
        name: string;
        descr: string;
    }

    export interface Countries extends sap.common.CodeList {
        code: string;
    }

    export interface Currencies extends sap.common.CodeList {
        code: string;
        symbol: string;
    }

    export interface Languages extends sap.common.CodeList {
        code: string;
    }

    export enum Entity {
        CodeList = "sap.common.CodeList",
        Countries = "sap.common.Countries",
        Currencies = "sap.common.Currencies",
        Languages = "sap.common.Languages"
    }

    export enum SanitizedEntity {
        CodeList = "CodeList",
        Countries = "Countries",
        Currencies = "Currencies",
        Languages = "Languages"
    }
}

export namespace ProductsManagementService {
    export interface Products {
        createdAt?: Date;
        createdBy?: string;
        modifiedAt?: Date;
        modifiedBy?: string;
        id: string;
        title: string;
        price: number;
        description: string;
        category: string;
        image: string;
        items: PurchaseOrderItems[];
    }

    export interface PurchaseOrderItems {
        createdAt?: Date;
        createdBy?: string;
        modifiedAt?: Date;
        modifiedBy?: string;
        id: string;
        product?: Products;
        product_id?: string;
        purchaseOrder?: PurchaseOrders;
        purchaseOrder_id?: string;
        purchaseOrder_user?: unknown;
        quantity: number;
        price: number;
    }

    export interface PurchaseOrders {
        createdAt?: Date;
        createdBy?: string;
        modifiedAt?: Date;
        modifiedBy?: string;
        id: string;
        user?: db.models.Users;
        user_id?: string;
        items: PurchaseOrderItems[];
    }

    export enum Entity {
        Products = "ProductsManagementService.Products",
        PurchaseOrderItems = "ProductsManagementService.PurchaseOrderItems",
        PurchaseOrders = "ProductsManagementService.PurchaseOrders"
    }

    export enum SanitizedEntity {
        Products = "Products",
        PurchaseOrderItems = "PurchaseOrderItems",
        PurchaseOrders = "PurchaseOrders"
    }
}

export namespace PurchaseOrderItemsManagementService {
    export interface PurchaseOrderItems {
        createdAt?: Date;
        createdBy?: string;
        modifiedAt?: Date;
        modifiedBy?: string;
        id: string;
        product?: db.models.Products;
        product_id?: string;
        purchaseOrder?: PurchaseOrders;
        purchaseOrder_id?: string;
        purchaseOrder_user?: unknown;
        quantity: number;
        price: number;
    }

    export interface PurchaseOrders {
        createdAt?: Date;
        createdBy?: string;
        modifiedAt?: Date;
        modifiedBy?: string;
        id: string;
        user?: db.models.Users;
        user_id?: string;
        items: PurchaseOrderItems[];
    }

    export enum Entity {
        PurchaseOrderItems = "PurchaseOrderItemsManagementService.PurchaseOrderItems",
        PurchaseOrders = "PurchaseOrderItemsManagementService.PurchaseOrders"
    }

    export enum SanitizedEntity {
        PurchaseOrderItems = "PurchaseOrderItems",
        PurchaseOrders = "PurchaseOrders"
    }
}

export namespace PurchaseOrderManagementService {
    export interface PurchaseOrder {
        createdAt?: Date;
        createdBy?: string;
        modifiedAt?: Date;
        modifiedBy?: string;
        id: string;
        user?: db.models.Users;
        user_id?: string;
        items: PurchaseOrderItems[];
    }

    export interface PurchaseOrderItems {
        createdAt?: Date;
        createdBy?: string;
        modifiedAt?: Date;
        modifiedBy?: string;
        id: string;
        product?: db.models.Products;
        product_id?: string;
        purchaseOrder?: PurchaseOrder;
        purchaseOrder_id?: string;
        purchaseOrder_user?: unknown;
        quantity: number;
        price: number;
    }

    export enum Entity {
        PurchaseOrder = "PurchaseOrderManagementService.PurchaseOrder",
        PurchaseOrderItems = "PurchaseOrderManagementService.PurchaseOrderItems"
    }

    export enum SanitizedEntity {
        PurchaseOrder = "PurchaseOrder",
        PurchaseOrderItems = "PurchaseOrderItems"
    }
}

export namespace UsersManagementService {
    export interface PurchaseOrderItems {
        createdAt?: Date;
        createdBy?: string;
        modifiedAt?: Date;
        modifiedBy?: string;
        id: string;
        product?: db.models.Products;
        product_id?: string;
        purchaseOrder?: PurchaseOrders;
        purchaseOrder_id?: string;
        purchaseOrder_user?: unknown;
        quantity: number;
        price: number;
    }

    export interface PurchaseOrders {
        createdAt?: Date;
        createdBy?: string;
        modifiedAt?: Date;
        modifiedBy?: string;
        id: string;
        user?: Users;
        user_id?: string;
        items: PurchaseOrderItems[];
    }

    export interface Users {
        createdAt?: Date;
        createdBy?: string;
        modifiedAt?: Date;
        modifiedBy?: string;
        id: string;
        email: string;
        userName: string;
        password: string;
        firstName: string;
        lastName: string;
        purchaseOrders: PurchaseOrders[];
    }

    export enum Entity {
        PurchaseOrderItems = "UsersManagementService.PurchaseOrderItems",
        PurchaseOrders = "UsersManagementService.PurchaseOrders",
        Users = "UsersManagementService.Users"
    }

    export enum SanitizedEntity {
        PurchaseOrderItems = "PurchaseOrderItems",
        PurchaseOrders = "PurchaseOrders",
        Users = "Users"
    }
}

export type User = string;

export interface Cuid {
    ID: string;
}

export interface Managed {
    createdAt?: Date;
    createdBy?: string;
    modifiedAt?: Date;
    modifiedBy?: string;
}

export interface Temporal {
    validFrom: Date;
    validTo: Date;
}

export enum Entity {
    Cuid = "cuid",
    Managed = "managed",
    Temporal = "temporal"
}

export enum SanitizedEntity {
    Cuid = "Cuid",
    Managed = "Managed",
    Temporal = "Temporal"
}
