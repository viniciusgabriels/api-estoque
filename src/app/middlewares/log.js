export default (request, response, next) => {
  const { method, url, params, query, ip, body } = request;
  console.log(method, url, params, query, ip, body);

  next();
};
