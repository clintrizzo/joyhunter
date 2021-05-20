
const db = require("../models");

exports.eventLists = function(req, res){
  db.Profile.findAll()
  .then((data) => {
    console.log(data);
    res.json(data);
  })}
