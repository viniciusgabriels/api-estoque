"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Type extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: _sequelize2.default.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        description: {
          type: _sequelize2.default.DataTypes.STRING(240),
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'type',
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Order, {
      as: 'order_type',
      foreignKey: 'type_id',
    });
  }
}

exports. default = Type;
