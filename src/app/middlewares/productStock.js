/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */

import ProductStock from '../models/ProductStock';
import Customer from '../models/Customer';
import Stock from '../models/Stock';
import Order from '../models/Order';

async function checkRegionCustomer(req, res, next) {
  const { customerId, product } = req.body;

  const customer = await Customer.findOne({
    attributes: ['region_id'],
    where: { id: customerId },
  });

  const productStock = await ProductStock.findOne({
    attributes: ['stock_id'],
    where: { id: product[0].productStockId },
  });

  const stock = await Stock.findOne({
    attributes: ['region_id'],
    where: { id: productStock.dataValues.stock_id },
  });

  if (customer.dataValues.region_id !== stock.dataValues.region_id) {
    return res.status(400).json({
      message: 'Não tem estoque na sua região',
    });
  }

  next();
}

async function checkStorage(req, res, next) {
  const { product } = req.body;

  const productStock = await ProductStock.findOne({
    attributes: ['quantity'],
    where: { id: product[0].productStockId },
  });

  const quantityStock = productStock.dataValues.quantity - product[0].quantity;

  if (quantityStock <= 0) {
    return res.status(400).json({
      message: 'Sem estoque',
    });
  }

  next();
}

async function checkNearbyRegions(req, res, next) {
  const { customerId, product } = req.body;

  const productStock = await ProductStock.findOne({
    // attributes: ['quantity', 'product_id'],
    where: { id: product[0].productStockId },
  });
  // console.log(productStock.dataValues)
  const customer = await Customer.findOne({
    attributes: ['region_id'],
    where: { id: customerId },
  });

  // console.log(productStock.dataValues.product_id)

  const quantityStock = productStock.dataValues.quantity - product[0].quantity;

  if (quantityStock <= 0) {
    const stock = await Stock.findOne({
      attributes: ['id', 'region_id'],
      where: { region_id: customer.dataValues.region_id },
    });

    const response = await ProductStock.findOne({
      where: {
        product_id: productStock.dataValues.product_id,
        stock_id: stock.dataValues.id,
      },
    });
    console.log(response.dataValues)
    if (!response) {
      return res.status(400).json({
        message: 'Sem estoque na região',
      });
    }

    // console.log(response.dataValues)

    // await Order.create({
    //   cutomer_id: customer.dataValues.id,
    //   stock_id: productStock.dataValues.stock_id,
    //   product: productStock.dataValues.product_id,
    // })
  }

  next();
}

export { checkStorage, checkRegionCustomer, checkNearbyRegions };
