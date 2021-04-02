"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ProductStockController = require('../controllers/ProductStockController'); var _ProductStockController2 = _interopRequireDefault(_ProductStockController);

const routes = new (0, _express.Router)();

routes.get('/productStock', _ProductStockController2.default.index);
routes.get('/productStock/:id', _ProductStockController2.default.show);
routes.post('/productStock', _ProductStockController2.default.store);
routes.put('/productStock/:id', _ProductStockController2.default.update);
routes.delete('/productStock/:id', _ProductStockController2.default.delete);

exports. default = routes;