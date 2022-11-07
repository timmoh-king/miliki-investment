const Joi = require("joi");

function signInValidation(credentials) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });

  return schema.validate(credentials);
}

module.exports = {
  signInValidation
}