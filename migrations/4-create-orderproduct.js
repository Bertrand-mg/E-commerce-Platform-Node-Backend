"use strict";

const Order = require("../models/Order");

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable("OrderProducts", {
            OrderId: {
                type: Sequelize.UUID,
                references: {model: "Orders", key: "id" },
                onDelete: "CASCADE"
            },
            ProductId: {
                type: Sequelize.UUID,
                references: { model: "Products", key: "id" },
                onDelete: "CASCADE"
            },
            quantity: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
        });
    },
    async down (queryInterface, Sequelize) {
        await queryInterface.dropTable("OrderProducts");
    }
};