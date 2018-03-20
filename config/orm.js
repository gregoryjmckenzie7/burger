const connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, cb) {
        const queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, function(err, result) {
            if(err) {throw err;}
            cb(result);
        });
    };
    insertOne: function(table, col, val, cb) {
        let queryString =  `INSERT INTO ${table} (${col.toString()}) VALUES ("${val.toString()}");`;
        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if(err) {throw err;}
            cb(result);
        });
    };
    updateOne: function(table, col, val, condition, cb) {
        let queryString = `UPDATE ${table.toString()} SET ${col.toString()} = ${value} WHERE ${condition.toString()};`;
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if(err) {throw err;}
            cb(result);
        });
    };
};

module.exports = orm;