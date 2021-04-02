"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class OrderProduct extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: _sequelize2.default.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        order_id: {
          type: _sequelize2.default.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'orders',
            key: 'id',
          },
        },
        product_stock_id: {
          type: _sequelize2.default.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'product_stock',
            key: 'id',
          },
        },
        return_reason_id: {
          type: _sequelize2.default.DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'return_reason',
            key: 'id',
          },
        },
        quantity: {
          type: _sequelize2.default.DataTypes.INTEGER,
          allowNull: false,
        },
        price: {
          type: _sequelize2.default.DataTypes.FLOAT,
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
      as: 'order',
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

exports. default = OrderProduct;
