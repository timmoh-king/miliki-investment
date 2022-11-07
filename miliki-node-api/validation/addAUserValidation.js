const { object, string, number } = require("joi");

function addAUserValidation(user) {
  const schema = object({
    firstname: string().required(),
    lastname: string().required(),
    email: string().email().required(),
    password: string().min(8).required(),
    contact: number().required()
  });

  return schema.validate(user);
}

module.exports = {
  addAUserValidation
}