"use strict";
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable("Products", {
            id: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true },
            name: { type: Sequelize.STRING },
            description: { type: Sequelize.STRING },
            price: { type: Sequelize.FLOAT },
            stock: { type: Sequelize.INTEGER },
            category: { type: Sequelize.STRING },
            UserId: { 
                type: Sequelize.UUID, 
                references: { model: "Users", key: "id" }, 
                onUpdate: "CASCADE", onDelete: "SET NULL" 
            },
            createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
            updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW }
        });
    },
    async down (queryInterface, Sequelize) {
        await queryInterface.dropTable("Products");
    }
};