const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./appapi");
router.use("/appapi", apiRoutes);
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);
module.exports = router;