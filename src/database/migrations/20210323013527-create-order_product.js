module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('order_product', {
      status: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      preco_venda: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false,
      },
      order_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'order',
          key: 'id',
        },
      },
      product_stock_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'product_stock',
          key: 'id',
        },
      },
      created_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('order_product');
  },
};
