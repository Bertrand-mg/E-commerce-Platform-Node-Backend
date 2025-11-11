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

        product.name = name || product.name;
        product.description = description || product.description;
        product.price = price || product.price;
        product.stock = stock || product.stock;
        product.category = category || product.category;
        
        await product.save();
        return product;
    }
    static async getAllProducts(page =1 , pageSize =10) {
        
        const limit = pageSize;
        const offset = (page - 1) * pageSize;

        const { count, rows} = await Product.findAndCountAll({
            limit,
            offset,
            attributes: ['id', 'name', 'description', 'price', 'stock', 'category'],
        });
        return {
            currentPage: page,
            pageSize,
            totalPages: Math.ceil(count / limit),
            totalProducts: count,
            products: rows,
        };
    }

}
module.exports = ProductService;