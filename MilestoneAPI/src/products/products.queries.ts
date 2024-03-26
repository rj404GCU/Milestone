export const productsQueries = {
    readInventory: `
    SELECT 
        id, 
        name, 
        description, 
        quantity, 
        wholesalePrice, 
        shippingPrice, 
        vendor
    FROM store.products`,
    readProductsByProductSearch:`
        SELECT 
            id, 
            name, 
            description, 
            quantity, 
            wholesalePrice, 
            shippingPrice, 
            vendor
        FROM products
        WHERE products.name LIKE ?
        `,
    readProductsByVendorSearch:`
        SELECT 
            id, 
            name, 
            description, 
            quantity, 
            wholesalePrice, 
            shippingPrice, 
            vendor
        FROM products
        WHERE products.vendor LIKE ?
        `,
    readProductsByProductsId:` 
        SELECT 
            id, 
            name, 
            description, 
            quantity, 
            wholesalePrice, 
            shippingPrice, 
            vendor
        FROM products
        WHERE products.id LIKE ?
        `,
    readProducts: `
        SELECT * 
        FROM store.products
        `,

    createProduct:`
        INSERT INTO products(id, name, description, quantity, wholesalePrice, shippingPrice, vendor) 
        VALUES(null, ?, ?, ?, ?, ?, ?)
        `,
    updateProduct:`
        UPDATE store.products
        SET 
            name = ?, 
            description = ? , 
            quantity = ?, 
            wholesalePrice = ?, 
            shippingPrice = ?, 
            vendor = ?
        WHERE products.id = ?
        `,
    deleteProduct:`
        DELETE FROM store.products
        WHERE products.id = ?
        `

}