module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      price: {
        type: Sequelize.DataTypes.DECIMAL,
        allowNull: false,
      },
      status: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      category_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'categories',
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
  down: async queryInterface => {
    await queryInterface.dropTable({
      tableName: 'products',
    });
  },
};
