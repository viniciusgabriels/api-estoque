function validateNumber(request, response, next) {
  const { region, nearbyRegion } = request.body;

  if(!isNaN(region) || !isNaN(nearbyRegion)) {
    return response.status(400).json({
      message: `Invalid data`,
    });
  }

  next();
}


export { validateNumber };