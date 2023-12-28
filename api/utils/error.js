export const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error;
};

//incase there is no error in system but we need to throw an error ex: password length is not enoguh
