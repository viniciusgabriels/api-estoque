"use strict";Object.defineProperty(exports, "__esModule", {value: true});function validateData(request, response, next) {
  const { name } = request.body;

  if (!name || name == '') {
    return response.status(400).json({
      message: `Invalid data`,
    });
  }

  return next();
}

exports. default = validateData;
