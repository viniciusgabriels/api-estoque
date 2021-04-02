"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _NearbyRegionController = require('../controllers/NearbyRegionController'); var _NearbyRegionController2 = _interopRequireDefault(_NearbyRegionController);
var _nearby = require('../middlewares/nearby');

const routes = new (0, _express.Router)();

routes.get('/nearbyregion', _NearbyRegionController2.default.index);
routes.get('/nearbyregion/:id', _NearbyRegionController2.default.show);
routes.post('/nearbyregion', [_nearby.validateNumber, _nearby.notSameNumber], _NearbyRegionController2.default.store);
routes.put('/nearbyregion/:id', [_nearby.validateNumber, _nearby.notSameNumber], _NearbyRegionController2.default.update);
routes.delete('/nearbyregion/:id', _NearbyRegionController2.default.delete);

exports. default = routes;
