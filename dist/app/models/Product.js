"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Product extends _sequelize.Model {
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
        description: {
          type: _sequelize2.default.DataTypes.INTEGER,
          allowNull: true,
        },
        price: {
          type: _sequelize2.default.DataTypes.DECIMAL,
          allowNull: false,
        },
        status: {
          type: _sequelize2.default.DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
        category_id: {
          type: _sequelize2.default.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'categories',
            key: 'id',
          },
        },
      },
      {
        sequelize,
        tableName: 'products',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Category, {
      as: 'categories',
      foreignKey: 'category_id',
    });
    this.hasMany(models.ProductStock, {
      as: 'product_stock',
      foreignKey: 'product_id',
    });
  }
}

exports. default = Product;
