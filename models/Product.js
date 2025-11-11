"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            // association definition
            Product.belongsTo(models.User, { foreignKey: "UserId" });
            Product.belongsTo(models.Order, { 
                through: models.OrderProducts, 
                foreignKey: "ProductId" });
        }
    }
    Product.init(
        {
            id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
            name: { type: DataTypes.STRING },
            description: { type: DataTypes.STRING },
            price: { type: DataTypes.FLOAT },
            stock: { type: DataTypes.INTEGER },
            category: { type: DataTypes.STRING }
        },
        { sequelize, modelName: "Product" , timestamps: false}
    );
    return Product;
}