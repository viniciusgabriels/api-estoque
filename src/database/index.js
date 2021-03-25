import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Category from '../app/models/Category';
import Product from '../app/models/Product';
import Customer from '../app/models/Customer';
import Type from '../app/models/Type';
import Stock from '../app/models/Stock';
import Region from '../app/models/Region';
import Order from '../app/models/Order';
import NearbyRegion from '../app/models/NearbyRegion';
import OrderProduct from '../app/models/OrderProduct';
import ProductStock from '../app/models/ProductStock';

const models = [
  Category,
  Customer,
  NearbyRegion,
  Order,
  OrderProduct,
  Product,
  ProductStock,
  Region,
  Stock,
  Type,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
