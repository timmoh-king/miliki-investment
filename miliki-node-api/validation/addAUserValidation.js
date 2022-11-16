const Joi = require("joi");

function addAUserValidation(user) {
  const schema = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    confirmPassword: Joi.string().min(8).required(),
    contact: Joi.number().required()
  });

  return schema.validate(user);
}

module.exports = {
  addAUserValidation
}