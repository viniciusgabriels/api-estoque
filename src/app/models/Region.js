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
        created_at: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'products',
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Client, {
      as: 'client',
      foreignKey: 'client_id',
    });

    this.hasMany(models.Product, {
    as: 'product',
    foreignKey: 'product_id',
    });
  }
}

export default Region;

