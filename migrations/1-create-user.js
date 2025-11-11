"use strict";
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable("Users", {
            id: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true },
            username: { type: Sequelize.STRING, allowNull: false },
            email: { type: Sequelize.STRING, allowNull: false, unique: true },
            password: { type: Sequelize.STRING, allowNull: false },
        });
    },
    async down (queryInterface, Sequelize) {
        await queryInterface.dropTable("Users");
    }
}