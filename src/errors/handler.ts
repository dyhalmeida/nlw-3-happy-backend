import { ErrorRequestHandler } from 'express';
const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  console.error(error);
  return response.status(500).json(['internal server error']);
};

export default errorHandler;
