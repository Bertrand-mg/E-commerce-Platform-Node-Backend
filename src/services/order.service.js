const { sequelize, Order, Product, OrderProducts } = require('../../models')

class OrderService{
    static async createOrder(orderData, userId){
        const trans = await sequelize.transaction();
        try{
            let totalorderprice = 0;

            const orderProducts = [];

            for(const item of orderData.products){

                const product = await Product.findByPk(item.id);
                if(!product){
                    throw new Error(`Product with ID ${product.id} not found.`);
                }
                if(product.stock < item.quantity){
                    throw new Error(`Product with ID ${product.id} is out of stock or insufficient quantity.`);
                }
                product.stock -= item.quantity;
                totalorderprice += product.price * item.quantity;

                await product.save({transaction: trans});

                orderProducts.push({ 
                    OrderId : item.OrderId, 
                    ProductId: product.id, 
                    quantity: item.quantity
                });

            }
            const newOrder = await Order.create({
                description: orderData.description || 'No description',
                totalprice: totalorderprice,
                status: "pending",
                UserId: userId
            },{transaction: trans});

            const orderProductsWithOrderId = orderProducts.map(product => ({
                ...product,
                OrderId: newOrder.id
            }));

            await OrderProducts.bulkCreate(orderProductsWithOrderId, {transaction: trans});

            await trans.commit();

            const orderWithProducts = await Order.findOne({
                where: { id: newOrder.id },
                include: [
                    {
                        model: Product,
                        through: { attributes: ['quantity'] },
                        attributes: ['id', 'name', 'price']
                    }
                ]
            });

             return {
                order_id: orderWithProducts.id,
                status: orderWithProducts.status,
                total_price: orderWithProducts.totalprice,
                products: orderWithProducts.Products.map(product => ({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: product.OrderProducts.quantity
                }))
            };

        }catch(error){
            trans.rollback();
            throw error;
        }
    }

    static async getOrdersByUserId(userId){
        try{
            const orders = await Order.findAll({
                where: { UserId: userId },
                include: [
                    {
                        model: Product,
                        through: { attributes: ['quantity'] },
                        attributes: ['id', 'name', 'price']
                    }
                ]
            }); 
            return orders.map(order => ({
                order_id: order.id,
                status: order.status,
                total_price: order.totalprice,
                created_at: order.createdAt,
            }));
        }catch(error){
            throw error;
        }
    }
}

module.exports = OrderService;