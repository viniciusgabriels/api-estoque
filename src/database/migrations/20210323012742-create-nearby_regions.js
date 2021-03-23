module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('nearby_regions', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_region: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'region',
          key: 'id',
        },
      },
      id_nearby_region: {
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

  down: async (queryInterface) => {
    await queryInterface.dropTable('nearby_regions');
  },
};
