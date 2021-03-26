// IF PRODUCT STORAGE AND CLIENTE IS IN NEARBY REGIONS : TRUE OTHERWISE : FALSE

//CLIENT ID
//PRODUCT ID

//RETURN FALSE / TRUE

import Customer from '../models/Customer';
import StockController from '../controllers/StockController';
import NearbyRegionController from '../controllers/NearbyRegionController';
import RegionController from '../controllers/RegionController';

async function regionCheck (customerId, storageId) {
  const result = false;

  const customer = await Customer.findOne({
    attributes: ['id', 'name', 'phone'],
    where: { customerId },
  });
  
  const storage = storageId;



  
  return result
}