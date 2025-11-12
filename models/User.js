"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            // association definition
            User.hasMany(models.Product, { foreignKey: "UserId" });
            User.hasMany(models.Order, { foreignKey: "UserId" });
        }
    }
    User.init(
        {
            id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
            username: { type: DataTypes.STRING, allowNull: false},
            email: { type: DataTypes.STRING, allowNull: false, unique: true },
            role: { type: DataTypes.ENUM('User', 'Admin'), defaultValue: 'User' },
            password: { type: DataTypes.STRING, allowNull: false }
        },
        {sequelize, modelName: "User", timestamps: false}
    );
    return User;
}