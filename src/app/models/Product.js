import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: true,
        },
        price: {
          type: Sequelize.DataTypes.DECIMAL,
          allowNull: false,
        },
        status: {
          type: Sequelize.DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
        category_id: {
          type: Sequelize.DataTypes.INTEGER,
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

    // this.hasMany(models.ProductStock, {
    //   as: 'product_stock',
    //   foreignKey: 'product_id',
    // });
  }
}

export default Product;
