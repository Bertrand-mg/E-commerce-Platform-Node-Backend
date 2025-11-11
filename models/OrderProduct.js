"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class OrderProduct extends Model {}
    OrderProduct.init(
        {
            quantity: { type: DataTypes.INTEGER, allowNull: false }
        },
        { sequelize, modelName: "OrderProducts" }
    );
    return OrderProduct;
}