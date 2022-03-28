const pool = require('./pool.js');

// promise
exports.dbquery = (queryText, queryParams) => {
    return new Promise((resolve, reject) => {
        pool
        .query(queryText, queryParams)
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
}
