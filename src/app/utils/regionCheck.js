// IF PRODUCT STORAGE AND CLIENTE IS IN NEARBY REGIONS : TRUE OTHERWISE : FALSE

//CLIENT ID
//PRODUCT ID

//RETURN FALSE / TRUE

import NearbyRegion from '../models/NearbyRegion';


async function regionCheck (customerRegion, storageRegion) {
  const result = false;

  const customer = await NearbyRegion.findOne({ where: { 
    region_id: customerRegion,
    nearby_region_id: storageRegion
  } });

  const storage = await NearbyRegion.findOne({ where: { 
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