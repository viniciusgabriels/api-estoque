function validateNumber(request, response, next) {
  const { region, nearbyRegion } = request.body;

  const regionTester = !isNaN(region)
  const nearbyTester = !isNaN(nearbyRegion)
  console.log(regionTester, nearbyTester, region, nearbyRegion)

  if(!regionTester || !nearbyTester) {
    return response.status(400).json({
      message: `Invalid data`,
    });
  }

  next();
}


export { validateNumber };