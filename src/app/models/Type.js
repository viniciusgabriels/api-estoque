import Sequelize, { Model } from 'sequelize';

class Type extends Model {
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
          type: Sequelize.DataTypes.STRING(240),
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

  // static associate(models) {
  //   // this.hasMany(models.Order, {
  //   //   as: 'order_type',
  //   //   foreignKey: 'type_id',
  //   // });
  // }
}

export default Type;
