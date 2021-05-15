const axios = require("axios");
const db = require("../models");

module.exports = {
  eventLists: function(req, res){
    db.Profile.findAll()
    .then((data) => {
      console.log(data);
      res.json(data);
    })
  }
}