const ProductService = require('../services/product.service');

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
}

module.exports = ProductController;