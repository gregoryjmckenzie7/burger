const orm = require("../config/orm.js");

const burgers = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    };
    create: function(value, cb) {
        orm.insertOne("burgers", "burger_name", value, function(res) {
            cb(res);
        });
    };
    update: function(id, cb) {
        orm.updateOne("burgers", "devoured", true, "id = " + id, function(res) {
            cb(res);
        });
    };
}

module.exports = burgers;