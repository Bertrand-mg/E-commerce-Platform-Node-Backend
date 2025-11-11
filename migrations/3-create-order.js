"use strict"
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable("Orders", {
            id: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true },
            description: { type: Sequelize.STRING },
            totalprice: { type: Sequelize.FLOAT },
            status: { type: Sequelize.STRING },
            UserId: {
                type: Sequelize.UUID,
                allowNull: false,
                references: { model: "Users", key: "id" },
                onUpdate: "CASCADE",
            },
        });
    },
    async down (queryInterface, Sequelize) {
        await queryInterface.dropTable("Orders");
    }
};