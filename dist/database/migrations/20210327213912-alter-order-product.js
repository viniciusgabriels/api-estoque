"use strict";module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('order_product', 'return_reason_id', {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'return_reason',
        key: 'id',
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('order_product', 'return_reason_id');
  },
};
