import Sequelize, { Model } from 'sequelize';

class OrderProduct extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        order_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'orders',
            key: 'id',
          },
        },
        product_stock_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'product_stock',
            key: 'id',
          },
        },
        return_reason_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'return_reason',
            key: 'id',
          },
        },
        quantity: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        price: {
          type: Sequelize.DataTypes.DECIMAL,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'order_product',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Order, {
      as: 'order_product',
      foreignKey: 'order_id',
    });
    this.belongsTo(models.ProductStock, {
      as: 'product_stock',
      foreignKey: 'product_stock_id',
    });
    this.belongsTo(models.ReturnReason, {
      as: 'return_reason',
      foreignKey: 'return_reason_id',
    });
  }
}

export default OrderProduct;
