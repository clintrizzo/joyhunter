const { Event } = require("../models");

const eventData = [
  {
    eventTitle: "Birthday Party",
    date: "06/09/2020",
    description: "John's birthday party",
  },
  {
    eventTitle: "Night raid at woods",
    date: "12/13/2020",
    description: "Fight cultists",
  },
];

const eventInfo = () => Event.bulkCreate(eventData);
module.exports = eventInfo;
