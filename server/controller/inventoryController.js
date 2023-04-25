const db = require("../config/db");
// const { updateQuantityById } = require("../models/inventoryModel");

exports.updateStock = (req, res) => {
  const { id, uom } = req.body;
  const sql = "UPDATE adminl_product SET uom = ? WHERE id = ?";
  const params = [uom, id];
  db.run(sql, params, function (err) {
    if (err) {
      console.error(err.message);
      res.status(500).json({ message: "Failed to update UOM." });
    } else {
      res.status(200).json({ message: "UOM updated successfully." });
    }
  });
};
