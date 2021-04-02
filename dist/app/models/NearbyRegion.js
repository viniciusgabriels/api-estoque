"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class NearbyRegion extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: _sequelize2.default.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        region_id: {
          type: _sequelize2.default.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'region',
            key: 'id',
          },
        },
        nearby_region_id: {
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
        tableName: 'nearby_regions',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Region, {
      as: 'region',
      foreignKey: 'region_id',
    });
    this.belongsTo(models.Region, {
      as: 'nearby_region',
      foreignKey: 'nearby_region_id',
    });
  }
}

exports. default = NearbyRegion;
