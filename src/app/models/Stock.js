import Sequelize, { Model } from 'sequelize';

class Stock extends Model {
  static init(sequelize) {
    super.init(
      {
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
      },
      {
        sequelize,
        tableName: 'stock',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Region, {
      as: 'stock',
      foreignKey: 'region_id',
    });
  }
}

export default Stock;
