const db = require("../config/db");

exports.updateQuantityById = (id, uom, callback) => {
  db.run(
    "UPDATE adminl_product SET uom = ? WHERE id = ?",
    // "SELECT * FROM adminl_invman",
    [uom, id],
    function (err) {
      if (err) {
        return console.error(err.message);
      }
      console.log(`Row(s) updated: ${this.changes}`);
      callback();
    }
  );

  // exports.getInventory = (id, uom, callback) => {
  //   db.run(
  //     "SELECT * FROM inventory",
  //     // [uom, id],
  //     function (err) {
  //       if (err) {
  //         return console.error(err.message);
  //       }
  //       console.log(`Row(s) updated: ${this.changes}`);
  //       callback();
  //     }
  //   );
  // };
};
