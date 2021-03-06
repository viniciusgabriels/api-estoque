"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Category extends _sequelize.Model {
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
        tableName: 'categories',
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Product, {
      as: 'product',
      foreignKey: 'category_id',
    });
  }
}

exports. default = Category;
