"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Region extends _sequelize.Model {
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
          type: _sequelize2.default.DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'region',
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Customer, {
      as: 'customers',
      foreignKey: 'region_id',
    });
    this.hasMany(models.Stock, {
      as: 'stock',
      foreignKey: 'region_id',
    });
  }
}

exports. default = Region;
