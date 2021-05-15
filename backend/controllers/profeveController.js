const axios = require("axios");
const db = require("../models");

module.exports = {
  eventLists: function(req, res){
    db.Profeve.findAll()
    .then((data) => {
      console.log(data);
      res.json(data);
    })
  }
}