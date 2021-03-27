import Sequelize, { Model } from 'sequelize';

class ProductStock extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        quantity: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        stock_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'stock',
            key: 'id',
          },
        },
        product_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'product',
            key: 'id',
          },
        },
      },
      {
        sequelize,
        tableName: 'product_stock',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Stock, {
      as: 'stock',
      foreignKey: 'stock_id',
    });
    this.belongsTo(models.Product, {
      as: 'product',
      foreignKey: 'product_id',
    });
    this.hasMany(models.OrderProduct, {
      as: 'product_stock',
      foreignKey: 'product_stock_id',
    });
  }
}

export default ProductStock;
