"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _OrderProductController = require('../controllers/OrderProductController'); var _OrderProductController2 = _interopRequireDefault(_OrderProductController);

const routes = new (0, _express.Router)();

routes.get('/order-product', _OrderProductController2.default.index);
routes.get('/order-product/:orderId/:id', _OrderProductController2.default.show);

exports. default = routes;
