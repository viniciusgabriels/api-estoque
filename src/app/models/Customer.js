import Sequelize, { Model } from 'sequelize';

class Customer extends Model {
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
          type: Sequelize.DataTypes.STRING(100),
          allowNull: false,
        },
        phone: {
          type: Sequelize.DataTypes.INTEGER,
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
        tableName: 'customers',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Region, {
      as: 'customer',
      foreignKey: 'region_id',
    });
  }
}

export default Customer;
