const OrderService = require('../services/order.service');

class OrderController{
    static async createOrder(req, res) {
        try {
            const orderData = req.body;
            const newOrder = await OrderService.createOrder(orderData, req.user.id);

            res.status(201).json(newOrder);
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error', error: error.message });
        }
    }
    static async getOrderByUserId(req, res) {
        try {
            const userId = req.user.id;
            const orders = await OrderService.getOrdersByUserId(userId);
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error', error: error.message });
        }
    }
}
module.exports = OrderController;