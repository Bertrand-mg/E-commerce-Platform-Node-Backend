"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        static associate(models) {
            // association definition
            Order.belongsTo(models.User, { foreignKey: "UserId" });
            Order.belongsToMany(models.Product, { 
                through: models.OrderProducts,
                foreignKey: "OrderId",
                otherKey: "ProductId",
            });
        };
    }
    Order.init(
        {
            id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
            description: { type: DataTypes.STRING },
            totalprice: { type: DataTypes.FLOAT },
            status: { type: DataTypes.STRING },

            UserId: { type: DataTypes.UUID, allowNull: false },
            createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
        },
        { sequelize, modelName: "Order" , timestamps: true, createdAt: 'createdAt', updatedAt: false}
    );
    return Order;
}