const config = {
    client: 'pg',
    version: '8.8.0',
    connection: {
        // host: process.env.DATABASE_HOST,
        // user: process.env.DATABASE_USER,
        // port: process.env.DATABASE_PORT,
        // database: process.env.DATABASE,
        // password: process.env.DATABASE_USER_PASSWORD,
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