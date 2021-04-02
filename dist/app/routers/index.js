"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _swagger = require('./swagger'); var _swagger2 = _interopRequireDefault(_swagger);

var _category = require('./category'); var _category2 = _interopRequireDefault(_category);
var _customer = require('./customer'); var _customer2 = _interopRequireDefault(_customer);
var _nearbyRegions = require('./nearbyRegions'); var _nearbyRegions2 = _interopRequireDefault(_nearbyRegions);
var _order = require('./order'); var _order2 = _interopRequireDefault(_order);
var _orderProduct = require('./orderProduct'); var _orderProduct2 = _interopRequireDefault(_orderProduct);
var _product = require('./product'); var _product2 = _interopRequireDefault(_product);
var _productStock = require('./productStock'); var _productStock2 = _interopRequireDefault(_productStock);
var _region = require('./region'); var _region2 = _interopRequireDefault(_region);
var _returnReason = require('./returnReason'); var _returnReason2 = _interopRequireDefault(_returnReason);
var _stock = require('./stock'); var _stock2 = _interopRequireDefault(_stock);
var _type = require('./type'); var _type2 = _interopRequireDefault(_type);
var _reportCategory = require('./reportCategory'); var _reportCategory2 = _interopRequireDefault(_reportCategory);

// import nearbyRegions from './nearbyRegions';

exports. default = [
  _category2.default,
  _customer2.default,
  _nearbyRegions2.default,
  _order2.default,
  _orderProduct2.default,
  _product2.default,
  _productStock2.default,
  _region2.default,
  _reportCategory2.default,
  _returnReason2.default,
  _stock2.default,
  _swagger2.default,
  _type2.default,
];
