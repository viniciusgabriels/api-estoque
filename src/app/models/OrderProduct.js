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
          primaryKey: true,
          references: {
            model: 'orders',
            key: 'id',
          },
        },
        product_stock_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          references: {
            model: 'product_stock',
            key: 'id',
          },
        },
        quantity: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        price: {
          type: Sequelize.DataTypes.FLOAT,
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
  }
}

export default OrderProduct;
