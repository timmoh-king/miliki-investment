const config = {
    client: 'pg',
    version: '8.8.0',
    connection: {
        host: "localhost",
        user: "postgres",
        port: 5432,
        database: "postgres",
        password: "@_Timmoh7",
    },
    pool: { min: 0, max: 15 }
};

const knex = require('knex')(config);

module.exports = knex;