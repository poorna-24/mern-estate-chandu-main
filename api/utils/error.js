export const errorHandle = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error;
};

//incse there is no error in system but we need to throw an error ex password length is not enoguh
