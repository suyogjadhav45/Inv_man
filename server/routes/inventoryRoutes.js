const express = require("express");
const router = express.Router();
const { updateStock } = require("../controller/inventoryController");
// const { getStock } = require("../controller/inventoryController");

router.patch("/inventory/:id", updateStock);
// router.get("/inventory", getStock);

module.exports = router;
