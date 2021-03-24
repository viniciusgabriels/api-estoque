import Sequelize, { Model } from 'sequelize';

class NearbyRegion extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
      },
        region_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'region',
            key: 'id',
        },
      },
        nearby_region_id: {
          type: Sequelize.DataTypes.INTEGER,
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
      as: 'region',
      foreignKey: 'nearby_region_id',
    });
  }
}

export default NearbyRegion;

