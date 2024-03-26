import { OkPacket } from 'mysql';
import { execute } from '../services/mysql.connector'; 
import { productsQueries } from './products.queries';
import { Product } from './products.model';

//read all products or just ine
export const readInventory = async () => {
    console.log('productQueries.readInventory: ', productsQueries.readInventory);
    return execute<Product[]>(productsQueries.readInventory, []); 
};

export const readProductsByProductSearch = async (search: string) => { 
    console.log('search param', search);
    return execute<Product[]>(productsQueries.readProductsByProductSearch, [search]); 
};

export const readInventoryByVendorSearch = async (search: string) => { 
    console.log('search param', search);
    return execute<Product[]>(productsQueries.readProductsByVendorSearch, [search]); 
};

export const readProductsByProductId = async (productId: number) => {
    return execute<Product[]>(productsQueries.readProductsByProductsId, [productId]);
};

export const readProducts = async () => {
    return execute<Product[]>(productsQueries.readProducts, []);
};

export const createProduct = async (product: Product) => {
    return execute<OkPacket>(productsQueries.createProduct,
        [product.name, product.description, product.quantity, product.shippingPrice, product.wholesalePrice, product.vendor]);
};

export const updateProduct = async (product: Product) => {
    
    return execute<OkPacket>(productsQueries.updateProduct,
        [product.name, product.description, product.quantity, product.shippingPrice, product.wholesalePrice, product.vendor, product.id]);
};

export const deleteProduct = async (id: number) => {
    return execute<OkPacket>(productsQueries.deleteProduct, [id]);
};
