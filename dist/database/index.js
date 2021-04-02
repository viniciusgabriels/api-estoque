"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Category = require('../app/models/Category'); var _Category2 = _interopRequireDefault(_Category);
var _Product = require('../app/models/Product'); var _Product2 = _interopRequireDefault(_Product);
var _Customer = require('../app/models/Customer'); var _Customer2 = _interopRequireDefault(_Customer);
var _Type = require('../app/models/Type'); var _Type2 = _interopRequireDefault(_Type);
var _Stock = require('../app/models/Stock'); var _Stock2 = _interopRequireDefault(_Stock);
var _Region = require('../app/models/Region'); var _Region2 = _interopRequireDefault(_Region);
var _Order = require('../app/models/Order'); var _Order2 = _interopRequireDefault(_Order);
var _NearbyRegion = require('../app/models/NearbyRegion'); var _NearbyRegion2 = _interopRequireDefault(_NearbyRegion);
var _OrderProduct = require('../app/models/OrderProduct'); var _OrderProduct2 = _interopRequireDefault(_OrderProduct);
var _ProductStock = require('../app/models/ProductStock'); var _ProductStock2 = _interopRequireDefault(_ProductStock);
var _ReturnReason = require('../app/models/ReturnReason'); var _ReturnReason2 = _interopRequireDefault(_ReturnReason);

const models = [
  _Category2.default,
  _Customer2.default,
  _NearbyRegion2.default,
  _Order2.default,
  _OrderProduct2.default,
  _Product2.default,
  _ProductStock2.default,
  _Region2.default,
  _ReturnReason2.default,
  _Stock2.default,
  _Type2.default,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new (0, _sequelize2.default)(_database2.default);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

exports. default = new Database();
