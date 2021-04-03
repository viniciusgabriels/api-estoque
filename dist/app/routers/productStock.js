"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ProductStockController = require('../controllers/ProductStockController'); var _ProductStockController2 = _interopRequireDefault(_ProductStockController);

const routes = new (0, _express.Router)();

routes.get('/product-stock', _ProductStockController2.default.index);
routes.get('/product-stock/:id', _ProductStockController2.default.show);
routes.post('/product-stock', _ProductStockController2.default.store);
routes.put('/product-stock/:id', _ProductStockController2.default.update);
routes.delete('/product-stock/:id', _ProductStockController2.default.delete);

exports. default = routes;
