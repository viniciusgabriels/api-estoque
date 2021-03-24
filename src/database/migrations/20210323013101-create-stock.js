module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('stock', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      local: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      region_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'region',
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
<<<<<<< HEAD
    
   down: async (queryInterface) => {
=======

  down: async (queryInterface) => {
>>>>>>> 8d36afa92ffc4bff586fe18afe59f2f53ac4cd74
    await queryInterface.dropTable('stock');
  },
};
