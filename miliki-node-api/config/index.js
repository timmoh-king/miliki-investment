const knex = require('./knex.js');
const get = require('lodash/get');
const isEmpty = require('lodash/isEmpty');
const isNumber = require('lodash/isNumber');
const isBoolean = require('lodash/isBoolean');
const keys = require('lodash/keys');

const stubParams = (params) => params.reduce((prevVal, currVal, index) => index === 0 ? currVal : prevVal + ', ' + currVal, '');

module.exports = {
    truncate: async (tableName) => {
        await knex.raw(`truncate table ${tableName}`);
    },
    raw_query: async (query) => {
        const result = knex.raw(query);
        console.log("Miliki investment => ", { result });
        return result;
    },
    search: async (tableName, whereParams, columns = '*', orderParam, orderBy) => {
        if (orderBy === undefined) {
            let result = await knex.select(columns)
                .from(tableName)
                .where(whereParams);
            if (result.length === 1) result = result[0];
            return result;
        } else {
            let result = await knex.select(columns)
                .from(tableName)
                .where(whereParams)
                .orderBy(orderParam, orderBy);
            return result;
        }
    },

    getAll: async (tableName, columns = '*') => {
        let responseData = await knex.select(columns).from(tableName);
        return responseData;
    },

    getById: async (id, table) => {
        const result = await knex.select()
            .from(table)
            .where({ 'id': id });
        return get(result, '[0]', {});
    },

    create: async (tableName, data, returning) => {
        let result = await knex(tableName).insert(data).returning(returning);
        return result[0];
    },

    update: async (tableName, whereParams, data) => {
        let result = await knex(tableName).where(whereParams).update(data);
        return result;
    },

    delete: async (tableName, id, data) => {
        let result = await knex(tableName).where({ 'id': id }).update({ 'deleted': data });
        return get(result, '[0]', {});
    },

    distinct: async (tableName, columns = '*') => {
        let result = await knex.distinct(columns).from(tableName);
        return result;
    },
    
    exec: async (procName, params = []) => {
        // ! Prevent sql injection:
        // Create value bindings for paramaters

        const valueBindings = params.map(x => '?').join();
        
        // Execute stored procedure using raw sql query
        
        const sql = `CALL ${procName} (${valueBindings})`;
        const result = await knex.raw(sql, params);
        const key = keys(result['rows'][0])[0];

        return get(result, `rows[0].${key}`, null);
    },
    execList: async (procName, params = []) => {
        // ! Prevent sql injection:
        // Create value bindings for paramaters

        const valueBindings = params.map(x => '?').join();
        
        // Execute stored procedure using raw sql query
        
        const sql = `CALL ${procName} (${valueBindings})`;
        const result = await knex.raw(sql, params);
        const key = keys(result['rows'][0])[0];

        return get(result, `rows[0].${key}`, null);
    },
    
    scalar: async (procName, params = []) => {
        const sql = `select dbo.${procName}(${params})`;
        const result = await knex.raw(sql);
        return result[0][''];
    },

    createBatch: async (tableName, data) => {
        const result = await knex.batchInsert(tableName, data, data.length)
            .returning('id');
        return result;
    },

    batchUpdate: (tableName, collection, updateData) => {

        return knex.transaction(trx => {
            const queries = [];
            collection.tmp.map(doc => {
                let params = {
                    'id': doc,
                };

                const query = knex(tableName).where(params).update(updateData).transacting(trx);
                queries.push(query);
            });

            Promise.all(queries)
                .then(trx.commit)
                .catch(trx.rollback);
        });

    },
};


