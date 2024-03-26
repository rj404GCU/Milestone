import { Request, RequestHandler, Response } from 'express';
import { Product } from './products.model';
import * as ProductsDao from './products.dao';
import { OkPacket } from 'mysql';

//Put the entire product list onscreen
export const readInventory: RequestHandler = async (req: Request, res: Response) => { 
    try {
        let inventory;
        let productId = parseInt(req.query.productId as string);

        if (Number.isNaN(productId)) {
            inventory = await ProductsDao.readInventory(); //read all products
        } else {
            inventory = await ProductsDao.readProductsByProductId(productId);
        }

        res.status(200).json(
            inventory
        );

    } catch (error) {

        res.status(500).json({
            message: 'There was an error when fetching the inventory'
        });
    }
};

//Search inventory
export const readInventoryByProductSearch: RequestHandler = async (req: Request, res: Response) => { 
    try {
        console.log('search', req.params.search);
        const inventory = await ProductsDao.readProductsByProductSearch('%' + req.params.search + '%');
        
        await readProducts(inventory, res);
        
        res.status(200).json(
            inventory
        );  
    } catch (error) {
        console.error('[inventory.controller][readInventory][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching Inventory'
        });
    };
}

export const readProductsByVendorSearch: RequestHandler = async (req: Request, res: Response) => { 
    try {
        console.log('search', req.params.search);
        const inventory = await ProductsDao.readInventoryByVendorSearch('%' + req.params.search + '%');
        
        await readProducts(inventory, res);
        
        res.status(200).json(
            inventory
        );
        
    } catch (error) {
        console.error('[inventory.controller][readInventory][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching the inventory'
        });
    };
}
//read products

async function readProducts(products: Product[], res: Response <any, Record<string, any>>) { 
    try {
        const products = await ProductsDao.readProducts();
        
        res.status(200).json(
            products
        );
        
    } catch (error) {
        console.error('[inventory.controller][ReadProducts][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching products'
        });
    } 
};

//DELETE
export const deleteProduct: RequestHandler = async (req: Request, res: Response) => { 
    try {
        let id = parseInt(req.params.id)//parseInt(req.params.id as string);
        console.log('id', id);

        if (!Number.isNaN(id)) {
            const response = await ProductsDao.deleteProduct(id);
            res.status(200).json(
                response
            );
        } else {
            throw new Error("Integer expected for id");
        }
        
    } catch (error) {
        console.error('[products.controller][deleteProduct][Error]', error);
        res.status(500).json({
            message: 'There was an error when deleting product'
        });
    }
};
//CREATE
export const createProduct: RequestHandler = async (req: Request, res: Response) => { 
    try {
        const okPacket: OkPacket = await ProductsDao.createProduct(req.body);
        console.log('product', okPacket);

        res.status(200).json(
            okPacket
        );
            
    } catch (error) {
        console.error('[products.controller][createProduct][Error]', error);
        res.status(500).json({
            message: 'There was an error when creating products'
        });
    }
};

//update
export const updateProduct: RequestHandler = async (req: Request, res: Response) => { 
    try {
        const okPacket: OkPacket = await ProductsDao.updateProduct(req.body);
        console.log('product', okPacket);

        res.status(200).json(
            okPacket
        );
            
    } catch (error) {
        console.error('[products.controller][updateProduct][Error]', error);
        res.status(500).json({
            message: 'There was an error when updating product'
        });
    }
};