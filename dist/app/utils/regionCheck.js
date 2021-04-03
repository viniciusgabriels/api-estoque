"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// IF PRODUCT STORAGE AND CLIENTE IS IN NEARBY REGIONS : TRUE OTHERWISE : FALSE

//CLIENT ID
//PRODUCT ID

//RETURN FALSE / TRUE

var _NearbyRegion = require('../models/NearbyRegion'); var _NearbyRegion2 = _interopRequireDefault(_NearbyRegion);


async function regionCheck (customerRegion, storageRegion) {
  const result = false;

  const customer = await _NearbyRegion2.default.findOne({ where: { 
    region_id: customerRegion,
    nearby_region_id: storageRegion
  } });

  const storage = await _NearbyRegion2.default.findOne({ where: { 
    region_id: storageRegion,
    nearby_region_id: customerRegion
  } });

  if(costumer || storage) {
    result = true;
  } else {
    result = false;
    return response.status(400).json({
      message: `Region not allow transference`,
    });
  }
  
  return result
}