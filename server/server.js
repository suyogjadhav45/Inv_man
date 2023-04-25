const express = require("express");
const app = express();
const cors = require("cors");
const port = 3011;
const db = require("./config/db");

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", require("./routes/inventoryRoutes"));

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
