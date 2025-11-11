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
    static async updateProduct(productId, { name, description, price, stock, category }) {
        const product = await Product.findByPk(productId);
        if (!product) throw new Error('Product Id not found');

        product.name = name || product.name;
        product.description = description || product.description;
        product.price = price || product.price;
        product.stock = stock || product.stock;
        product.category = category || product.category;
        
        await product.save();
        return product;
    }

}
module.exports = ProductService;