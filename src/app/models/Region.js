import Sequelize, { Model } from 'sequelize';

class Region extends Model {
  static init(sequelize) {
    super.init(
      {
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
      },
      {
        sequelize,
        tableName: 'region',
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Customer, {
      as: 'customers',
      foreignKey: 'region_id',
    });
    this.hasMany(models.Stock, {
      as: 'stock',
      foreignKey: 'region_id',
    });
  }
}

export default Region;
