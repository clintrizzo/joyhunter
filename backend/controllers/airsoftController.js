
const db = require("../models");

module.exports = {
  eventLists: function(req, res){
    db.Airsoft.findAll()
    .then((data) => {
      console.log(data);
      res.json(data);
    })
  }
}