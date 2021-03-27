function validateData(request, response, next) {
  const { name } = request.body;
  
  if (!name || name == '') {
    return response.status(400).json({
      message: `Invalid data`,
    });
  }

  next();
}

export { validateData };