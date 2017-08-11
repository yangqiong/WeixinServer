"use strict";

let express = require("express");
let router = express.Router();
let getOpenID = require("./getOpenID");

router.get("/getOpenID", getOpenID)

module.exports = router;