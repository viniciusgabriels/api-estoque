"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _OrderController = require('../controllers/OrderController'); var _OrderController2 = _interopRequireDefault(_OrderController);
var _order = require('../middlewares/order');

const routes = new (0, _express.Router)();

routes.get('/orders', _OrderController2.default.index);
routes.get('/orders/:id', [_order.validateId], _OrderController2.default.show);
routes.post('/orders', _OrderController2.default.store);
routes.put('/orders/:id', [_order.validateId], _OrderController2.default.update);
routes.delete('/orders/:id', [_order.validateId], _OrderController2.default.delete);

exports. default = routes;
