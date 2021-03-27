import Sequelize, { Model } from 'sequelize';

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        customer_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'customers',
            key: 'id',
          },
        },
        date: {
          type: Sequelize.DataTypes.DATE,
          allowNull: true,
        },
        type_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'type',
            key: 'id',
          },
        },
      },
      {
        sequelize,
        tableName: 'orders',
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Type, {
      as: 'type',
      foreignKey: 'type_id',
    });
    this.belongsTo(models.Customer, {
      as: 'customers2',
      foreignKey: 'customer_id',
    });
    this.hasMany(models.OrderProduct, {
      as: 'order',
      foreignKey: 'order_id',
    });
  }
}

export default Order;
