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
        client_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'customers',
            key: 'id',
          },
        },
        origin_order_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'orders',
            key: 'id',
          },
        },
        data: {
          type: Sequelize.DataTypes.DATE,
          allowNull: true,
        },
        type_id: {
          type: Sequelize.DataTypes.STRING,
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
    this.hasMany(models.Type, {
      as: 'type',
      foreignKey: 'type_id',
    });
    this.hasMany(models.OrderProduct, {
      as: 'order_product',
      foreignKey: 'order_product_id',
    });
    this.belongsTo(models.Customer, {
      as: 'customer',
      foreignKey: 'customer_id',
    });
    this.belongsToMany(models.Stock, {
      as: 'stock',
      foreignKey: 'stock_id',
    });
  }
}

export default Order;
