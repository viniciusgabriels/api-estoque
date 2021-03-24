import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Category from '../app/models/Category';
import Product from '../app/models/Product';
import Customer from '../app/models/Customer';
import Type from '../app/models/Type';
import Stock from '../app/models/Stock';
import Region from '../app/models/Region';

const models = [Category, Product, Customer, Type, Stock, Region];

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
