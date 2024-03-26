import { Router } from 'express';
import * as ProductsController from './products.controller';

const router = Router();

router.route('/products')
    .get(ProductsController.readInventory);
    
router.route('/products/:product')
    .get(ProductsController.readInventory);

router.route('/products/product/:search')
    .get(ProductsController.readInventoryByProductSearch);

router.route('/products/vendor/:search')
    .get(ProductsController.readProductsByVendorSearch);
    
router.
    route('/products/addproduct').
    post(ProductsController.createProduct);

router.
    route('/products/updateproduct').
    put(ProductsController.updateProduct);

router.
    route('/products/:id')
    .delete(ProductsController.deleteProduct);
export default router;
