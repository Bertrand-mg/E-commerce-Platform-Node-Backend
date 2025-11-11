const ProductService = require('../services/product.service');
const { Product } = require('../../models');

class ProductController {
    static async createProduct(req, res) {
        try {
            const { name, description, price, stock, category } = req.body;
            const result = await ProductService.createProduct({ name, description, price, stock, category , UserId: req.user.id});
            return res.status(201).json(result);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    static async updateProduct(req, res) {
        try {
            const productId = req.params.id;
            const product = await Product.findByPk(productId);
            if (!product) return res.status(404).json({ message: 'Product not found' });
            
            const { name, description, price, stock, category } = req.body;
            const result = await ProductService.updateProduct(product.id, { name, description, price, stock, category });
            return res.status(200).json(result);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }
    static async getAllProducts(req, res) {
        try {
            const products = await ProductService.getAllProducts();
            return res.status(200).json(products);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

module.exports = ProductController;