const db = require('../config');
const pick = require("lodash/pick");
const { isEmpty } = require("lodash");

module.exports = {
    getUsersHandler: async (req, res) => {
        const users = await db.search('miliki.user');

        res.status(200).json({ users });
    },
    updateUserHandler: async (req, res) => {
        //Type code here
        res.status(200).json({ message: "Yes the execution is done!" });
    }
}