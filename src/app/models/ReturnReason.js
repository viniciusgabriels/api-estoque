import Sequelize, { Model } from 'sequelize';

class ReturnReason extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        description: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'return',
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.OrderProduct, {
      as: 'return_reason_id',
      foreignKey: 'return_reason_id',
    });
  }
}

export default ReturnReason;
