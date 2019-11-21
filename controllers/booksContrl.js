const db = require("../models");
module.exports = {
  findAll: function(req, res) {
    db.GoogleBook.find(req.query)
      .then(dbBook => res.json(dbBook))
  },
  findById: function(req, res) {
    db.GoogleBook.findById(req.params.id)
      .then(dbBook => res.json(dbBook))
  },
  create: function(req, res) {
    db.GoogleBook.create(req.body)
      .then(dbBook => res.json(dbBook))
  },
  update: function(req, res) {
    db.GoogleBook.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbBook => res.json(dbBook))
  },
  remove: function(req, res) {
    db.GoogleBook.findById(req.params.id)
      .then(dbBook => dbBook.remove())
      .then(dbBook => res.json(dbBook))
  }
};
