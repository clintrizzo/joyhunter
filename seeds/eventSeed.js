const { Event } = require("../models");

const eventData = [
  {
    eventTitle: "Birthday Party",
    location: "1700 Vandegrift Blvd, Oceanside, CA 92057",
    phoneNumber: "8669854932",
    date: "06/09/2020",
  },
  {
    eventTitle: "Night raid at woods",
    location: "1700 Vandegrift Blvd, Oceanside, CA 92057",
    phoneNumber: "8669854932",
    date: "12/13/2020",
  },
];

const eventInfo = () => Event.bulkCreate(eventData);
module.exports = eventInfo;
