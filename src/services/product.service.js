const { Product } = require('../../models');
const { Op } = require('sequelize');

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
    static async getAllProducts( searchKeyword ) {
        
        const page =1 ;
        const pageSize =10;
        const limit = pageSize;
        const offset = (page - 1) * pageSize;

        let count, rows;
        
        if(!searchKeyword){
            ({ count, rows} = await Product.findAndCountAll({
                limit,
                offset,
                attributes: ['id', 'name', 'description', 'price', 'stock', 'category'],
            }));
        }else{
            ({ count, rows} = await Product.findAndCountAll({
                limit,
                offset,
                where: {
                    name: { [Op.iLike]: `%${searchKeyword}%`  },
                },
                attributes: ['id', 'name', 'description', 'price', 'stock', 'category'],
            }));
        }
                    
        
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