"use strict";Object.defineProperty(exports, "__esModule", {value: true});exports. default = (request, response, next) => {
  const { method, url, params, query, ip, body } = request;
  console.log(method, url, params, query, ip, body);

  next();
};
