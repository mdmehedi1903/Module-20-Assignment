const express = require('express');
const testController = require("../controller/salseController");
const router = express.Router();

router.get("/total", testController.CalculateTotal);


module.exports = router;  