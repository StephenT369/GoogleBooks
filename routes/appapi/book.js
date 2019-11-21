const router = require("express").Router();
const booksContrl = require("../../controllers/booksContrl");
router.route("/")
  .get(booksContrl.findAll)
  .post(booksContrl.create);
router
  .route("/:id")
  .get(booksContrl.findById)
  .put(booksContrl.update)
  .delete(booksContrl.remove);
module.exports = router;