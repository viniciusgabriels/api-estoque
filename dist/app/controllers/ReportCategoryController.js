"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

// https://sequelize.org/master/manual/eager-loading.html
// https://stackoverflow.com/questions/19231514/save-object-with-associations-in-sequelizejs

var _Category = require('../models/Category'); var _Category2 = _interopRequireDefault(_Category);
var _Product = require('../models/Product'); var _Product2 = _interopRequireDefault(_Product);
var _ProductStock = require('../models/ProductStock'); var _ProductStock2 = _interopRequireDefault(_ProductStock);
var _OrderProduct = require('../models/OrderProduct'); var _OrderProduct2 = _interopRequireDefault(_OrderProduct);
var _Order = require('../models/Order'); var _Order2 = _interopRequireDefault(_Order);

class ReportCategoryController {
  async index(request, response) {
    const list = await _Category2.default.findAll({
      include: {
        model: _Product2.default,
        as: 'product',
        attributes: [],
        include: {
          model: _ProductStock2.default,
          as: 'product_stock',
          attributes: [],
          include: {
            model: _OrderProduct2.default,
            as: 'order_product',
            attributes: [],
            include: {
              model: _Order2.default,
              as: 'order',
              attributes: [],
              where: {
                type_id: 2,
              },
            },
          },
        },
      },
      attributes: ['name'],
    });
    return response.json(list);
  }

  async show(request, response) {
    const { categoryId } = request;

    const category = await _Category2.default.findByPk(categoryId, {
      attributes: ['id', 'name'],
    });

    return response.json(category);
  }
}

exports. default = new ReportCategoryController();
