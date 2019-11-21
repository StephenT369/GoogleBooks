const router = require("express").Router();
const googleContrl= require("../../controllers/googleContrl");
router
  .route("/")
  .get(googleContrl.findAll);
module.exports = router;