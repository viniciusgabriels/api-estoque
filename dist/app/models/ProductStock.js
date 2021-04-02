"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class ProductStock extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: _sequelize2.default.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        quantity: {
          type: _sequelize2.default.DataTypes.INTEGER,
          allowNull: false,
        },
        stock_id: {
          type: _sequelize2.default.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'stock',
            key: 'id',
          },
        },
        product_id: {
          type: _sequelize2.default.DataTypes.INTEGER,
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
      as: 'order_product',
      foreignKey: 'product_stock_id',
    });
  }
}

exports. default = ProductStock;
