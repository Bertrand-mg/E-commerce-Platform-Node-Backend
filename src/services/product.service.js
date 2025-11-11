const { Product } = require('../../models');

class ProductService {
    static async createProduct({ name, description, price, stock, category, UserId }) {
        
        const product = await Product.create({
            name,
            description,
            price,
            stock,
            category, 
            UserId
        });
        return product;
    }

}
module.exports = ProductService;