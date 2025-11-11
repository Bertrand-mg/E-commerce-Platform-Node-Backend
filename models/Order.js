"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        static associate(models) {
            // association definition
            Order.belongsTo(models.User, { foreignKey: "UserId" });
            Order.belongsTo(models.Product, { 
                through: models.OrderProducts,
                foreignKey: "OrderId"});
        };
    }
    Order.init(
        {
            id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
            description: { type: DataTypes.STRING },
            totalprice: { type: DataTypes.FLOAT },
            status: { type: DataTypes.STRING },

            UserId: { type: DataTypes.UUID, allowNull: false },
        },
        { sequelize, modelName: "Order" }
    );
    return Order;
}