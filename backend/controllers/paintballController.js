
const db = require("../models");

module.exports = {
  eventLists: function(req, res){
    db.Paintball.findAll()
    .then((data) => {
      console.log(data);
      res.json(data);
    })
  }
}