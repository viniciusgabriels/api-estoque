import Sequelize, { Model } from 'sequelize';

class OrderProduct extends Model {
  static init(sequelize) {
    super.init(
      {
        status: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        quantity: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        preco_venda: {
          type: Sequelize.DataTypes.FLOAT,
          allowNull: false,
        },
        order_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'order',
            key: 'id',
          },
        },
        product_stock_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'product_stock',
            key: 'id',
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Order, {
      as: 'order',
      foreignKey: 'order_id',
    });
    this.hasMany(models.ProductStock, {
      as: 'product_stock',
      foreignKey: 'product_stock_id',
    });
  }
}

export default OrderProduct;