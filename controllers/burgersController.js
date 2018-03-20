const express = require("express");
const burgers = require("../models/burger.js");
const router = express.Router();
const bodyParser = require("body-parser");

router.get("/", (req, res) => {
    burger.all(function(data) {
        const hbsObject = {
            burgers: data
        };
        res.render("index", hbsObjec);
    });
});

router.post("/api/burgers", (req,res) => {
    burgers.create(req.body.name, function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("api/burgers/:id", (req, res) => {
    burger.update(req.params.id, function(result) {
        if(result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;