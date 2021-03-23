module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('regioes_proximas', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_regiao: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'regiao',
          key: 'id',
        },
      },
      id_regiao_proxima: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'regiao',
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
    await queryInterface.dropTable('regioes_proximas');
  },
};
