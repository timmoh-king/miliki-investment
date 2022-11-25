const bcrypt = require("bcryptjs");
const { v4: uuid } = require("uuid");
const jwt = require("jsonwebtoken");
const db = require("../config");
const { signInValidation, addAUserValidation } = require("../validation");
const { encryptPassword } = require("../helpers");
const pick = require("lodash/pick");
const { isEmpty } = require("lodash");

module.exports = {
  signInHandler: async (req, res) => {
    const { error } = signInValidation(req.body);

    if (error)
      return res
        .status(400)
        .send({ errored: true, error: error.details[0].message });

    const { email, password } = req.body;

    const results = await db.search("miliki.user", { email });

    if (isEmpty(results))
      return res
        .status(401)
        .json({ errored: true, error: "Account does not exist" });

    const validPassword = await bcrypt.compareSync(password, results.password);

    if (!validPassword)
      return res
        .status(400)
        .json({ errored: true, error: "Incorrect Password" });

    console.log(validPassword);

    const response = pick(results, ["userid", "email"]);

    jwt.sign(
      { response },
      process.env.SECRET_KEY,
      { expiresIn: "1h" },
      (err, token) => {
        if (err)
          return res
            .status(500)
            .json({ err, message: "Internal Server Error" });
        return res
          .status(200)
          .json({ ...response, authorization_token: token });
      }
    );
  },
  signUpHandler: async (req, res) => {
    const { firstname, lastname, email, contact, password } = req.body;

    const { error } = addAUserValidation(req.body);

    if (error)
      return res
        .status(400)
        .send({ errored: true, error: error.details[0].message });

    const results = await db.search("miliki.user", { email });

    if (!isEmpty(results))
      return res
        .status(401)
        .json({ errored: true, error: "Account Already exists Login" });

    const contactExist = await db.search("miliki.user", { contact });

    if (!isEmpty(contactExist))
      return res
        .status(401)
        .json({ errored: true, error: "contact entered already exists in another account" });

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    req.body["userid"] = uuid();
    req.body["password"] = hash;

    const { confirmPassword, ...other } = req.body;

    const response = await db.create("miliki.user", other, ["userid", "email"]);

    jwt.sign(
      { response },
      process.env.SECRET_KEY,
      { expiresIn: "1h" },
      (err, token) => {
        if (err)
          return res
            .status(500)
            .json({ err, message: "Internal Server Error" });
        return res
          .status(200)
          .json({ ...response, authorization_token: token });
      }
    );
  },
};
