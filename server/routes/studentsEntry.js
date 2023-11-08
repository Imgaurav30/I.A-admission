const express = require("express");
const router = express.Router();

const { studentEntry} = require("../controllers/studentEntry");
const { studentLogin} = require("../controllers/studentLogin");
router.post("/studentEntry", studentEntry);
router.post("/studentLogin", studentLogin);

module.exports = router;