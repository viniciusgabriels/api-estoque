"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class ReturnReason extends _sequelize.Model {
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
          type: _sequelize2.default.DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'return_reason',
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.OrderProduct, {
      as: 'return_reason',
      foreignKey: 'return_reason_id',
    });
  }
}

exports. default = ReturnReason;
