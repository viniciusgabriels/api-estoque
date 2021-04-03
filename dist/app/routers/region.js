"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _RegionController = require('../controllers/RegionController'); var _RegionController2 = _interopRequireDefault(_RegionController);

var _region = require('../middlewares/region');

const routes = new (0, _express.Router)();

routes.get('/region', _RegionController2.default.index);
routes.get('/region/:id', _RegionController2.default.show);
routes.post('/region', _region.validateData, _RegionController2.default.store);
routes.put('/region/:id', _region.validateData, _RegionController2.default.update);
routes.delete('/region/:id', _RegionController2.default.delete);

exports. default = routes;
