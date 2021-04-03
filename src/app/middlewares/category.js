import Category from '../models/Category';
import Product from '../models/Product';

function validateData(request, response, next) {
  const { name } = request.body;

  if (!name || name.length < 3) {
    return response.status(400).json({
      message: `Invalid data`,
    });
  }

  return next();
}

function validateId(request, response, next) {
  const { id } = request.params;

  const parsed = Number.parseInt(id, 10);

  if (Number.isNaN(parsed) || parsed < 1) {
    return response.status(400).json({
      message: 'Invalid ID',
    });
  }

  request.categoryId = parsed;

  return next();
}

async function validateCategoryExist(request, response, next) {
  const category = await Category.findByPk(request.categoryId);

  if (!category) {
    return response.status(404).json({
      message: 'Category not found',
    });
  }

  request.category = category;

  return next();
}

async function categoryExistInProducts(request, response, next) {
  const category = await Product.findOne({
    where: { category_id: request.categoryId },
  });

  if (category) {
    return response.status(400).json({
      message: 'Unable to delete! Linked category to products',
    });
  }

  return next();
}

export {
  validateData,
  validateId,
  validateCategoryExist,
  categoryExistInProducts,
};
