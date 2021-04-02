"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Customer extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: _sequelize2.default.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: _sequelize2.default.DataTypes.STRING(100),
          allowNull: false,
        },
        phone: {
          type: _sequelize2.default.DataTypes.INTEGER,
          allowNull: false,
        },
        region_id: {
          type: _sequelize2.default.DataTypes.INTEGER,
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
      as: 'region',
      foreignKey: 'region_id',
    });
    this.hasMany(models.Order, {
      as: 'order_customer',
      foreignKey: 'customer_id',
    });
  }
}

exports. default = Customer;
