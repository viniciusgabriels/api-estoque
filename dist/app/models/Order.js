"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Order extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: _sequelize2.default.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        customer_id: {
          type: _sequelize2.default.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'customers',
            key: 'id',
          },
        },
        origin_order_id: {
          type: _sequelize2.default.DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'orders',
            key: 'id',
          },
        },
        date: {
          type: _sequelize2.default.DataTypes.DATE,
          allowNull: true,
        },
        type_id: {
          type: _sequelize2.default.DataTypes.INTEGER,
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

exports. default = Order;
